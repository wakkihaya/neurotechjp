import glob from "glob";
import matter from "gray-matter";

export type PostData = {
  path: string;
  title: string;
  subtitle?: string;
  content: string;
  description?: string;
  canonicalUrl?: string;
  published: boolean;
  datePublished: number;
  bannerPhoto?: string;
  thumbnailPhoto?: string;
  category?: string;
};

type RawFile = { path: string; contents: string };

export const mdToPost = (file: RawFile): PostData => {
  const metadata = matter(file.contents);
  const path = file.path.replace(".md", "");
  const post = {
    path,
    title: metadata.data.title,
    subtitle: metadata.data.subtitle || "Neurotechjp post",
    published: metadata.data.published || false,
    datePublished: metadata.data.datePublished || null,
    description: metadata.data.description || "Neurotechjp post",
    canonicalUrl:
      metadata.data.canonicalUrl || `https://neurotechjp.com/${path}`,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content,
    category: metadata.data.category || null,
  };

  if (!post.title) throw new Error(`Missing required field: title.`);

  if (!post.content) throw new Error(`Missing required field: content.`);

  if (!post.datePublished)
    throw new Error(`Missing required field: datePublished.`);

  return post as PostData;
};

///For En blog
export const loadMarkdownENFile = async (
  pathProps: string,
): Promise<RawFile> => {
  const mdFile = await import(`~/md/${pathProps}`);
  /// .com/en/blog/sample -> .com/blog/sample
  const path = pathProps.replace("en/", "");
  return { path, contents: mdFile.default };
};

export const loadMarkdownENFiles = async (path: string) => {
  const blogPaths = glob.sync(`**/md/en/${path}`);
  const postDataList = await Promise.all(
    blogPaths.map(blogPath => {
      const modPath = blogPath.slice(blogPath.indexOf(`md/en/`) + 3);
      return loadMarkdownENFile(`${modPath}`);
    }),
  );
  return postDataList;
};

export const loadENPost = async (path: string): Promise<PostData> => {
  const file = await loadMarkdownENFile(path);
  return mdToPost(file);
};

export const loadBlogENPosts = async (): Promise<PostData[]> => {
  return await (await loadMarkdownENFiles(`blog/*.md`))
    .map(mdToPost)
    .sort((a, b) => (b.datePublished || 0) - (a.datePublished || 0));
};

///For Jp blog
export const loadMarkdownJPFile = async (path: string): Promise<RawFile> => {
  const mdFile = await import(`~/md/${path}`);
  return { path, contents: mdFile.default };
};

export const loadMarkdownJPFiles = async (path: string) => {
  const blogPaths = glob.sync(`**/md/jp/${path}`);
  const postDataList = await Promise.all(
    blogPaths.map(blogPath => {
      const modPath = blogPath.slice(blogPath.indexOf(`md/jp/`) + 3);
      return loadMarkdownJPFile(`${modPath}`);
    }),
  );
  return postDataList;
};

export const loadJPPost = async (path: string): Promise<PostData> => {
  const file = await loadMarkdownJPFile(path);
  return mdToPost(file);
};

export const loadBlogJPPosts = async (): Promise<PostData[]> => {
  return await (await loadMarkdownJPFiles(`blog/*.md`))
    .map(mdToPost)
    .sort((a, b) => (b.datePublished || 0) - (a.datePublished || 0));
};
