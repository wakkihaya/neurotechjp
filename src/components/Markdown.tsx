import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter";


export const Markdown: React.FC<{ source: string }> = (props) => {
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


const SyntaxHighlighter =
  typeof window === "undefined" ? PrismLight : PrismAsyncLight;

class Code extends React.PureComponent<{
  language: string;
  value?: string;
}> {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter
        language={(language === "ts" ? "typescript" : language) || "typescript"}
        style={darcula}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}
