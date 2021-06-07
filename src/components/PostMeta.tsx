import React from "react";

import { Meta } from "~/components/Meta";
import type { PostData } from "~/hooks/loader";

export const PostMeta: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Meta
      meta={{
        title: post.title,
        desc: post.description,
        link: post.canonicalUrl,
        image: "https://neurotechjp.com" + post.bannerPhoto,
      }}
    />
  );
};
