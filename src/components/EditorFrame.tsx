import React from "react";
import type { FC } from "react";
import {
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useResponsive from "~hooks/use-responsive";
import { useProfiles } from "~hooks/use-profiles";

//TODO: deal with en/jp.
//TODO: Responsive

interface EditorInfoProps {
  image?: string;
  name?: string;
  linkedInLink?: string;
  twitterLink?: string;
}

interface EditorFrameProps {
  writers?: string[];
  interviewers?: string[];
  translators?: string[];
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

export const EditorFrame: FC<EditorFrameProps> = props => {
  const { writers, interviewers, translators } = props;
  const { getTargetProfile } = useProfiles();

  console.log(writers);
  console.log(translators);

  return (
    <div className="editor-frame">
      {writers && writers.length !== 0 && (
        <div className="editor-frame--box">
          <div className="editor-frame--box-title">Writer</div>
          {writers.map((writer, j) => {
            const writerPrfoile = getTargetProfile(writer, "en");
            if (!writerPrfoile) return;
            return (
              <EditorInfo
                key={j}
                image={writerPrfoile.image}
                linkedInLink={writerPrfoile.linkedInLink}
                twitterLink={writerPrfoile.twitterLink}
                name={writerPrfoile.name}
              />
            );
          })}
        </div>
      )}
      {interviewers && interviewers.length !== 0 && (
        <div className="editor-frame--box">
          <div className="editor-frame--box-title">Interviewer</div>
          {interviewers.map((interviewer, j) => {
            const interviewerPrfoile = getTargetProfile(interviewer, "en");
            if (!interviewerPrfoile) return;
            return (
              <EditorInfo
                key={j}
                image={interviewerPrfoile.image}
                linkedInLink={interviewerPrfoile.linkedInLink}
                twitterLink={interviewerPrfoile.twitterLink}
                name={interviewerPrfoile.name}
              />
            );
          })}
        </div>
      )}
      {translators && translators.length !== 0 && (
        <div className="editor-frame--box">
          <div className="editor-frame--box-title">Translator</div>
          {translators.map((translator, j) => {
            const translatorProfoile = getTargetProfile(translator, "en");
            if (!translatorProfoile) return;
            return (
              <EditorInfo
                key={j}
                image={translatorProfoile.image}
                linkedInLink={translatorProfoile.linkedInLink}
                twitterLink={translatorProfoile.twitterLink}
                name={translatorProfoile.name}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
