import NextHead from "next/head";
import React from "react";

export const Meta: React.FC<{
  meta: {
    title: string;
    link?: string;
    desc?: string;
    image?: string;
  };
}> = props => {
  const FB_APP_ID = process.env.FB_APP_ID || "";
  const { meta } = props;
  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta name="copyright" content="Colin McDonnell" />
      {meta.link && <link rel="canonical" href={meta.link} />}
      {meta.desc && <meta name="description" content={meta.desc} />}
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={meta.title} />
      {meta.desc && (
        <meta
          name="og:description"
          property="og:description"
          content={meta.desc}
        />
      )}
      <meta
        name="keywords"
        content="neurotech,neurotechjp,braintech,neurotechnology,ブレインテック,ニューロテック"
      />
      <meta property="og:site_name" content="neurotechjp" />
      <meta property="fb:app_id" content={FB_APP_ID} />
      {meta.link && <meta property="og:url" content={`${meta.link}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      {meta.desc && <meta name="twitter:description" content={meta.desc} />}
      {meta.image && <meta name="twitter:image" content={meta.image} />}
      {meta.image && (
        <meta name="image" property="og:image" content={`${meta.image}`} />
      )}
    </NextHead>
  );
};
