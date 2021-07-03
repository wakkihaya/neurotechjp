import Link from "next/link";

import Footer from "~components/Footer";
import Header from "~components/Header";
import { Meta } from "~components/Meta";
import React from "react";

const SlidesPage: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJPはブレインテックのキラーユースケースを明らかにする目的で運営しています。ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。",
          link: "https://neurotechjp.com/jp",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="slides__bg">
        <Header isBgTransparent={true} />
        <div className="slides--title">
          Useful resources about Neurotechnology.
        </div>
      </div>
      <div className="slides-container">
        <Link href="/jp/slides/basic-theories-of-neurotechnology">
          <div className="slides-container--content">
            <div className="slides-container--content-image">
              <img
                src="/img/slides/slide-basic-theory-neurotech.jpg"
                alt="Basic throry of Neurotech スライド"
              />
            </div>
            <div className="slides-container--content-text content-text">
              <div className="content-text--title">
                Neurotech(ニューロテック)の基礎
              </div>
              <div className="content-text--subtitle">
                Neurotechnologyの基礎知識をまとめたスライド資料です。 <br />
                1. このエリアの全体像(市場規模など) <br />
                2.
                基礎知識(Neurotechnologyの種類、脳科学基礎、ソフトウェアエンジニアリング)
                <br />
                3. ニューロテクノロジーを用いたユースケース
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default SlidesPage;
