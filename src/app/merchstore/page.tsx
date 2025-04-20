"use client";
import MerchItem from "@/app/merchstore/_components/merch_item";
import { Input } from "@/components/ui/input";
import { products } from "./products";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaSearch, FaFire } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Merchstore() {
    const saleBannerRef = useRef(null);
    const searchRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        // GSAP animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Sale banner animation
        tl.fromTo(
            saleBannerRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        );

        // Search input animation
        tl.fromTo(
            searchRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6 },
            "-=0.4"
        );

        // Grid items animation
        tl.fromTo(
            // @ts-ignore
            gridRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            },
            "-=0.3"
        );

        // Continuous pulse animation for sale banner
        const pulseTl = gsap.timeline({ repeat: -1, yoyo: true });
        pulseTl.to(saleBannerRef.current, {
            y: 3,
            duration: 1.5,
            ease: "sine.inOut"
        });

        return () => {
            tl.kill();
            pulseTl.kill();
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Sale Banner - Revolutionary style */}
                <div
                    ref={saleBannerRef}
                    className="mb-12 relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-500 p-6 rounded-xl shadow-2xl border-2 border-white/10 transform transition-all hover:scale-[1.01]"
                >
                    <div className="absolute inset-0 bg-[url('/images/grunge-texture.png')] opacity-20 mix-blend-overlay" />
                    <div className="relative z-10 text-center">
                        <div className="flex justify-center items-center mb-2">
                            <FaFire className="text-yellow-300 mr-3 text-2xl animate-bounce" />
                            <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                REBELLEN-SALE! 30% RABATT!
                            </h1>
                            <FaFire className="text-yellow-300 ml-3 text-2xl animate-bounce delay-100" />
                        </div>
                        <p className="text-xl font-medium text-yellow-100 mt-2">
                            Nur noch <span className="font-black">3 TAGE</span> - Unterstütze die Bildungsrevolution!
                        </p>
                        <div className="mt-4 flex justify-center">
                            <div className="bg-black/30 px-4 py-2 rounded-full text-sm font-bold text-white">
                                Code: <span className="text-yellow-300">REBELL2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Input - Rebel style */}
                <div ref={searchRef} className="mb-12 max-w-2xl mx-auto relative">
                    <div className="relative">
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                            placeholder="Suche nach revolutionärem Merch..."
                            className="pl-12 pr-6 py-6 border-2 border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 bg-gray-800/70 text-white placeholder-gray-400 rounded-xl text-lg font-medium shadow-lg transition-all"
                        />
                    </div>
                    <p className="text-center text-gray-400 mt-2 text-sm">
                        Tipp: Suche nach "T-Shirts", "Poster" oder "Sticker"
                    </p>
                </div>

                {/* Product Grid - Revolutionary layout */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {products.map((product) => (
                        <MerchItem
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>

                {/* Call-to-action */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Kein passendes Produkt gefunden?
                    </h3>
                    <Button
                        className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-red-500/30 transition-all"
                    >
                        Vorschlag einreichen
                    </Button>
                </div>
            </div>

            {/* Background elements */}
            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}