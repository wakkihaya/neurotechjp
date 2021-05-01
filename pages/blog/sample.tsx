import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

//TODO: templeteでまとめたい。
const sample: React.FC = () => {
  return (
    <>
      <Header />
      <div className="blog-content">
        <div className="blog-content--top">
          <div className="blog-content--top-pic">{/* TODO: show pic */}</div>
          <div className="blog-content--top-date">Date: TODO: </div>
        </div>
        <div className="blog-content--draft">
          <div className="blog-content--draft-title">
            title{/* TODO: show title */}
          </div>
          <div className="blog-content--draft-text">text //TODO:</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default sample;
