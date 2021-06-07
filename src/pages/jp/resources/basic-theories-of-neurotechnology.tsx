import Footer from "~components/Footer";
import Header from "~components/Header";
import { Meta } from "~components/Meta";

const BasicTheoriesOfNeurotechnology: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "Basic Theories of Neurotechnology | NeurotechJP",
          desc:
            "Neurotechnologyの基礎知識をまとめたスライド資料です。" +
            "1. このエリアの全体像(市場規模など)" +
            "2.基礎知識(Neurotechnologyの種類、脳科学基礎、ソフトウェアエンジニアリング)" +
            "3. ニューロテクノロジーを用いたユースケース",
          link: "https://neurotechjp.com/jp/resources/basic-theories-of-neurotechnology/",
          image:
            "https://neurotechjp.com/img/resources/slide-basic-theory-neurotech.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="resources-item">
        <div className="resources-item--main">
          <iframe
            allowFullScreen
            src="https://www.slideshare.net/slideshow/embed_code/key/ohvZ4HKmUH5cGa"
          />
        </div>
        <div className="resources-item--title">
          Basic Theories of Neurotechnology
        </div>
        <div className="resources-item--subtitle">
          Neurotechnologyの基礎知識をまとめたスライド資料です。 <br />
          1. このエリアの全体像(市場規模など) <br />
          2.
          基礎知識(Neurotechnologyの種類、脳科学基礎、ソフトウェアエンジニアリング)
          <br />
          3. ニューロテクノロジーを用いたユースケース
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BasicTheoriesOfNeurotechnology;
