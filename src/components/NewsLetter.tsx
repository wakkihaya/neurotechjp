import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

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
        <div className="footer--newsletter-error">Error!</div>
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
