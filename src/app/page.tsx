"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
    FaFire,
    FaLaptopCode,
    FaFistRaised,
    FaBalanceScale,
    FaRecycle,
    FaMicrophone,
    FaLockOpen,
    FaRocket,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
    // Refs for GSAP animations
    const mainRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const contentRef = useRef(null);
    const iconRefs = useRef([]);
    const ctaRef = useRef(null);
    const tickerRef = useRef(null);

    // Initialize icon refs array
    const addToIconRefs = (el: any) => {
        // @ts-ignore
        if (el && !iconRefs.current.includes(el)) {
            // @ts-ignore
            iconRefs.current.push(el);
        }
    };

    // @ts-ignore
    useEffect(() => {
        // Create main timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial fade in with gritty texture
        tl.fromTo(
            mainRef.current,
            { opacity: 0, backgroundPosition: "0% 0%" },
            {
                opacity: 1,
                duration: 1.5,
                backgroundPosition: "100% 100%",
                ease: "none"
            }
        );

        // Title animation - glitch effect
        tl.fromTo(
            titleRef.current,
            {
                opacity: 0,
                x: -20,
                filter: "blur(5px)"
            },
            {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 1,
                ease: "elastic.out(1, 0.5)"
            }
        );

        // Subtitle - spray paint effect
        tl.fromTo(
            subtitleRef.current,
            {
                opacity: 0,
                scale: 1.5,
                letterSpacing: "10px"
            },
            {
                opacity: 1,
                scale: 1,
                letterSpacing: "2px",
                duration: 0.8,
                ease: "back.out(4)"
            },
            "-=0.5"
        );

        // Content drop-in
        tl.fromTo(
            contentRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.3"
        );

        // Icons explode in
        iconRefs.current.forEach((icon, index) => {
            tl.fromTo(
                icon,
                {
                    scale: 0,
                    opacity: 0,
                    rotation: Math.random() * 180 - 90
                },
                {
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 0.6,
                    ease: "back.out(2)"
                },
                index * 0.1
            );
        });

        // Ticker animation
        gsap.set(tickerRef.current, { xPercent: 0 });
        tl.to(
            tickerRef.current,
            {
                xPercent: -100,
                duration: 30,
                repeat: -1,
                ease: "none"
            },
            "-=1"
        );



        return () => tl.kill();
    }, []);

    // Handle hover effect for icons
    const handleIconHover = (index: number) => {
        gsap.to(iconRefs.current[index], {
            y: -15,
            scale: 1.4,
            color: "#ff4d4d",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    // Handle mouse leave for icons
    const handleIconLeave = (index : number) => {
        gsap.to(iconRefs.current[index], {
            y: 0,
            scale: 1,
            color: "#e6e6e6",
            duration: 0.3
        });
    };

    // CTA hover effect
    const handleCtaHover = () => {
        gsap.to(ctaRef.current, {
            y: -2,
            boxShadow: "0 5px 15px rgba(255, 77, 77, 0.4)",
            duration: 0.3
        });
    };

    const handleCtaLeave = () => {
        gsap.to(ctaRef.current, {
            y: 0,
            boxShadow: "0 2px 5px rgba(255, 77, 77, 0.2)",
            duration: 0.3
        });
    };

    const icons = [
        { icon: FaFire, label: "Protest" },
        { icon: FaLaptopCode, label: "Digitalisierung" },
        { icon: FaFistRaised, label: "Widerstand" },
        { icon: FaBalanceScale, label: "Gerechtigkeit" },
        { icon: FaRecycle, label: "Nachhaltigkeit" },
        { icon: FaMicrophone, label: "Stimme erheben" },
        { icon: FaLockOpen, label: "Freies Wissen" },
        { icon: FaRocket, label: "Zukunft" }
    ];

    return (
        <div
            ref={mainRef}
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 chalkboard"
        >
            {/* Protest ticker */}
            <div className="w-full py-3 bg-red-900/80 overflow-hidden mb-8">
                <div
                    ref={tickerRef}
                    className="inline-block whitespace-nowrap text-white font-bold"
                >
                    <span className="mx-8">📉 31.7% der Neuntklässler scheitern an Mindeststandern</span>
                    <span className="mx-8">💸 28 Milliarden € für Kriege – 0 für digitale Bildung?</span>
                    <span className="mx-8">🚀 Bundesweite Schulplattform JETZT!</span>
                    <span className="mx-8">✊ Schluss mit veralteten Lehrplänen!</span>
                </div>
            </div>

            <div className="max-w-4xl w-full flex flex-col items-center">
                {/* Title */}
                <div className="relative w-full mb-4 sm:mb-6">
                    <h1
                        ref={titleRef}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-3 rebel-title"
                    >
                        BILDUNGSREBELLEN
                    </h1>
                </div>

                <h2
                    ref={subtitleRef}
                    className="text-2xl sm:text-3xl text-center mb-8 font-bold subtitle"
                >
                    ✊ Die Revolution beginnt im Klassenzimmer!
                </h2>

                {/* Content */}
                <div
                    ref={contentRef}
                    className="text-white/90 text-center mb-10 max-w-2xl text-lg content"
                >
                    <p className="mb-6">
                        Wir sind die Stimme derer, die vom System vergessen wurden.
                        <span className="text-red-300"> Kein Kind zurücklassen</span> –
                        für ein Bildungssystem, das <span className="underline">wirklich</span> auf die Zukunft vorbereitet.
                    </p>
                </div>

                {/* Icon grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12">
                    {icons.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                            onMouseEnter={() => handleIconHover(index)}
                            onMouseLeave={() => handleIconLeave(index)}
                        >
                            <div
                                ref={addToIconRefs}
                                className="text-[#e6e6e6] mb-2 transition-all hover:cursor-pointer"
                                style={{ fontSize: "2.5rem" }}
                            >
                                <item.icon />
                            </div>
                            <span className="text-white/90 text-sm font-bold uppercase tracking-wider">
                {item.label}
              </span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div
                    ref={ctaRef}
                    onMouseEnter={handleCtaHover}
                    onMouseLeave={handleCtaLeave}
                    className="mt-6 cta-button"
                >
                    <Link href="/mitmachen">
                        <Button
                            className="bg-red-600 hover:bg-red-700 text-white border-0 px-10 py-6 rounded-none font-bold text-xl transition-all"
                        >
                             JETZT MITMACHEN!
                        </Button>
                    </Link>
                </div>

            </div>

            {/* Font and global styles */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Permanent+Marker&display=swap');
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        
        .glitch-effect {
          animation: glitch 0.5s linear infinite;
        }
      `}</style>
        </div>
    );
}