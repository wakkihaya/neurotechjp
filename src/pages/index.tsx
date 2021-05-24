import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Link from "next/link";
import { PostData, loadBlogENPosts } from "~/hooks/loader";
import { Meta } from "~/components/Meta";

const Home = (props: { posts: PostData[] }) => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJP is the website gathering information of neurotehcnology through interviews with those who are active in the front lines of this area all over the world",
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <Header />
      <div className="index">
        <div className="index--title">Blog</div>
        <div className="index--subtitle">
          Neurotechnology - interviews with those who are active in the front
          lines all over the world.
        </div>
      </div>
      <div className="blog-container_bg">
        <div className="blog-container">
          {props.posts.map((post, j) => {
            return <BlogItem post={post} key={j} />;
          })}
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
          {" "}
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
  const posts = await loadBlogENPosts();
  const props = {
    posts,
  };

  return { props };
};
