import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Meta } from "~/components/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import useResponsive from "~/hooks/use-responsive";


const AboutPage: React.FC = () => {
    const { isDesktop } = useResponsive();

  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJPは、ニューロテクノロジー分野で最前線で活躍する、世界中の方々へのインタビューを通して得た情報をまとめたブログサイトです。",
          link: "https://neurotechjp.com/jp",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <Header />
      <div className="about-container">
        <div className="about-container--index">
          <div className="about-container--index-title">
            NeurotechJPについて
          </div>
          <div className="about-container--index-subtitle">
            NeurotechJPは、ニューロテクノロジー分野で最前線で活躍する、世界中の方々へのインタビューを通して得た情報をまとめたサイトです。
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">運営者について</div>
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
            >
              {isDesktop ? (
                <FontAwesomeIcon icon={faLinkedin} size="5x" />
              ) : (
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              )}
            </a>
            <a
              href="https://www.facebook.com/waki.hayato.1"
              target="_blank"
              className="about-container--index-sns-item"
            >
              {isDesktop ? (
                <FontAwesomeIcon icon={faFacebookSquare} size="5x" />
              ) : (
                <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
              )}
            </a>
            <a
              href="https://github.com/wakkihaya"
              target="_blank"
              className="about-container--index-sns-item"
            >
              {isDesktop ? (
                <FontAwesomeIcon icon={faGithubSquare} size="5x" />
              ) : (
                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
              )}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
