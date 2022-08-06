import React from "react";
import type { FC } from "react";
import {
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useResponsive from "~hooks/use-responsive";
import { useProfiles } from "~hooks/use-profiles";
import useCurrentLang from "~hooks/use-currentLang";
import type { MembersList } from "~hooks";

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
  const { currentLang } = useCurrentLang();

  return (
    <div className="editor-frame">
      {writers && writers.length !== 0 && (
        <div className="editor-frame--box">
          <div className="editor-frame--box-title">
            <FontAwesomeIcon icon={faPencilAlt} />
            {currentLang === "EN" ? <p>Writer</p> : <p>ライター</p>}
          </div>
          {writers.map((writer, j) => {
            if (writer === "" && !writer) return;
            const writerPrfoile = getTargetProfile(writer as MembersList);
            if (!writerPrfoile) return;
            return (
              <EditorInfo
                key={j}
                image={writerPrfoile.image}
                linkedInLink={writerPrfoile.linkedInLink}
                twitterLink={writerPrfoile.enTwitterLink}
                name={writerPrfoile.enName}
              />
            );
          })}
        </div>
      )}
      {interviewers && interviewers.length !== 0 && (
        <div className="editor-frame--box">
          <div className="editor-frame--box-title">
            <FontAwesomeIcon icon={faComments} />
            {currentLang === "EN" ? <p>Interviewer</p> : <p>インタビュアー</p>}
          </div>
          {interviewers.map((interviewer, j) => {
            if (interviewer === "" && !interviewer) return;
            const interviewerPrfoile = getTargetProfile(
              interviewer as MembersList,
            );
            if (!interviewerPrfoile) return;
            return (
              <EditorInfo
                key={j}
                image={interviewerPrfoile.image}
                linkedInLink={interviewerPrfoile.linkedInLink}
                twitterLink={interviewerPrfoile.enTwitterLink}
                name={interviewerPrfoile.enName}
              />
            );
          })}
        </div>
      )}
      {translators && translators.length !== 0 && (
        <div className="editor-frame--box">
          <div className="editor-frame--box-title">
            <FontAwesomeIcon icon={faLanguage} />
            {currentLang === "EN" ? <p>Translator</p> : <p>翻訳者</p>}
          </div>
          {translators.map((translator, j) => {
            if (!translator && translator === "") return;
            const translatorProfoile = getTargetProfile(
              translator as MembersList,
            );
            if (!translatorProfoile) return;
            return (
              <EditorInfo
                key={j}
                image={translatorProfoile.image}
                linkedInLink={translatorProfoile.linkedInLink}
                twitterLink={translatorProfoile.enTwitterLink}
                name={translatorProfoile.enName}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
