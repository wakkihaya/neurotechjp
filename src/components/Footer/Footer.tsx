import React from "react";
import CookieConsent from "react-cookie-consent";
import { NewsLetterMailForm } from "../NewsLetter";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer--newsletter"]}>
        <div className={styles["footer--newsletter--text"]}>
          Join the newsletter and get blog updates!
        </div>
        <div className={styles["footer--newsletter--form"]}>
          <NewsLetterMailForm />
        </div>
      </div>
      <div className={styles["footer--sns"]}>
        <a
          href="https://twitter.com/NeurotechJP_en"
          target="_blank"
          className={styles["footer--sns--twitter"]}
          rel="noreferrer"
        >
          <div className={styles["footer--sns--twitter--text"]}>EN</div>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://twitter.com/NeurotechJP"
          target="_blank"
          className={styles["footer--sns--twitter"]}
          rel="noreferrer"
        >
          <div className={styles["footer--sns--twitter--text"]}>JP</div>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <footer className={styles["footer--org"]}>
        <a
          className={styles["footer--org--company"]}
          target="_blank"
          rel="noreferrer"
          href={
            "https://gorgeous-thought-c10.notion.site/About-NeurotechJP-LLC-2001568d112e43d2ae4e36868dcd98ed"
          }
        >
          Company
        </a>
        <div className={styles["footer--org--auth"]}> @2023 NeurotechJP</div>
      </footer>

      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="cookie-name"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          color: "#4e503b",
          fontSize: "13px",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};
