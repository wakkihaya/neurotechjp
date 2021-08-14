import { randomBytes } from "crypto";

import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { GA_TRACKING_ID } from "~/lib/gtag";

type WithNonceProp = {
  nonce: string;
};

export default class MyDocument extends Document<WithNonceProp> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & WithNonceProp> {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = randomBytes(128).toString("base64");

    return {
      ...initialProps,
      nonce,
    };
  }

  render(): JSX.Element {
    const nonce = this.props.nonce;
    return (
      <Html lang="en">
        <Head nonce={nonce}>
          <script
            async={true}
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Armata&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://neurotechjp.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
