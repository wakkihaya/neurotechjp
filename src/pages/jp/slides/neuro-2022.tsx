import Footer from "~components/Footer";
import Header from "~components/Header";
import { Meta } from "~components/Meta";
import React from "react";

const Neuro2022: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "NEURO2022 レポート | NeurotechJP",
          desc: "Neuro2022に出向き、現地で発表された注目の最新研究をまとめたレポート資料です。",
          link: "https://neurotechjp.com/jp/slides/neuro-2022/",
          image: "https://neurotechjp.com/img/slides/neuro-2022.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/neuro2022-menu.jpg" />
        </div>
        <div className="slides-item--title">
          NEURO2022 ニューロテックレポート
        </div>
        <div className="slides-item--subtitle">
          NEURO2022に出向き、現地で発表された注目の最新研究をまとめたレポート資料です。
          <br />
          監修：紺野大地、佐藤元重、小山雄太郎、その他
          <br />
          購入にご興味ある方/お話から聞いてみたい方は、下記のフォームからご連絡下さい！
          <br />
          <br />
          単価価格：10万円~ (要相談)
        </div>
        <div className="slides-item--button">
          <a
            href="https://survey.typeform.com/to/ZbFoeipy"
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

export default Neuro2022;
