import React from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import gfm from "remark-gfm";

export const Markdown: React.FC<{ source: string }> = props => {
  return (
    <div style={{ width: "100%" }} className="devii-markdown">
      <ReactMarkdown
        key="content"
        children={props.source}
        remarkPlugins={[gfm]}
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
