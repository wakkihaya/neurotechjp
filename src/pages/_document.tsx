import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { randomBytes } from "crypto";

import { GA_TRACKING_ID } from "~/lib/gtag";

type WithNonceProp = {
  nonce: string;
};

export default class MyDocument extends Document<WithNonceProp> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = randomBytes(128).toString("base64");

    return {
      ...initialProps,
      nonce,
    };
  }

  render() {
    const nonce = this.props.nonce;
    return (
      <Html>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
