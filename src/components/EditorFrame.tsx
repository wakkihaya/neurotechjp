import React from "react";
import type { FC } from "react";
import {
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useResponsive from "~hooks/use-responsive";

//TODO: deal with en/jp.
//TODO: Responsive
//TODO: Fetch data for editors
//TODO: deal with when only two editors.

interface EditorInfoProps {
  image?: string;
  name?: string;
  linkedInLink?: string;
  twitterLink?: string;
}

interface EditorFrameProps {
  
}

type Device = "Mobile" | "Desktop";

const EditorInfo: FC<EditorInfoProps> = props => {
  const { image, name, linkedInLink, twitterLink } = props;
  const device: Device = useResponsive();

  return (
    <div className="editor-info">
      <img src={image} className="editor-info--img" />
      <div className="editor-info--name">{name}</div>
      <div className="editor-info--sns">
        {linkedInLink && (
          <a
            href={linkedInLink}
            target="_blank"
            className="editor-info--sns-item"
            rel="noreferrer"
          >
            {device === "Desktop" ? (
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            ) : (
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            )}
          </a>
        )}
        {twitterLink && (
          <a
            href={twitterLink}
            target="_blank"
            className="editor-info--sns-item"
            rel="noreferrer"
          >
            {device === "Desktop" ? (
              <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
            ) : (
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            )}
          </a>
        )}
      </div>
    </div>
  );
};

export const EditorFrame: FC = () => {
  return (
    <div className="editor-frame">
      <div className="editor-frame--box">
        <div className="editor-frame--box-title">Writer</div>
        <EditorInfo
          image={"/img/about/Hayato_Waki.jpg"}
          linkedInLink={"test.com"}
          twitterLink={"test.com"}
          name={"Hayato Waki"}
        />
      </div>
      <div className="editor-frame--box">
        <div className="editor-frame--box-title">Interviewer</div>
        <EditorInfo
          image={"/img/about/Hayato_Waki.jpg"}
          linkedInLink={"test.com"}
          twitterLink={"test.com"}
          name={"Hayato Waki"}
        />
        <EditorInfo
          image={"/img/about/Hayato_Waki.jpg"}
          linkedInLink={"test.com"}
          twitterLink={"test.com"}
          name={"Hayato Waki"}
        />
      </div>
      <div className="editor-frame--box">
        <div className="editor-frame--box-title">Translator</div>
        <EditorInfo
          image={"/img/about/Hayato_Waki.jpg"}
          linkedInLink={"test.com"}
          twitterLink={"test.com"}
          name={"Hayato Waki"}
        />
      </div>
    </div>
  );
};
