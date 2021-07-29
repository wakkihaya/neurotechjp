import React from "react";
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Meta } from "~/components/Meta";

import useResponsive from "~/hooks/use-responsive";

type Device = "Mobile" | "Desktop";

const AboutPage: React.FC = () => {
  const device: Device = useResponsive();

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
        <div className="about--title">Get a front line in Neurotech.</div>
      </div>
      <div className="about-container">
        <div className="about-container--index">
          <div className="about-container--index-title">
            NeurotechJPについて
          </div>
          <div className="about-container--index-subtitle">
            NeurotechJPはニューロテックのキラーユースケースを明らかにする目的で運営しています。
            <br />
            ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">運営者について</div>
          <div className="about-container--index_box">
            <div className="about-container--index-subtitle-name">
              和木勇人 Hayato Waki (ライター/インタビュアー) <br />
            </div>
            <div className="about-container--index-subtitle-text">
              筑波大学にて、BCIに関する研究プロジェクトに従事。
              日本と米国のソフトウェアスタートアップにて、ファウンダーやエンジニアとして経験をした後、Neurotechnologyが我々の生活に多くのイノベーションをもたらすと思い、弊サイトを立ち上げる。
              <br />
              彼のパッションは、「創造性と技術力を持って、Science-Fictionを実現する1人になること」である。
            </div>
            <div className="about-container--index-sns">
              <a
                href="https://www.linkedin.com/in/wakkihaya/"
                target="_blank"
                className="about-container--index-sns-item"
                rel="noreferrer"
              >
                {device === "Desktop" ? (
                  <FontAwesomeIcon icon={faLinkedin} size="5x" />
                ) : (
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                )}
              </a>
              <a
                href="https://www.facebook.com/waki.hayato.1"
                target="_blank"
                className="about-container--index-sns-item"
                rel="noreferrer"
              >
                {device === "Desktop" ? (
                  <FontAwesomeIcon icon={faFacebookSquare} size="5x" />
                ) : (
                  <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                )}
              </a>
              <a
                href="https://twitter.com/wakkihaya"
                target="_blank"
                className="about-container--index-sns-item"
                rel="noreferrer"
              >
                {device === "Desktop" ? (
                  <FontAwesomeIcon icon={faTwitterSquare} size="5x" />
                ) : (
                  <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                )}
              </a>
            </div>
          </div>
          <div className="about-container--index_box">
            <div className="about-container--index-subtitle">
              門井 翔佳 Shouka Kadoi (ライター/インタビュアー) <br />
            </div>
            <div className="about-container--index-subtitle-text">
              2018年、同志社大学社会学部メディア学科卒業。社会心理学専攻。{" "}
              <br />
              Israel Brain
              Technologiesの主宰するカンファレンスに参加を機に、2019年6月よりマインドフルネス瞑想アプリ『Relook』にジョイン。CS、Webマーケ、プロダクトマネージャーとして働きM&Aを経験。
            </div>
            <div className="about-container--index-sns">
              <a
                href="https://www.facebook.com/shouka.kadoi"
                target="_blank"
                className="about-container--index-sns-item"
                rel="noreferrer"
              >
                {device === "Desktop" ? (
                  <FontAwesomeIcon icon={faFacebookSquare} size="5x" />
                ) : (
                  <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                )}
              </a>
              <a
                href="https://twitter.com/kadyboy1216"
                target="_blank"
                className="about-container--index-sns-item"
                rel="noreferrer"
              >
                {device === "Desktop" ? (
                  <FontAwesomeIcon icon={faTwitterSquare} size="5x" />
                ) : (
                  <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                )}
              </a>
            </div>
          </div>
        </div>
        <ContactForm lang="JP" />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
