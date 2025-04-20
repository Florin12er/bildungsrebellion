// app/mitmachen/page.tsx
"use client";

import { useState } from 'react';
import { FaFistRaised, FaUserGraduate, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function JoinPage() {
    const [activeTab, setActiveTab] = useState('student');
    const [pledgeSigned, setPledgeSigned] = useState(false);
    const [showRebelBadge, setShowRebelBadge] = useState(false);

    const roles = [
        {
            id: 'student',
            title: "Schüler:in",
            icon: <FaUserGraduate className="text-2xl" />,
            content: "Werde Junior-Rebell:in und kämpfe für bessere Bildung!"
        },
        {
            id: 'teacher',
            title: "Lehrkraft",
            icon: <FaChalkboardTeacher className="text-2xl" />,
            content: "Unterstütze die Revolution von innerhalb des Systems!"
        },
        {
            id: 'parent',
            title: "Elternteil",
            icon: <FaHandsHelping className="text-2xl" />,
            content: "Fordere bessere Schulen für deine Kinder!"
        },
        {
            id: 'ally',
            title: "Verbündete:r",
            icon: <FaFistRaised className="text-2xl" />,
            content: "Kämpfe mit uns für Bildungsgerechtigkeit!"
        }
    ];

    const handleSignPledge = () => {
        setPledgeSigned(true);
        setTimeout(() => setShowRebelBadge(true), 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 to-orange-500 py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
                        <FaFistRaised className="animate-bounce" />
                        Werde Teil der Bildungsrevolution!
                        <FaFistRaised className="animate-bounce delay-100" />
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Das System ist kaputt. Zusammen können wir es reparieren.
                    </p>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Role Selection */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold text-center mb-8 text-white">
                        Wie willst du mitmachen?
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveTab(role.id)}
                                className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all ${activeTab === role.id ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'}`}
                            >
                                <div className={`mb-3 ${activeTab === role.id ? 'text-white' : 'text-red-500'}`}>
                                    {role.icon}
                                </div>
                                <span className="font-medium">{role.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="bg-gray-800 rounded-xl shadow-md p-8 border border-gray-700">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <h3 className="text-xl font-bold mb-4 text-white">
                                    {roles.find(r => r.id === activeTab)?.title} werden
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {roles.find(r => r.id === activeTab)?.content}
                                </p>

                                {activeTab === 'student' && (
                                    <div className="space-y-4">
                                        <p>Als Junior-Rebell:in erhältst du:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <li className="bg-gray-700 p-3 rounded-lg">🔍 Geheime Lern-Tipps</li>
                                            <li className="bg-gray-700 p-3 rounded-lg">📢 Protest-Toolkit</li>
                                            <li className="bg-gray-700 p-3 rounded-lg">🎓 Rebell:innen-Ausweis</li>
                                        </ul>
                                    </div>
                                )}

                                {activeTab === 'teacher' && (
                                    <div className="space-y-4">
                                        <p>Als revolutionäre Lehrkraft:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                            <li className="bg-gray-700 p-3 rounded-lg">📚 Alternative Lehrpläne</li>
                                            <li className="bg-gray-700 p-3 rounded-lg">💡 Subversive Unterrichtsmethoden</li>
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Rebel Pledge */}
                <motion.div
                    className="bg-gradient-to-br from-red-500 to-orange-400 rounded-xl shadow-xl overflow-hidden mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="p-8 md:p-12 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Rebell:innen-Gelöbnis</h2>

                        {!pledgeSigned ? (
                            <div>
                                <div className="prose prose-invert max-w-none mb-8">
                                    <p>Ich gelobe:</p>
                                    <ul>
                                        <li>Für bessere Bildung zu kämpfen</li>
                                        <li>Das System herauszufordern</li>
                                        <li>Andere zu inspirieren</li>
                                        <li>Nie aufzugeben</li>
                                    </ul>
                                    <p className="mt-4">Unterschreibe mit einem Klick und werde offizielles Mitglied der Bildungsrebellen!</p>
                                </div>

                                <Button
                                    onClick={handleSignPledge}
                                    className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg"
                                >
                                    Jetzt unterzeichnen
                                </Button>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="text-5xl mb-6">✊</div>
                                <h3 className="text-2xl font-bold mb-4">Willkommen in der Rebellion!</h3>
                                <p className="mb-6">Dein Kampf für bessere Bildung beginnt jetzt.</p>

                                {showRebelBadge && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="inline-block bg-white/20 p-6 rounded-full border-2 border-white"
                                    >
                                        <div className="text-4xl">🎓</div>
                                        <p className="font-bold mt-2">Junior-Rebell:in</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Fake Counter */}
                <motion.div
                    className="bg-gray-800 rounded-xl shadow-md p-8 border border-gray-700 text-center mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <h3 className="text-xl font-bold mb-2 text-white">
                        Schon <span className="text-red-500">14.892</span> Rebellen dabei!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Gemeinsam sind wir unaufhaltbar
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                        <div
                            className="bg-gradient-to-r from-red-500 to-orange-400 h-4 rounded-full"
                            style={{ width: '72%' }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-400">
                        Nächstes Ziel: 20.000 Rebellen
                    </p>
                </motion.div>

                {/* Next Steps */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-white">
                        Wie geht's weiter?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <div className="text-red-500 text-3xl mb-3">1</div>
                            <h3 className="font-bold mb-2">Merch besorgen</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Zeige deine rebellische Einstellung mit unseren revolutionären Produkten
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg borderborder-gray-700">
                            <div className="text-red-500 text-3xl mb-3">2</div>
                            <h3 className="font-bold mb-2">#Bildungsrebellen</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Teile deine Geschichte in sozialen Medien
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <div className="text-red-500 text-3xl mb-3">3</div>
                            <h3 className="font-bold mb-2">Lokale Gruppe finden</h3>
                            <p className="text-gray-300 text-sm">
                                Gemeinsam sind wir stärker (Coming Soon)
                            </p>
                        </div>
                    </div>

                    <Button
                        asChild
                        className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-red-500/30"
                    >
                        <Link href="/merchstore">
                            Zum Rebell:innen-Shop
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}