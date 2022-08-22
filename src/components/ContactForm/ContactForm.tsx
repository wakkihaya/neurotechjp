import { useForm, ValidationError } from "@formspree/react";
import React from "react";

import styles from "./ContactForm.module.scss";

type ContactFormProps = {
  lang: string;
};

export const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const [state, handleSubmit] = useForm("mzbyvdko");
  if (state.succeeded) {
    return (
      <div className={styles["contact-form"]}>
        <div className={styles["contact-form--title"]}>
          {lang === "EN" && <p> Contact us</p>}
          {lang === "JP" && <p> ご連絡はこちらから</p>}
        </div>
        <div className={styles["contact-form--done"]}>
          {" "}
          Thanks for contacting!
        </div>
      </div>
    );
  }
  return (
    <div className={styles["contact-form"]}>
      <div className={styles["contact-form--title"]}>
        {lang === "EN" && <p> Contact us</p>}
        {lang === "JP" && <p> ご連絡はこちらから</p>}
      </div>
      <div className={styles["contact-form--detail"]}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="name"
            name="name"
            className={styles["contact-form--detail-text"]}
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles["contact-form--detail-text"]}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={styles["contact-form--detail-text"]}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className={styles["contact-form--detail-submit"]}>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
