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

type Device = "Mobile" | "Desktop";

type SocialMediaShareProps = {
  url: string;
};
export const SocialMediaShare: React.FC<SocialMediaShareProps> = props => {
  const { url } = props;
  const device: Device = useResponsive();

  if (device == "Desktop") {
    return (
      <div className="socialMedia">
        <img
          src="/img/share.png"
          width={25}
          height={25}
          className="socialMedia--share"
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
        className="socialMedia--share"
        onClick={onClickShareButton}
      />
    );
  } else {
    return (
      <div className="socialMedia">
        <img
          src="/img/close.png"
          width={15}
          height={15}
          className="socialMedia--close"
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
    <div className="socialMedia--icons">
      <FacebookShareButton url={url} className="socialMedia--icons-item">
        <FacebookIcon size={iconSize} />
      </FacebookShareButton>
      <TwitterShareButton url={url} className="socialMedia--icons-item">
        <TwitterIcon size={iconSize} />
      </TwitterShareButton>
      <LinkedinShareButton url={url} className="socialMedia--icons-item">
        <LinkedinIcon size={iconSize} />
      </LinkedinShareButton>
      <HatenaShareButton url={url} className="socialMedia--icons-item">
        <HatenaIcon size={iconSize} />
      </HatenaShareButton>
    </div>
  );
};
