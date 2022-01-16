import React from "react";

import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Meta } from "~/components/Meta";
import PersonCard from "~/components/PersonCard";

const AboutPage: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJPはニューロテックのキラーユースケースを明らかにする目的で運営しています。ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。",
          link: "https://neurotechjp.com/jp",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="about__bg">
        <Header isBgTransparent={true} />
        <div className="about--title">
          Stay up-to-date with the latest Neurotech.
        </div>
      </div>
      <div className="about-container">
        <div className="about-container--index">
          <img src="/ogp.png" className="about-container--index-image" />
          <div className="about-container--index-subtitle">
            NeurotechJPはニューロテックのキラーユースケースを明らかにする目的で運営しています。
            <br />
            ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">NeurotechJP チーム</div>
          <div className="about-container--index-box">
            <PersonCard
              twitterLink="https://twitter.com/wakkihaya"
              linkedInLink="https://www.linkedin.com/in/wakkihaya/"
              fbLink="https://www.facebook.com/waki.hayato.1"
              name="和木勇人 Hayato Waki"
              role="ライター/インタビュアー"
              description=" 筑波大学にて、BCIに関する研究プロジェクトに従事。
              日本と米国のソフトウェアスタートアップにて、ファウンダーやエンジニアとして経験をした後、Neurotechnologyが我々の生活に多くのイノベーションをもたらすと思い、弊サイトを立ち上げる。
              彼のパッションは、「創造性と技術力を持って、Science-Fictionを実現する1人になること」である。"
              image="/img/about/Hayato_Waki.jpg"
            />
            <PersonCard
              twitterLink="https://twitter.com/kadyboy1216"
              linkedInLink="https://www.linkedin.com/in/shoka-kadoi-7b95271ba/"
              fbLink="https://www.facebook.com/shouka.kadoi"
              name="門井 翔佳 Shouka Kadoi"
              role="ライター"
              description="2018年、同志社大学社会学部メディア学科卒業。社会心理学専攻。
              Israel Brain Technologiesの主宰するカンファレンスに参加を機に、2019年6月よりマインドフルネス瞑想アプリ『Relook』にジョイン。CS、Webマーケ、プロダクトマネージャーとして働きM&Aを経験。"
              image="/img/about/Shouka_Kadoi.jpeg"
            />
            <PersonCard
              twitterLink="https://twitter.com/NaoYukawa"
              linkedInLink="https://www.linkedin.com/in/nao-yukawa-331615207/"
              fbLink="https://www.facebook.com/nao.yukawa.56"
              name="湯川 直旺 Nao Yukawa"
              role="インタビュアー/ライター"
              description=" 東京大学工学部4年生。現在は同大学の松尾研究室で深層学習関連の研究を行う傍ら、米国SanFranciscoにてInternational Businessを学んでいる。
              Elon Musk率いるNeuralinkのように、ビジネスとNeurotechnologyを組み合わせることで、神経科学の発展に寄与することが目標。"
              image="/img/about/Nao_Yukawa.jpg"
            />
            <PersonCard
              twitterLink="https://twitter.com/tomaitagaki"
              linkedInLink="https://www.linkedin.com/in/tomaitagaki/"
              fbLink="https://www.neurotechjp.com/jp/"
              name="板垣 透馬 Toma Itagaki"
              role="インタビュアー"
              description="ワシントン大学神経科学部＋電気工学部３年生。現在はユビキタスなニューロテックやヒューマンコンピュータインタフェースの研究を行っている。脳や体のデータを使って Human Experience を数値化し、バイオ＋ニューロインスパイアされたパーソナルアシスタントを開発することを目標にさまざまな分野の勉強をしている。"
              image="/img/about/Toma_Itagaki.jpg"
            />
          </div>
        </div>
        <ContactForm lang="JP" />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
