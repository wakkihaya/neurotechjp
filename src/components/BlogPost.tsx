import React from "react";

import { Markdown } from "./Markdown";

import { PostMeta } from "./PostMeta";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { SocialMediaShare } from "./SocialMediaShare";

import type { PostData } from "~/hooks/loader";
import { EditorFrame } from "./EditorFrame";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const {
    title,
    datePublished,
    bannerPhoto,
    category,
    canonicalUrl,
    writer1,
    writer2,
    interviewer1,
    interviewer2,
    translator1,
    translator2,
  } = post;

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
            <div className="blog-content--top-info_container">
              <div className="blog-content--top-info-category">{category}</div>
              <div className="blog-content--top-info-date">{datePublished}</div>
            </div>
            <div className="blog-content--top-info-share">
              <SocialMediaShare url={canonicalUrl} />
            </div>
          </div>
        </div>
        <div className="blog-content--draft">
          <div className="blog-content--draft-title">{title}</div>
          <div className="blog-content--draft-text">
            <Markdown source={post.content} />
          </div>
        </div>
        <EditorFrame
          writers={[writer1, writer2].filter(
            item => item !== null && item !== "",
          )}
          interviewers={[interviewer1, interviewer2].filter(
            item => item !== null && item !== "",
          )}
          translators={[translator1, translator2].filter(
            item => item !== null && item !== "",
          )}
        />
      </div>
      <Footer />
    </>
  );
};
