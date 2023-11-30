import React, { FC, ReactNode } from "react";

import styles from "./Alert.module.scss";

interface AlertProps {
  content: ReactNode;
}

export const Alert: FC<AlertProps> = ({ content }) => {
  return <div className={styles.alert}>{content}</div>;
};
