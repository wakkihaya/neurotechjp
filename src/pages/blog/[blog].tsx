import glob from "glob";
import React from "react";

import { BlogPost } from "~/components/BlogPost";
import { loadENPost } from "~/hooks/loader";

function Post(props: any) {
  const { post } = props;
  return <BlogPost post={post} />;
}

export const getStaticPaths = () => {
  const blogs = glob.sync("**/md/en/blog/*.md");
  const slugs = blogs.map((file: string) => {
    const popped = file.split("/").pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map(slug => `/blog/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await loadENPost(`en/blog/${params.blog}.md`);
  return { props: { post } };
};

export default Post;
