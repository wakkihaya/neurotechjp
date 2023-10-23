import { Footer, Header, Meta, Alert } from "~components";
import React from "react";

const ConsultingPage: React.FC = () => {
  const AlertContent: React.FC = () => (
    <div className="consulting--alert">
      2023年11月12日に、合同会社NeurotechJPは事業の一部を株式会社Actraに譲渡いたしました。{" "}
      <br />
      これに伴い、当メディアは株式会社Actraが行うニューロマーケティングを使ったコンサルティングサービスを支援することとなりました。{" "}
      <br />
      詳しくは
      <a
        href={"https://neurotecjp.com" /**TODO: PR times link */}
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
      </div>
      <Footer />
    </>
  );
};

export default ConsultingPage;
