import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Markdown } from "./Markdown";
import { PostData } from "~/hooks/loader";
import { PostMeta } from "./PostMeta";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, datePublished, bannerPhoto, category } = post;
  return (
    <>
      <PostMeta post={post} />
      <Header isTop={false} />
      <div className="blog-content">
        <div className="blog-content--top">
          <div className="blog-content--top-pic">
            {post.bannerPhoto && <img src={bannerPhoto} />}
          </div>
          <div className="blog-content--top-info">
            <div className="blog-content--top-info-category">{category}</div>
            <div className="blog-content--top-info-date">{datePublished} </div>
          </div>
        </div>
        <div className="blog-content--draft">
          <div className="blog-content--draft-title">{title}</div>
          <div className="blog-content--draft-text">
            <Markdown source={post.content} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
