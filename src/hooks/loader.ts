import matter from 'gray-matter';
import glob from 'glob';

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
};

type RawFile = { path: string; contents: string };

export const loadMarkdownFile = async (path: string): Promise<RawFile> => {
  const mdFile = await import(`~/md/${path}`);
  return { path, contents: mdFile.default };
};

export const mdToPost = (file: RawFile): PostData => {
  const metadata = matter(file.contents);
  const path = file.path.replace('.md', '');
  const post = {
    path,
    title: metadata.data.title,
    subtitle: metadata.data.subtitle || null,
    published: metadata.data.published || false,
    datePublished: metadata.data.datePublished || null,
    description: metadata.data.description || null,
    canonicalUrl: metadata.data.canonicalUrl || `https://neurotechjp.com/${path}`,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content,
  };

  if (!post.title)
    throw new Error(`Missing required field: title.`);

  if (!post.content)
    throw new Error(`Missing required field: content.`);

  if (!post.datePublished)
    throw new Error(`Missing required field: datePublished.`);

  return post as PostData;
};

export const loadMarkdownFiles = async (path: string) => {
  const blogPaths = glob.sync(`**/md/${path}`);
  const postDataList = await Promise.all(
    blogPaths.map((blogPath) => {
      const modPath = blogPath.slice(blogPath.indexOf(`md/`) + 3);
      return loadMarkdownFile(`${modPath}`);
    })
  );
  return postDataList;
};

export const loadPost = async (path: string): Promise<PostData> => {
  const file = await loadMarkdownFile(path);
  return mdToPost(file);
};

export const loadBlogPosts = async (): Promise<PostData[]> => {
  console.log(await loadMarkdownFiles(`blog/*.md`))
  return await (await loadMarkdownFiles(`blog/*.md`))
    .map(mdToPost)
    .sort((a, b) => (b.datePublished || 0) - (a.datePublished || 0));
};
