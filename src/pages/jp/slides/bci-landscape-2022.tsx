import { Footer } from "~components/Footer";
import { Header } from "~components/Header";
import { Meta } from "~components/Meta";
import React from "react";

const BCILandscape2022: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "BCI市場カオスマップ 2022 | NeurotechJP",
          desc: "2022年最新版のBCI市場カオスマップを公開しました！",
          link: "https://neurotechjp.com/jp/slides/bci-landscape-2022/",
          image: "https://neurotechjp.com/img/slides/bci-landscape-2022-jp.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/bci-landscape-2022-jp.jpg" />
        </div>
        <div className="slides-item--title">BCI カオスマップ 2022</div>
        <div className="slides-item--subtitle">
          2022年最新版のBCI市場カオスマップを公開しました！🧠
          <br />
          BCIというと「デバイスコントロール」が有名ですが、実はそれ以外にも多くの分野で事例があります。
          各分野における今後注目の企業のみを紹介しているので、是非今後の事業立案、研究方針等にご活用下さい！
        </div>
        <div className="slides-item--button">
          <a href="/img/slides/bci-landscape-2022-jp.jpg" download>
            ダウンロード
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BCILandscape2022;
