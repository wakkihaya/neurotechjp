import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = async () => {
    let targetLang;
    const currentLang = await localStorage.getItem("currentLang");
    if (currentLang) {
      targetLang = currentLang.replace(/[\"]/g, "");
    } else {
      targetLang = "EN";
    }

    return (
      email &&
      targetLang &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        TAG: targetLang,
      })
    );
  };

  return (
    <>
      {status != "error" ? (
        <>
          {status !== "success" ? (
            <>
              <input
                ref={node => (email = node)}
                type="email"
                placeholder="Email"
              />
              {status === "sending" ? (
                <div className="footer--newsletter-sending">Sending...</div>
              ) : (
                <button onClick={submit}>Subscribe</button>
              )}
            </>
          ) : (
            <div className="footer--newsletter-success">You're subscribed!</div>
          )}
        </>
      ) : (
        <div className="footer--newsletter-error">Error! {message}</div>
      )}
    </>
  );
};
const NewsLetterMailForm: React.FC = () => {
  const url = process.env.MAILCHIMP_URL || "";

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

export default NewsLetterMailForm;
