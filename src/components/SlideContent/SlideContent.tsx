import React from "react";

import styles from "./SlideContent.module.scss";

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
      <div className={styles["slide-content"]}>
        <div className={styles["slide-content--image"]}>
          <img src={imgSrc} alt={title} />
        </div>
        <div className={styles["slide-content--text"]}>
          <div className={styles["slide-content--text--title"]}>{title}</div>
          <div className={styles["slide-content--text--subtitle"]}>
            {children}
          </div>
        </div>
      </div>
    </a>
  );
};
