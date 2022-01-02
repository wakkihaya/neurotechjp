import Link from "next/link";
import React from "react";
import { GetStaticPropsResult } from "next";
import Typical from "react-typical";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

import { Meta } from "~/components/Meta";
import type { PostData } from "~/hooks/loader";
import { loadBlogENPosts } from "~/hooks/loader";

type HomeProps = {
  posts: PostData[];
};

const Home: React.FC<HomeProps> = props => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJP is running to reveal “The killer use cases of Neurotech”.We will publish trends, columns, and interviews with pioneers who are working at the cutting edge of the neurotech field.",
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="top">
        <div className="top--gif">
          <img src="/img/top-page.jpg" alt="NeurotechJP top" />
        </div>
        <div className="top--header">
          <Header isBgTransparent={true} />
        </div>
        <div className="top--center-text">
          <Typical
            steps={[
              "Stay",
              1000,
              "Stay \n up-to-date",
              500,
              "Stay \n up-to-date with",
              200,
              "Stay \n up-to-date with \n the latest Neurotech",
              500,
            ]}
            wrapper="span"
          />
        </div>
      </div>
      <div className="top-blog">
        <div className="blog-container--posts">
          <BlogItem key={0} post={props.posts[0]} />
          <BlogItem key={1} post={props.posts[1]} />
        </div>
        <div className="top-blog--readmore">
          <Link href="/blog">More posts</Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

const BlogItem: React.FC<{ post: PostData }> = props => {
  const post = props.post;
  return (
    <a href={`/${post.path}`} target="_blank" rel="noreferrer">
      <div className="blog-item">
        <div className="blog-item--pic">
          <img src={post.bannerPhoto} alt="NeurotechJP blog bannerphoto" />
        </div>
        <div className="blog-item--container">
          <div className="blog-item--container-title">{post.title}</div>
          <div className="blog-item--container-category">{post.category}</div>
          <div className="blog-item--container-subtitle">
            {post.description}
          </div>
          <div className="blog-item--container-readmore">READ MORE..</div>
        </div>
        <div className="blog-item--date">{post.datePublished}</div>
      </div>
    </a>
  );
};

export default Home;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const posts = await loadBlogENPosts();
  const props = {
    posts,
  };

  return { props };
};
