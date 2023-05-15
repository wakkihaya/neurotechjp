import React from "react";
import type { ReactNode } from "react";

import styles from "./EventItem.module.scss";

interface EventItemProps {
  linkRef?: string;
  imgSrc?: string;
  title?: string;
  place?: string;
  description?: ReactNode;
}

export const EventItem: React.FC<EventItemProps> = props => {
  const { linkRef, imgSrc, title, place, description } = props;

  return (
    <a className={styles["event-item"]} href={linkRef}>
      <div className={styles["event-item--image"]}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles["event-item--content"]}>
        <div className={styles["event-item--content--title"]}>{title}</div>
        <div className={styles["event-item--content--place"]}>
          Location: {place}
        </div>
        <div className={styles["event-item--content--description"]}>
          {description}
        </div>
      </div>
    </a>
  );
};
