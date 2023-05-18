import { Footer, Header, Meta } from "~components";
import React from "react";

const Viva2023: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "VivaTech 2023 ニューロテックレポート | NeurotechJP",
          desc: "VivaTech2023に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。",
          link: "https://neurotechjp.com/jp/slides/viva-2023/",
          image: "https://neurotechjp.com/img/slides/viva2023.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/viva2023-menu.jpg" />
        </div>
        <div className="slides-item--title">
          VivaTech2023 ニューロテックレポート
        </div>
        <div className="slides-item--subtitle">
          VivaTech2023に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。
          <br />
          購入にご興味ある方/お話から聞いてみたい方は、下記のフォームからご連絡下さい！
          <br />
          <br />
          単価価格：30万円~
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

export default Viva2023;
