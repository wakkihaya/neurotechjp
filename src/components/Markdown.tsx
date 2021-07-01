import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export const Markdown: React.FC<{ source: string }> = props => {
  return (
    <div style={{ width: "100%" }} className="devii-markdown">
      <ReactMarkdown
        key="content"
        remarkPlugins={[gfm]}
        linkTarget="_blank"
        children={props.source}
      />
    </div>
  );
};
