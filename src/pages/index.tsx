import Header from "~/components/Header";
import Footer from "~/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="index">
        <div className="index--title">Blog</div>
        <div className="index--subtitle">
          Neurotechnology blogs through interviews all over the world
        </div>
      </div>
      <div className="blog-container_bg">
        <div className="blog-container">
          <BlogItem></BlogItem>
        </div>
      </div>
      <Footer />
    </>
  );
};

// TODO: Fetch blog title, subtitle, pic, date, link as props
//TODO: if click item, go target page
const BlogItem: React.FC = () => {
  return (
    <div className="blog-item">
      <div className="blog-item--pic">{/* TODO: show pic */}</div>
      <div className="blog-item--container">
        <div className="blog-item--container-title">
          title
          {/* TODO: fetch title */}
        </div>
        <div className="blog-item--container-subtitle">
          subtitle
          {/* TODO: fetch subtitle */}
        </div>
        <div className="blog-item--container-readmore">READ MORE..</div>
      </div>
      <div className="blog-item--date">
        April 4, 2021
        {/* TODO: fetch date */}
      </div>
    </div>
  );
};

export default Home;
