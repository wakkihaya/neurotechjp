import React, { useState } from "react";
import { GetStaticPropsResult } from "next";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

import { Meta } from "~/components/Meta";
import type { PostData } from "~/hooks/loader";
import { loadBlogJPPosts } from "~/hooks/loader";

type BlogPageProps = {
  posts: PostData[];
};

type Category = "インタビュー" | "コラム" | "すべて";

const BlogPage: React.FC<BlogPageProps> = props => {
  const [currentCategory, setCurrentCategory] = useState<Category>("すべて");

  const changeCategory = (newCategory: Category) => {
    setCurrentCategory(newCategory);
  };

  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJPはニューロテックのキラーユースケースを明らかにする目的で運営しています。ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。",
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
        <div className="blog-container--filter">
          <div
            className={[
              "blog-container--filter-item",
              currentCategory === "すべて" ? "active" : null,
            ].join(" ")}
            onClick={() => changeCategory("すべて")}
          >
            すべて
          </div>
          <div
            className={[
              "blog-container--filter-item",
              currentCategory === "インタビュー" ? "active" : null,
            ].join(" ")}
            onClick={() => changeCategory("インタビュー")}
          >
            インタビュー
          </div>
          <div
            className={[
              "blog-container--filter-item",
              currentCategory === "コラム" ? "active" : null,
            ].join(" ")}
            onClick={() => changeCategory("コラム")}
          >
            コラム
          </div>
        </div>
        <div className="blog-container--posts">
          {props.posts.map((post, j) => {
            if (currentCategory !== "すべて") {
              if (post.category !== currentCategory) return;
            }
            return <BlogItem key={j} post={post} />;
          })}
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
          <img
            src={post.bannerPhoto}
            alt={`NeurotechJP バナー ${post.title}`}
          />
        </div>
        <div className="blog-item--container">
          <div className="blog-item--container-title">{post.title}</div>
          <div className="blog-item--container-category">{post.category}</div>
          <div className="blog-item--container-subtitle">
            <p>{post.description}</p>
          </div>
          <div className="blog-item--container-readmore">READ MORE..</div>
        </div>
        <div className="blog-item--date">{post.datePublished}</div>
      </div>
    </a>
  );
};

export default BlogPage;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<BlogPageProps>
> => {
  const posts = await loadBlogJPPosts();
  const props = {
    posts,
  };

  return { props };
};
