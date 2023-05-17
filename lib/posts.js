import { readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

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
