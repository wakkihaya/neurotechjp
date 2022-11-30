import { Footer, Header, Meta } from "~components";
import React from "react";

const BCILandscape2022: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "BCI landscape 2022 | NeurotechJP",
          desc: "BCI Landscape 2022 is out now LIVE！",
          link: "https://neurotechjp.com/slides/bci-landscape-2022/",
          image: "https://neurotechjp.com/img/slides/bci-landscape-2022-en.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/bci-landscape-2022-en.jpg" />
        </div>
        <div className="slides-item--title">BCI Landscape 2022</div>
        <div className="slides-item--subtitle">
          BCI Landscape 2022 is out now LIVE! 🧠
          <br />
          The landscape shows major players in various categories that are
          developing life-changing BCI technologies in 2022. Please use it for
          your new business ideas and research !
        </div>
        <div className="slides-item--button">
          <a href="/img/slides/bci-landscape-2022-en.jpg" download>
            Download
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BCILandscape2022;
