import React, { useState } from "react";
import { GetStaticPropsResult } from "next";

import { Footer } from "~components/Footer";
import { Header } from "~components/Header";

import { Meta } from "~/components/Meta";
import type { PostData } from "~/hooks/loader";
import { loadBlogENPosts } from "~/hooks/loader";

type BlogPageProps = {
  posts: PostData[];
};

type Category = "Interview" | "Article" | "All";

const BlogPage: React.FC<BlogPageProps> = props => {
  const [currentCategory, setCurrentCategory] = useState<Category>("All");

  const changeCategory = (newCategory: Category) => {
    setCurrentCategory(newCategory);
  };

  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: 'NeurotechJP is running to reveal “The killer use cases of Neurotech".We will publish trends, columns, and interviews with pioneers who are working at the cutting edge of the neurotech field.',
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="blog__bg">
        <Header isBgTransparent={true} />
        <div className="blog">
          <div className="blog--title">Blog</div>
          <div className="blog--subtitle">
            Interviews with top researchers and founders at the frontier of
            Neurotech.
          </div>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-container--filter">
          <div
            className={[
              "blog-container--filter-item",
              currentCategory === "All" ? "active" : null,
            ].join(" ")}
            onClick={() => changeCategory("All")}
          >
            All
          </div>
          <div
            className={[
              "blog-container--filter-item",
              currentCategory === "Interview" ? "active" : null,
            ].join(" ")}
            onClick={() => changeCategory("Interview")}
          >
            Interviews
          </div>
          <div
            className={[
              "blog-container--filter-item",
              currentCategory === "Article" ? "active" : null,
            ].join(" ")}
            onClick={() => changeCategory("Article")}
          >
            Articles
          </div>
        </div>
        <div className="blog-container--posts">
          {props.posts.map((post, j) => {
            if (currentCategory !== "All") {
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
            alt={`NeurotechJP bannar ${post.title}`}
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
  const posts = await loadBlogENPosts();
  const props = {
    posts,
  };

  return { props };
};
