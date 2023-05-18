import { Footer, Header, Meta, SlideContent } from "~components";
import React from "react";

const SlidesPage: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP |  ニューロテックJP",
          desc: "NeurotechJP (ニューロテックJP）はニューロテックのキラーユースケースを明らかにする目的で運営しています。ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。",
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
        <SlideContent
          linkRef="/jp/slides/basic-theories-of-neurotechnology"
          imgSrc="/img/slides/slide-basic-theory-neurotech-jp.jpg"
          title="Neurotech(ニューロテック)の基礎"
        >
          【無料】Neurotechnologyの基礎知識をまとめたスライド資料です。 <br />
          1. このエリアの全体像(市場規模など) <br />
          2.
          基礎知識(Neurotechnologyの種類、脳科学基礎、ソフトウェアエンジニアリング)
          <br />
          3. ニューロテクノロジーを用いたユースケース
        </SlideContent>
        <SlideContent
          linkRef="http://eepurl.com/hJSQEf"
          imgSrc="/img/slides/neurotech-startups-analytics.jpg"
          title="Neurotech アナリティクスレポート(2020)  ~vol 1~"
        >
          【無料】Neurotech市場で活躍する、世界各国およそ200社の企業情報をまとめたPDFです。※Neurotech
          Analytics社が提供する資料を著者の許可の元、一部抜粋し日本語翻訳したものです。
        </SlideContent>
        <SlideContent
          linkRef="http://eepurl.com/hJSQEf"
          imgSrc="/img/slides/neurotech-invest-digest.jpg"
          title="Neurotech アナリティクスレポート  ~vol 2~"
        >
          【無料】世界のNeurotech市場の投資状況をまとめたPDFです。※Neurotech
          Analytics社が提供する資料を著者の許可の元、日本語翻訳したものです。
        </SlideContent>
        <SlideContent
          linkRef="/jp/slides/ces-2022"
          imgSrc="/img/slides/ces2022.jpg"
          title="CES2022 ニューロテックレポート"
        >
          【有料】CES2022に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。
        </SlideContent>
        <SlideContent
          linkRef="/jp/slides/bci-landscape-2022"
          imgSrc="/img/slides/bci-landscape-2022-jp.jpg"
          title="BCI カオスマップ 2022"
        >
          【無料】2022年最新版のBCI市場カオスマップを公開しました！
          各分野における今後注目の企業のみを紹介しているので、是非今後の事業立案、研究方針等にご活用下さい！
        </SlideContent>
        <SlideContent
          linkRef="/jp/slides/neurotech-overview-2022"
          imgSrc="/img/slides/neurotech-overview-2022.jpg"
          title="世界のニューロテックの概況とビジネス応用への道(2022)"
        >
          【無料】最前線で活躍する世界のニューロテック企業の概況やビジネス応用への道、並びに彼らが抱えてきた課題とその解決策についてまとめたスライドです。
        </SlideContent>
        <SlideContent
          linkRef="/jp/slides/neuro-2022"
          imgSrc="/img/slides/neuro-2022.jpg"
          title="Neuro2022 ニューロテックレポート"
        >
          【有料】NEURO2022に出向き、現地で発表された注目の最新研究をまとめたレポート資料です。
        </SlideContent>
        <SlideContent
          linkRef="/jp/slides/ces-2023"
          imgSrc="/img/slides/ces2023.png"
          title="CES2023 ニューロテックレポート"
        >
          【有料】CES2023に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。
        </SlideContent>
        <SlideContent
          linkRef="/jp/slides/neurotech-2023"
          imgSrc="/img/slides/neurotech2023.png"
          title="NEUROTECH 2023 レポート"
        >
          【有料】CES2023 や NEURO2022
          ニューロテックレポートをお手頃価格でまとめたパッケージレポートです。
          産業面と学術面の両方から、今年度最新のニューロテック情報をまとめております。
        </SlideContent>
        <SlideContent
          linkRef="/jp/slides/viva-2023"
          imgSrc="/img/slides/viva2023.jpg"
          title="VivaTech2023 ニューロテックレポート"
        >
          【有料】VivaTech2023に出向き、世界中から集まるニューロテック企業に現地インタビューを行いました。その最先端をまとめたレポート資料です。
        </SlideContent>
      </div>
      <Footer />
    </>
  );
};

export default SlidesPage;
