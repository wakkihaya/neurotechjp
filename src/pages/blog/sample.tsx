import Header from "~/components/Header";
import Footer from "~/components/Footer";
import draft from "~/blog-draft/sample";

import React from "react";
import ReactMarkdown from "react-markdown";

//TODO: templeteでまとめたい。
const sample: React.FC = () => {
  const title = draft.title;
  const png = draft.png;
  const date = draft.date;
  const markdown = draft.markdown;

  return (
    <>
      <Header />
      <div className="blog-content">
        <div className="blog-content--top">
          <div className="blog-content--top-pic">
            <img src={`/blog/${png}`} />
          </div>
          <div className="blog-content--top-date">{date} </div>
        </div>
        <div className="blog-content--draft">
          <div className="blog-content--draft-title">{title}</div>
          <div className="blog-content--draft-text">
            <ReactMarkdown children={markdown} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default sample;
