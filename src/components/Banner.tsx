import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type BannerProps = {
  children: React.ReactNode;
};

type BannerState = "Close" | "Open";

const storeBannerStateToLocalStorate = (bannerState: BannerState) => {
  window.localStorage.setItem("bannerState", JSON.stringify(bannerState));
};

const getBannerStateFromLocalStorage = () => {
  const rawData = window.localStorage.getItem("bannerState");
  if (rawData === null) return;
  return JSON.parse(rawData) as BannerState;
};

export const Banner: React.FC<BannerProps> = props => {
  const { children } = props;
  const [bannerState, setBannerState] = React.useState<BannerState>("Close");

  React.useEffect(() => {
    const test = getBannerStateFromLocalStorage();
    console.log(test);
    const currentBannerState = test ?? "Open";
    console.log(currentBannerState);
    setBannerState(currentBannerState);
  }, []);

  const onClickCloseButton = () => {
    setBannerState("Close");
    storeBannerStateToLocalStorate("Close");
  };

  return (
    <>
      {bannerState === "Open" && (
        <div className="banner">
          <div className="banner--text">{children}</div>
          <div className="banner--close" onClick={onClickCloseButton}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
