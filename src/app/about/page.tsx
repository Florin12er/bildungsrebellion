"use client";
import { FaGraduationCap, FaUsers, FaLightbulb, FaChartLine, FaGlobeEurope, FaBalanceScale } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            <div className="relative bg-gradient-to-r from-red-600 to-orange-500 py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
                Die Bildungsrebellen
              </span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Wir revolutionieren das Bildungssystem für eine gerechte, digitale und zukunftsfähige Gesellschaft
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Unsere <span className="text-red-600">Mission</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-4xl mx-auto"
                    >
                        Die Bildungsrebellen entstanden aus der Erkenntnis, dass unser Bildungssystem Schüler*innen
                        des 21. Jahrhunderts mit Methoden des 19. Jahrhunderts unterrichtet. Wir kämpfen für radikale Reformen.
                    </motion.p>
                </div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: <FaGraduationCap className="text-4xl text-red-500 mb-4" />,
                            title: "Chancengleichheit",
                            description: "Gleiche Bildungschancen für alle, unabhängig von Herkunft oder Wohnort"
                        },
                        {
                            icon: <FaLightbulb className="text-4xl text-yellow-500 mb-4" />,
                            title: "Innovation",
                            description: "Digitale Tools und moderne Pädagogik für zeitgemäßes Lernen"
                        },
                        {
                            icon: <FaBalanceScale className="text-4xl text-blue-500 mb-4" />,
                            title: "Gerechtigkeit",
                            description: "Faire Finanzierung und einheitliche Standards bundesweit"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                            {item.icon}
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Crisis Section */}
                <div className="bg-gray-800 rounded-xl p-8 mb-20 border border-gray-700">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Die <span className="text-red-600">Bildungskrise</span> in Zahlen
                            </h2>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span>31.7% der Neuntklässler scheitern an Mindeststandards</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span>20% leiden unter lähmender Prüfungsangst</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span>Deutschland gibt 28 Milliarden € für Kriege aus - aber zu wenig für Bildung</span>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-gray-700 p-4 rounded-lg shadow">
                                <Image
                                    src="/education-stats.png"
                                    alt="Bildungsstatistiken"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Solutions Section */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-white mb-12"
                    >
                        Unsere <span className="text-red-600">Lösungen</span>
                    </motion.h2>

                    <div className="space-y-12">
                        {[
                            {
                                title: "Digitale Revolution",
                                icon: <FaGlobeEurope className="text-red-500" />,
                                points: [
                                    "Laptops & Tablets für alle Schüler*innen",
                                    "Bundesweite Online-Lernplattform",
                                    "Lehrvideos & digitale Inhalte"
                                ]
                            },
                            {
                                title: "Praxisnahe Bildung",
                                icon: <FaUsers className="text-yellow-500" />,
                                points: [
                                    "Alltagskompetenzen als Schulfächer",
                                    "Mehr Projektarbeit & kreatives Denken",
                                    "Kooperationen mit lokalen Unternehmen"
                                ]
                            },
                            {
                                title: "Nachhaltige Schulen",
                                icon: <FaChartLine className="text-green-500" />,
                                points: [
                                    "Weniger Papier, mehr Bäume",
                                    "Reparaturfreundliche Geräte",
                                    "Umweltbildung im Lehrplan"
                                ]
                            }
                        ].map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                            >
                                <div className="md:w-1/3 flex justify-center">
                                    <div className="bg-gray-800 p-6 rounded-full shadow-lg border border-gray-700">
                                        <div className="text-5xl">
                                            {solution.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {solution.title}
                                    </h3>
                                    <ul className="space-y-2 text-gray-300">
                                        {solution.points.map((point, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-red-500 mr-2">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-8 text-center text-white"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Bereit für die Bildungsrevolution?</h2>
                    <p className="text-xl mb-6 max-w-2xl mx-auto">
                        Gemeinsam können wir das Schulsystem verändern - werde Teil der Bewegung!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/mitmachen"
                            className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Jetzt mitmachen
                        </a>
                        <a
                            href="/vision"
                            className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Unsere Vision
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}