import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Meta } from "~/components/Meta";

const AboutPage: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc:
            "NeurotechJPは、Neurotechnology分野で最前線で活躍する、世界中の方々へのインタビューを通して得た情報をまとめたサイトです。",
          link: "https://neurotechjp.com/jp",
          image: "/ogp.png",
        }}
      />
      <Header />
      <div className="about-container">
        <div className="about-container--index">
          <div className="about-container--index-title">
            NeurotechJPについて
          </div>
          <div className="about-container--index-subtitle">
            NeurotechJPは、Neurotechnology分野で最前線で活躍する、世界中の方々へのインタビューを通して得た情報をまとめたサイトです。
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">運営者について</div>
          <div className="about-container--index-subtitle">
            Hayato Waki
            {/* TODO: */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
