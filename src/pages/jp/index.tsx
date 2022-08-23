import Link from "next/link";
import { GetStaticPropsResult } from "next";
import Typical from "react-typical";
import React from "react";

import { Footer } from "~components/Footer";
import { Header } from "~components/Header";

import { Meta } from "~/components/Meta";
import type { PostData } from "~/hooks/loader";
import { loadBlogJPPosts } from "~/hooks/loader";

type HomeProps = {
  posts: PostData[];
};

const Home: React.FC<HomeProps> = props => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP |  ニューロテックJP",
          desc: "NeurotechJP (ニューロテックJP）はニューロテックのキラーユースケースを明らかにする目的で運営しています。ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。",
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="top">
        <div className="top--gif">
          <img src="/img/top-page.jpg" alt="NeurotechJP トップ画像" />
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
          <Link href="/jp/blog">More posts</Link>
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
          <img src={post.bannerPhoto} alt="NeurotechJP ブログ　バナー画像" />
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
  const posts = await loadBlogJPPosts();
  const props = {
    posts,
  };

  return { props };
};
