import { Meta } from "~components/Meta";
import Header from "~components/Header";
import Footer from "~components/Footer";
import Link from "next/link";

const ResourcesPage: React.FC = () => {
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
      <div className="resources__bg">
        <Header isTop={false} />
        <div className="resources--title">
          Useful resources about Neurotechnology.
        </div>
      </div>
      <div className="resources-container">
        <Link href="/resources/basic-theories-of-neurotechnology">
          <div className="resources-container--content">
            <div className="resources-container--content-image">
              <img src="/img/resources/slide-basic-theory-neurotech.jpg" />
            </div>
            <div className="resources-container--content-text content-text">
              <div className="content-text--title">
                Basic Theories of Neurotechnology.
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

export default ResourcesPage;
