import glob from "glob";
import React from "react";
import { GetStaticPropsResult } from "next";

import { BlogPost } from "~/components/BlogPost";
import { loadJPPost, PostData } from "~/hooks/loader";

type StaticPathsProps = { paths: string[]; fallback: boolean };

type PostProps = { post: PostData };

type FileProps = {
  params: {
    blog: string;
  };
};
const Post: React.FC<PostProps> = props => {
  const { post } = props;
  return <BlogPost post={post} />;
};

export const getStaticPaths = (): StaticPathsProps => {
  const blogs = glob.sync("**/md/jp/blog/*.md");
  const slugs = blogs.map((file: string) => {
    const popped = file.split("/").pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map(slug => `/jp/blog/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (
  file: FileProps,
): Promise<GetStaticPropsResult<PostProps>> => {
  const post = await loadJPPost(`jp/blog/${file.params.blog}.md`);
  return { props: { post } };
};

export default Post;
