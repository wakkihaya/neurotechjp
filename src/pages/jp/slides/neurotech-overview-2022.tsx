import { Footer } from "~components/Footer";
import Header from "~components/Header";
import { Meta } from "~components/Meta";
import React from "react";

const NeurotechOverview2022: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title:
            "世界のニューロテックの概況とビジネス応用への道(2022) | NeurotechJP",
          desc: "最前線で活躍する世界のニューロテック企業の概況やビジネス応用への道、並びに彼らが抱えてきた課題とその解決策についてまとめたスライドです。",
          link: "https://neurotechjp.com/jp/slides/neurotech-overview-2022/",
          image:
            "https://neurotechjp.com/img/slides/neurotech-overview-2022.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--frame">
          <iframe
            src="https://speakerdeck.com/player/72dc13fee11642afb6af51ec1368d652"
            title="世界のニューロテックの概況とビジネス応用への道"
            allowFullScreen
          ></iframe>
        </div>
        <div className="slides-item--title">
          世界のニューロテックの概況とビジネス応用への道(2022)
        </div>
        <div className="slides-item--subtitle">
          【無料】最前線で活躍する世界のニューロテック企業の概況やビジネス応用への道、並びに彼らが抱えてきた課題とその解決策についてまとめたスライドです。
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NeurotechOverview2022;
