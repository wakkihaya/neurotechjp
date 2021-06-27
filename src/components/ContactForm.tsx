import { TextField } from "@material-ui/core";

import { useForm, ValidationError } from "@formspree/react";

type ContactFormProps = {
  lang: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const [state, handleSubmit] = useForm("mzbyvdko");
  if (state.succeeded) {
    return (
      <div className="contact-form">
        <div className="contact-form--title">
          {lang === "EN" && <p> Contact us</p>}
          {lang === "JP" && <p> ご連絡はこちらから</p>}
        </div>
        <div className="contact-form--done"> Thanks for contacting!</div>
      </div>
    );
  }
  return (
    <div className="contact-form">
      <div className="contact-form--title">
        {lang === "EN" && <p> Contact us</p>}
        {lang === "JP" && <p> ご連絡はこちらから</p>}
      </div>
      <div className="contact-form--detail">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="name"
            name="name"
            className="contact-form--detail-text"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="contact-form--detail-text"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="contact-form--detail-text"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="contact-form--detail-submit">
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
