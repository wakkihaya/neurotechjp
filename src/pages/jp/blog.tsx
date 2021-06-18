import Link from "next/link";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

import { Meta } from "~/components/Meta";
import type { PostData } from "~/hooks/loader";
import { loadBlogJPPosts } from "~/hooks/loader";

const BlogPage = (props: { posts: PostData[] }) => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJPはブレインテックのキラーユースケースを明らかにする目的で運営しています。ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。",
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="blog__bg">
        <Header isBgTransparent={true} />
        <div className="blog">
          <div className="blog--title">Blog</div>
          <div className="blog--subtitle">
            Neurotech分野の世界最前線で活躍する方々へのインタビューブログ
          </div>
        </div>
      </div>
      <div className="blog-container">
        {props.posts.map((post, j) => {
          return <BlogItem key={j} post={post} />;
        })}
      </div>
      <Footer />
    </>
  );
};

const BlogItem: React.FC<{ post: PostData }> = props => {
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

export default BlogPage;

export const getStaticProps = async () => {
  const posts = await loadBlogJPPosts();
  const props = {
    posts,
  };

  return { props };
};
