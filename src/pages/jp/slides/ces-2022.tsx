import { Footer, Header, Meta } from "~components";
import React from "react";

const CES2022: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "CES2022 ニューロテックレポート | NeurotechJP",
          desc: "CES2022に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。",
          link: "https://neurotechjp.com/jp/slides/ces-2022/",
          image: "https://neurotechjp.com/img/slides/ces2022.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/ces2022-menu.jpg" />
        </div>
        <div className="slides-item--title">CES2022 ニューロテックレポート</div>
        <div className="slides-item--subtitle">
          CES2022に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。
          <br />
          購入にご興味ある方/お話から聞いてみたい方は、下記のフォームからご連絡下さい！
          <br />
          <br />
          単価価格：30万円~
        </div>
        <div className="slides-item--button">
          <a
            href="https://survey.typeform.com/to/CAPXSgNR"
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

export default CES2022;
