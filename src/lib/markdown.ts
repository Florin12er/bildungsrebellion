import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/app/vision/_posts');

export interface VisionPost {
    excerpt: string;
    id: string;
    title: string;
    date: string;
    contentHtml: string;
    slug?: string;
}

export async function getSortedPostsData(): Promise<VisionPost[]> {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            const id = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            const processedContent = await remark()
                .use(html)
                .process(matterResult.content);
            const contentHtml = processedContent.toString();

                return {
                    id,
                    contentHtml,
                    excerpt: matterResult.data.excerpt || '',
                    ...matterResult.data as { title: string; date: string }
                };
        })
    );

    return allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => ({
        params: {
            slug: fileName.replace(/\.md$/, '')
        }
    }));
}
export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        slug,
        content: matterResult.content,
        ...matterResult.data as { title: string; date: string; excerpt?: string }
    };
}