// app/vision/[slug]/page.tsx
import { FaArrowLeft, FaCalendarAlt, FaShareAlt } from 'react-icons/fa';
import { getPostData, getAllPostIds } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ShareButton from '@/components/share-button';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/github-dark.css';

export async function generateStaticParams() {
    return getAllPostIds();
}
type PageProps = {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const postData = await getPostData(slug).catch(() => null);


    if (!postData) {
        return {
            title: 'Vision nicht gefunden - Bildungsrebellen',
            description: 'Diese Vision unserer Bildungsrevolution existiert nicht (noch nicht!)',
        };
    }

    return {
        title: `${postData.title} - Bildungsrebellen Vision`,
        description: postData.excerpt || postData.content.substring(0, 160),
        openGraph: {
            title: postData.title,
            description: postData.excerpt || postData.content.substring(0, 160),
            type: 'article',
            publishedTime: postData.date,
        },
    };
}

const components = {
    h1: (props: any) => <h1 className="text-3xl font-bold my-6 text-white" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold my-5 text-gray-200 border-b pb-2 border-gray-700" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-semibold my-4 text-gray-300" {...props} />,
    p: (props: any) => <p className="my-4 text-gray-300 leading-relaxed" {...props} />,
    a: (props: any) => <a className="text-red-600 dark:text-red-400 hover:underline" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-red-500 dark:border-red-400 pl-4 my-6 italic text-gray-300 bg-gray-800 p-4 rounded-r" {...props} />
    ),
    ul: (props: any) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
    li: (props: any) => <li className="text-gray-300" {...props} />,
    table: (props: any) => (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full border border-gray-700" {...props} />
        </div>
    ),
    th: (props: any) => (
        <th className="px-4 py-2 text-left bg-gray-800 border-b border-gray-700" {...props} />
    ),
    td: (props: any) => (
        <td className="px-4 py-2 border-b border-gray-700 text-gray-300" {...props} />
    ),
    code: (props: any) => (
        <code className="bg-gray-700 rounded px-1 py-0.5 text-sm font-mono" {...props} />
    ),
    pre: (props: any) => (
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-6" {...props} />
    ),
    img: (props: any) => (
        <img className="mx-auto my-6 rounded-lg shadow-md max-w-full h-auto" {...props}  alt="image"/>
    ),
};

export default async function VisionPostPage({ params }: PageProps) {
    const { slug } = await params;
    const postData = await getPostData(slug).catch(() => notFound());

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-red-600 to-orange-500 py-16 px-4 sm:px-6 lg:px-8 text-white">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/vision"
                        className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
                    >
                        <FaArrowLeft className="mr-2" />
                        Zurück zur Übersicht
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                Unsere Vision
              </span>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                {postData.title}
                            </h1>
                        </div>

                        <div className="flex items-center text-white/80">
                            <FaCalendarAlt className="mr-2" />
                            <time dateTime={postData.date}>
                                {new Date(postData.date).toLocaleDateString('de-DE', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Content */}
                <article className="prose prose-invert max-w-none">
                    <MDXRemote
                        source={postData.content}
                        components={components}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                rehypePlugins: [rehypeHighlight],
                            },
                        }}
                    />
                </article>

                {/* Share & CTA */}
                <div className="mt-16 pt-8 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <ShareButton
                            title={`${postData.title} - Bildungsrebellen`}
                            url={`https://yourdomain.com/vision/${slug}`}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            <FaShareAlt />
                            Vision teilen
                        </ShareButton>

                        <Link
                            href="/vision"
                            className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-medium rounded-lg shadow-lg hover:shadow-red-500/30 transition-all"
                        >
                            Alle Visionen ansehen
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}