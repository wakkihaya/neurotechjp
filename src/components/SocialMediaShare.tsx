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
  let iconSize: number;
  if (device === "Desktop") iconSize = 50;
  else iconSize = 40;

  return (
    <div className="socialMedia">
      <img
        src="/img/share.png"
        width={iconSize - 20}
        height={iconSize - 20}
        className="socialMedia--share"
      />
      <FacebookShareButton url={url} className="socialMedia--icons">
        <FacebookIcon size={iconSize} />
      </FacebookShareButton>
      <TwitterShareButton url={url} className="socialMedia--icons">
        <TwitterIcon size={iconSize} />
      </TwitterShareButton>
      <LinkedinShareButton url={url} className="socialMedia--icons">
        <LinkedinIcon size={iconSize} />
      </LinkedinShareButton>
      <HatenaShareButton url={url} className="socialMedia--icons">
        <HatenaIcon size={iconSize} />
      </HatenaShareButton>
    </div>
  );
};
