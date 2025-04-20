"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPaperPlane, FaDonate, FaHandHoldingUsd, FaSchool, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        donation: 0
    });
    const [submitted, setSubmitted] = useState(false);
    const [donationSubmitted, setDonationSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, you would send this data to your backend
        console.log("Form submitted (but not really)", formData);
    };

    const handleDonate = (e: React.FormEvent) => {
        e.preventDefault();
        setDonationSubmitted(true);
        // Fake donation - just for show!
        console.log("Fake donation submitted", formData.donation);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4 flex justify-center items-center">
                        <FaPaperPlane className="mr-3" />
                        Kontaktiere die Bildungsrebellen
                    </h1>
                    <p className="text-xl text-gray-300">
                        Wir kämpfen für bessere Bildung - deine Stimme zählt!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <FaGraduationCap className="mr-2 text-red-400" />
                            Schreib uns deine Ideen
                        </h2>

                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="text-green-400 text-5xl mb-4">✓</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Nachricht verschickt!</h3>
                                <p className="text-gray-300">
                                    Danke für deine Unterstützung der Bildungsrevolution!
                                    Wir melden uns bald bei dir.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                            Dein Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                            Deine Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                            Deine revolutionäre Nachricht
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-6 text-lg font-bold shadow-lg hover:shadow-red-500/30 transition-all"
                                    >
                                        <FaPaperPlane className="mr-2" />
                                        Nachricht abschicken
                                    </Button>
                                </div>
                            </form>
                        )}
                    </motion.div>

                    {/* Fake Donation Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <FaDonate className="mr-2 text-red-400" />
                            Unterstütze die Revolution!
                        </h2>

                        {donationSubmitted ? (
                            <div className="text-center py-8">
                                <div className="text-green-400 text-5xl mb-4">💰</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Fake-Spende erhalten!</h3>
                                <p className="text-gray-300 mb-4">
                                    (Psst... das war nur eine Simulation für unser Schulprojekt!)
                                </p>
                                <p className="text-yellow-300 font-medium">
                                    Aber danke für dein revolutionäres Engagement! ✊
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleDonate}>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-gray-300 mb-4">
                                            Jeder Euro hilft uns, das Bildungssystem zu revolutionieren!
                                        </p>

                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            {[5, 10, 20, 50].map(amount => (
                                                <Button
                                                    key={amount}
                                                    type="button"
                                                    variant="outline"
                                                    className={`border ${formData.donation === amount ? 'border-red-500 bg-red-900/20 text-white' : 'border-gray-600 text-gray-400'}`}
                                                    onClick={() => setFormData({...formData, donation: amount})}
                                                >
                                                    {amount}€
                                                </Button>
                                            ))}
                                        </div>

                                        <div>
                                            <label htmlFor="customAmount" className="block text-sm font-medium text-gray-300 mb-1">
                                                Oder eigenen Betrag:
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">€</span>
                                                <input
                                                    type="number"
                                                    id="customAmount"
                                                    name="donation"
                                                    value={formData.donation || ""}
                                                    onChange={handleChange}
                                                    min="1"
                                                    className="w-full pl-8 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                    placeholder="0"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white py-6 text-lg font-bold shadow-lg hover:shadow-green-500/30 transition-all"
                                    >
                                        <FaHandHoldingUsd className="mr-2" />
                                        Jetzt spenden
                                    </Button>

                                    <p className="text-xs text-gray-500 text-center">
                                        Keine Sorge, diese Spendenfunktion ist nur zur Demonstration.
                                        Es werden keine echten Zahlungen verarbeitet.
                                    </p>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-16 text-center text-gray-400"
                >
                    <div className="flex justify-center items-center mb-4">
                        <FaSchool className="text-red-400 mr-2" />
                        <p>Bildungsrebellen HQ • Alexandersfeld 28a • 26127 Oldenburg </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}