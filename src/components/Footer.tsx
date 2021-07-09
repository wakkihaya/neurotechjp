import React from "react";
import CookieConsent from "react-cookie-consent";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <footer className="footer--content">@2021 NeurotechJP</footer>

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
