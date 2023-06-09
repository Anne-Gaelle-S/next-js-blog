import { readFile, readdir } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

// config to remove warnings
marked.use({ headerIds: false, mangle: false });

export async function getPost(slug) {
  const jsonContent = await readFile(`content/posts/${slug}.md`, 'utf8');
  const { data, content: markdownContent } = matter(jsonContent)
  const bodyInHtml = marked(markdownContent);
  return {
    date: data.date,
    title: data.title,
    body: bodyInHtml,
  };
}

export async function getPostNamesAndTitles() {
  const slugs = await getSlugs();
  const postNamesAndTitles = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    postNamesAndTitles.push({ slug, title: post.title });
  }
  return postNamesAndTitles;
}

export async function getSlugs() {
  const suffix = '.md';
  const contentPostsFiles = await readdir('content/posts')
  return contentPostsFiles
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}
