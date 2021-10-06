import React from "react";

type SlideContentProps = {
  linkRef?: string;
  imgSrc?: string;
  title?: string;
  children?: React.ReactNode;
};

export const SlideContent: React.FC<SlideContentProps> = props => {
  const { linkRef, imgSrc, title, children } = props;
  return (
    <a href={linkRef} target="_blank" rel="noreferrer">
      <div className="slides-container--content">
        <div className="slides-container--content-image">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="slides-container--content-text content-text">
          <div className="content-text--title">{title}</div>
          <div className="content-text--subtitle">{children}</div>
        </div>
      </div>
    </a>
  );
};
export default SlideContent;
