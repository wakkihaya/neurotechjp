import { Footer, Header, Meta } from "~components";
import React from "react";

const CES2025: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "CES2025 Neurotech Report | NeurotechJP",
          desc: "CES2025に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。",
          link: "https://neurotechjp.com/jp/slides/ces-2025/",
          image: "https://neurotechjp.com/img/slides/ces2025.png",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/ces2025-menu.png" />
        </div>
        <div className="slides-item--title">CES2025 ニューロテックレポート</div>
        <div className="slides-item--subtitle">
          CES2025に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。
          <br />
          購入にご興味ある方/お話から聞いてみたい方は、下記のフォームからご連絡下さい。
          <br />
          <br />
          [単価価格]
          <br /> - CES2023 基本レポート: 60万円
          <br /> - (追加) CES2023 カスタムレポート: 20万円〜
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

export default CES2025;
