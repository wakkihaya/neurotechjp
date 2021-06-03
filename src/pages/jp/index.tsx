import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Link from "next/link";
import { PostData, loadBlogJPPosts } from "~/hooks/loader";
import { Meta } from "~/components/Meta";
import Typical from "react-typical";

const Home = (props: { posts: PostData[] }) => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJPは、ニューロテクノロジー分野で最前線で活躍する、世界中の方々へのインタビューを通して得た情報をまとめたブログサイトです。",
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="top">
        <div className="top--gif">
          <img src="/img/top-page.jpg" />
        </div>
        <div className="top--header">
          <Header isBgTransparent={true} />
        </div>
        <div className="top--center-text">
          <Typical
            steps={[
              "Get",
              1000,
              "Get \n a front line",
              500,
              "Get \n a front line \n in ",
              200,
              "Get \n a front line \n in Neurotech.",
              500,
            ]}
          />
        </div>
      </div>
      <div className="top-blog">
        <div className="blog-container">
          <BlogItem post={props.posts[0]} key={0} />
          <BlogItem post={props.posts[1]} key={1} />
        </div>
        <div className="top-blog--readmore">
          <Link href="/blog">Read more</Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

const BlogItem: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <Link href={`/${post.path}`}>
      <div className="blog-item">
        <div className="blog-item--pic">
          <img src={post.bannerPhoto} />
        </div>
        <div className="blog-item--container">
          <div className="blog-item--container-title">{post.title}</div>
          <div className="blog-item--container-category">{post.category}</div>
          <div className="blog-item--container-subtitle">{post.subtitle}</div>
          <div className="blog-item--container-readmore">READ MORE..</div>
        </div>
        <div className="blog-item--date">{post.datePublished}</div>
      </div>
    </Link>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = await loadBlogJPPosts();
  const props = {
    posts,
  };

  return { props };
};
