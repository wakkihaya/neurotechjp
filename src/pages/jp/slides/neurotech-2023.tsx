import { Footer, Header, Meta } from "~components";
import React from "react";

const Neurotech2023: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "NEUROTECH 2023 レポート | NeurotechJP",
          desc: "CES2023やNEURO2022のニューロテックレポートをお手頃価格でまとめたパッケージです。",
          link: "https://neurotechjp.com/jp/slides/neurotech-2023/",
          image: "https://neurotechjp.com/img/slides/neurotech2023.png",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/neurotech2023-menu.jpg" />
        </div>
        <div className="slides-item--title">NEUROTECH 2023 レポート</div>
        <div className="slides-item--subtitle">
          CES2023 や NEURO2022
          ニューロテックレポートをお手頃価格でまとめたパッケージレポートです。
          産業面と学術面の両方から、今年度最新のニューロテック情報をまとめております。
          <br />
          購入にご興味ある方/お話から聞いてみたい方は、下記のフォームからご連絡下さい。
          <br />
          <br />
          単価価格: 80万円〜
        </div>
        <div className="slides-item--button">
          <a
            href="https://survey.typeform.com/to/QK2tDWR9"
            target="_blank"
            rel="noreferrer"
          >
            登録フォーム
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Neurotech2023;
