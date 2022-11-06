import React from "react";
import useResponsive from "~/hooks/use-responsive";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  HatenaShareButton,
  HatenaIcon,
} from "react-share";

import styles from "./SocialMediaShare.module.scss";

type Device = "Mobile" | "Desktop";

type SocialMediaShareProps = {
  url: string;
};
export const SocialMediaShare: React.FC<SocialMediaShareProps> = props => {
  const { url } = props;
  const device: Device = useResponsive();

  if (device == "Desktop") {
    return (
      <div className={styles["social-media"]}>
        <img
          src="/img/share.png"
          width={25}
          height={25}
          className={styles["social-media--share"]}
        />
        <SocialMediaList url={url} iconSize={45} />
      </div>
    );
  } else {
    return <MDSocialMediaShare url={url} />;
  }
};

const MDSocialMediaShare: React.FC<SocialMediaShareProps> = props => {
  const { url } = props;
  const [isShareOpen, setIsShareOpen] = React.useState<boolean>(false);
  const onClickShareButton = () => {
    setIsShareOpen(!isShareOpen);
  };

  if (!isShareOpen) {
    return (
      <img
        src="/img/share.png"
        width={15}
        height={15}
        className={styles["social-media--share"]}
        onClick={onClickShareButton}
      />
    );
  } else {
    return (
      <div className={styles["social-media"]}>
        <img
          src="/img/close.png"
          width={15}
          height={15}
          className={styles["social-media--close"]}
          onClick={onClickShareButton}
        />
        <SocialMediaList url={url} iconSize={30} />
      </div>
    );
  }
};

type SocialMediaListProps = {
  url: string;
  iconSize: number;
};

const SocialMediaList: React.FC<SocialMediaListProps> = props => {
  const { url, iconSize } = props;
  return (
    <div className={styles["social-media--icons"]}>
      <FacebookShareButton
        url={url}
        className={styles["social-media--icons-item"]}
      >
        <FacebookIcon size={iconSize} />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        className={styles["social-media--icons-item"]}
      >
        <TwitterIcon size={iconSize} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        className={styles["social-media--icons-item"]}
      >
        <LinkedinIcon size={iconSize} />
      </LinkedinShareButton>
      <HatenaShareButton
        url={url}
        className={styles["social-media--icons-item"]}
      >
        <HatenaIcon size={iconSize} />
      </HatenaShareButton>
    </div>
  );
};
