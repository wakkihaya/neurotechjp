import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import draft from "../../src/blog-draft/sample"

import React from "react"
import ReactMarkdown from "react-markdown"
import { render } from "react-dom"

//TODO: templeteでまとめたい。
const sample: React.FC = () => {
  const title = draft.title
  const png = draft.png
  const date = draft.date
  const markdown = draft.markdown

  return (
    <>
      <Header />
      <div className="blog-content">
        <div className="blog-content--top">
          <div className="blog-content--top-pic">
            <img src={png} />
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
