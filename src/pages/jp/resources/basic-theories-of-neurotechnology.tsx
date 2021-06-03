import Header from "~components/Header";
import Footer from "~components/Footer";

const BasicTheoriesOfNeurotechnology: React.FC = () => {
  return (
    <>
      <Header isTop={false} />
      <div className="resources-item">
        <div className="resources-item--main">
          <iframe
            src="https://www.slideshare.net/slideshow/embed_code/key/ohvZ4HKmUH5cGa"
            allowFullScreen
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