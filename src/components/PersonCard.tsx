import useResponsive from "~/hooks/use-responsive";
import React from "react";
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PersonCardProps = {
  twitterLink?: string;
  fbLink?: string;
  linkedInLink?: string;
  name?: string;
  role?: string;
  description?: string;
  image?: string;
};

type Device = "Mobile" | "Desktop";

export const PersonCard: React.FC<PersonCardProps> = props => {
  const device: Device = useResponsive();

  const {
    twitterLink,
    fbLink,
    linkedInLink,
    name,
    role,
    description,
    image = "/img/about/Anonymous.png",
  } = props;

  return (
    <div className="person-card">
      <div className="person-card--img-container">
        <img src={image} className="person-card--img-container-image" />
        <div className="person-card--img-container-sns">
          {linkedInLink && (
            <a
              href={linkedInLink}
              target="_blank"
              className="person-card--img-container-sns-item"
              rel="noreferrer"
            >
              {device === "Desktop" ? (
                <FontAwesomeIcon icon={faLinkedin} size="5x" />
              ) : (
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              )}
            </a>
          )}
          {fbLink && (
            <a
              href={fbLink}
              target="_blank"
              className="person-card--img-container-sns-item"
              rel="noreferrer"
            >
              {device === "Desktop" ? (
                <FontAwesomeIcon icon={faFacebookSquare} size="5x" />
              ) : (
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              )}
            </a>
          )}
          {twitterLink && (
            <a
              href={twitterLink}
              target="_blank"
              className="person-card--img-container-sns-item"
              rel="noreferrer"
            >
              {device === "Desktop" ? (
                <FontAwesomeIcon icon={faTwitterSquare} size="5x" />
              ) : (
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              )}
            </a>
          )}
        </div>
      </div>
      <div className="person-card--text">
        <div className="person-card--text-name">{name}</div>
        <div className="person-card--text-role">{role}</div>
        <div className="person-card--text-description">{description}</div>
      </div>
    </div>
  );
};

export default PersonCard;
