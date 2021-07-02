import React from "react";

import { Markdown } from "./Markdown";

import { PostMeta } from "./PostMeta";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

import type { PostData } from "~/hooks/loader";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, datePublished, bannerPhoto, category } = post;
  return (
    <>
      <PostMeta post={post} />
      <Header isBgTransparent={false} />
      <div className="blog-content">
        <div className="blog-content--top">
          <div className="blog-content--top-pic">
            {post.bannerPhoto && (
              <img src={bannerPhoto} alt={`NeurotechJP banner ${title}`} />
            )}
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
