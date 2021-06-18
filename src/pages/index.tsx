import Link from "next/link";

import Typical from "react-typical";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

import { Meta } from "~/components/Meta";
import type { PostData } from "~/hooks/loader";
import { loadBlogENPosts } from "~/hooks/loader";

const Home = (props: { posts: PostData[] }) => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: 'Neurotech JP is running to reveal “The killer use cases of Neurotech”.We will publish trends, columns, and interviews with pioneers who are working at the cutting edge of the neurotech field.',
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
          <BlogItem key={0} post={props.posts[0]} />
          <BlogItem key={1} post={props.posts[1]} />
        </div>
        <div className="top-blog--readmore">
          <Link href="/blog">Read more</Link>
        </div>
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

export default Home;

export const getStaticProps = async () => {
  const posts = await loadBlogENPosts();
  const props = {
    posts,
  };

  return { props };
};
