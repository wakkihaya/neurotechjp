import "~/styles/globals.scss";
import "~/styles/styles.scss";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AppProps } from "next/app";

import * as gtag from "~/lib/gtag";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;
