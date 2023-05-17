import { readFile } from 'fs/promises';
import { marked } from 'marked';

export async function getPost(slug) {
  const jsonContent = await readFile(`content/posts/${slug}.md`, 'utf8');
  const html = marked(jsonContent);
  return {
    body: html,
  };
}
