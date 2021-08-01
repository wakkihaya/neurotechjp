import React from "react";
import CookieConsent from "react-cookie-consent";
import NewsLetterMailForm from "~/components/NewsLetter";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer--newsletter">
        <div className="footer--newsletter-text">
          Join the newsletter and get blog updates!
        </div>
        <div className="footer--newsletter-form">
          <NewsLetterMailForm />
        </div>
      </div>
      <div className="footer--sns">
        <a
          href="https://twitter.com/NeurotechJPeng"
          target="_blank"
          className="footer--sns-twitter"
          rel="noreferrer"
        >
          <div className="footer--sns-twitter-text">EN</div>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://twitter.com/NeurotechJP"
          target="_blank"
          className="footer--sns-twitter"
          rel="noreferrer"
        >
          <div className="footer--sns-twitter-text">JP</div>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <footer className="footer--org">@2021 NeurotechJP</footer>

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

export default Footer;
