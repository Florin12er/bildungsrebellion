import Link from 'next/link';
import { FaGraduationCap, FaLightbulb, FaBookOpen } from 'react-icons/fa';
import { getSortedPostsData } from '@/lib/markdown';

export default async function VisionPage() {
    const allPostsData = await getSortedPostsData();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Unsere Vision
            </span>{' '}
                        für die Bildungsrevolution
                    </h1>
                    <p className="text-xl  text-gray-300 max-w-3xl mx-auto">
                        Entdecke unsere radikalen Ideen für ein faires, modernes und zukunftsfähiges Bildungssystem.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-red-900/30 mr-4">
                                <FaGraduationCap className="text-red-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">100%</p>
                                <p className="text-gray-400">Chancengleichheit</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-yellow-900/30 mr-4">
                                <FaLightbulb className="text-yellow-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">24/7</p>
                                <p className="text-gray-400">Digitale Bildung</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-900/30 mr-4">
                                <FaBookOpen className="text-blue-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">0%</p>
                                <p className="text-gray-400">Auswendiglernen</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPostsData.map(({ id, title, date }) => (
                        <Link
                            key={id}
                            href={`/vision/${id}`}
                            className="group"
                        >
                            <div className="h-full bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-red-500">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-900/30 text-red-400">
                      Vision
                    </span>
                                        <span className="text-sm text-gray-400">
                      {new Date(date).toLocaleDateString('de-DE')}
                    </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                        {title}
                                    </h2>
                                    <div className="mt-4 flex items-center text-red-400 font-medium">
                                        Mehr erfahren
                                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Bereit für die Bildungsrevolution?
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/mitmachen"
                            className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-medium rounded-lg shadow-lg hover:shadow-red-500/30 transition-all"
                        >
                            Jetzt mitmachen
                        </Link>
                        <Link
                            href="/merchstore"
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Revolutionärer Merch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}