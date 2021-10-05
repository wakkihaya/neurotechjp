import React from "react";
import Link from "next/link";

type SlideContentProps = {
  linkRef?: string;
  imgSrc?: string;
  title?: string;
  children?: React.ReactNode;
};

export const SlideContent: React.FC<SlideContentProps> = props => {
  const { linkRef, imgSrc, title, children } = props;
  return (
    <Link href={linkRef}>
      <div className="slides-container--content">
        <div className="slides-container--content-image">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="slides-container--content-text content-text">
          <div className="content-text--title">{title}</div>
          <div className="content-text--subtitle">{children}</div>
        </div>
      </div>
    </Link>
  );
};
export default SlideContent;