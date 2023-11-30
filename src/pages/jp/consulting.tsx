import { Footer, Header, Meta, Alert } from "~components";
import React from "react";

const ConsultingPage: React.FC = () => {
  const AlertContent: React.FC = () => (
    <div className="consulting--alert">
      2023年11月1日に、合同会社NeurotechJPは事業の一部を株式会社Actraに譲渡いたしました。
      これに伴い、当メディアは株式会社Actraが行うニューロマーケティングを使ったコンサルティングサービスを支援することとなりました。
      詳しくは
      <a
        href={"https://prtimes.jp/main/html/rd/p/000000004.000111004.html"}
        target="_blank"
        rel="noreferrer"
        className="consulting--alert--cta"
      >
        こちらのプレスリリース
      </a>
      を参照ください。
    </div>
  );

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
        <div className="consulting--title">コンサルティング サービス</div>
      </div>
      <div className="consulting--container">
        <Alert content={<AlertContent />} />
        <div className="consulting--content">
          <div className="consulting--content--explanation">
            <div className="consulting--content--explanation--title">
              脳情報計測のマーケティング応用
            </div>
            <div className="consulting--content--explanation--description">
              脳活動を測定し、CMや製品などへの感性を評価し、その結果をもとに改善・改良に繋げるものです。アンケート等では取得ができない無意識、潜在的な情報を、生体情報を測定することによって見える化することが可能です。詳細はお問い合わせください。
            </div>
            <a
              href="https://actra.co.jp/services"
              target="_blank"
              rel="noreferrer"
              className="consulting--content--explanation--cta"
            >
              詳細をみる
            </a>
          </div>
          <div className="consulting--content--image__wrapper">
            <img
              src="/img/consulting/actra-service.jpeg"
              className="consulting--content--image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConsultingPage;
