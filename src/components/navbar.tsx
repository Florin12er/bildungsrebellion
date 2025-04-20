"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose, SheetTitle,
} from "@/components/ui/sheet";
import { FaGraduationCap, FaFire } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const navbarElements = [
    {
        navLink: "Über uns",
        navLinkUrl: "/about",
        icon: <FaGraduationCap className="mr-2" />
    },
    {
        navLink: "Unsere Vision",
        navLinkUrl: "/vision",
        icon: <FaFire className="mr-2" />
    },
    {
        navLink: "Shop",
        navLinkUrl: "/merchstore",
        icon: <span className="mr-2">🛒</span>
    },
    {
        navLink: "Kontakt",
        navLinkUrl: "/contact",
        icon: <span className="mr-2">✉️</span>
    },
];

const Navbar = () => {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const ctaRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // GSAP animations
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        );

        gsap.to(navRef.current, {
            height: scrolled ? "70px" : "90px",
            duration: 0.3,
            ease: "power2.inOut",
        });

        return () => {
            tl.kill();
        };
    }, [scrolled]);

    const handleLinkHover = (index: number) => {
        gsap.to(linksRef.current[index], {
            y: -2,
            color: "#ff4d4d",
            duration: 0.2
        });
    };

    const handleLinkLeave = (index: number) => {
        gsap.to(linksRef.current[index], {
            y: 0,
            color: "#f0f0d0",
            duration: 0.2
        });
    };

    return (
        <nav
            ref={navRef}
            className={` sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-900/95 backdrop-blur-md border-b border-red-600/30 py-3 shadow-lg"
                    : "bg-gray-900/80 backdrop-blur-sm border-b border-red-600/10 py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <div
                            ref={logoRef}
                            className="flex items-center hover:scale-105 transition-transform duration-200"
                        >
                            <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-green-500 rounded-md flex items-center justify-center mr-2 shadow-md">
                                <span className="text-[#f0f0d0] font-bold text-lg">BR</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-[#f0f0d0] hidden sm:block">
                Bildungsrebellen
              </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navbarElements.map((item, index) => (
                            <Link
                                key={index}
                                href={item.navLinkUrl}
                                ref={el => { linksRef.current[index] = el; }}
                                onMouseEnter={() => handleLinkHover(index)}
                                onMouseLeave={() => handleLinkLeave(index)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                    scrolled
                                        ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                                        : "text-[#f0f0d0] hover:text-white hover:bg-gray-800/30"
                                }`}
                            >
                                {item.navLink}
                            </Link>
                        ))}

                        <div ref={ctaRef} className="ml-4">
                            <Button
                                variant="default"
                                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-lg hover:shadow-red-500/30 font-bold transition-all"
                            >
                                <Link href="/mitmachen">
                                Jetzt mitmachen!
                                    </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-[#f0f0d0] hover:bg-gray-800/50"
                                    aria-label="Toggle menu"
                                >
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </Button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="bg-gray-900 border-l border-gray-800 w-full max-w-xs"
                                onInteractOutside={() => setIsOpen(false)}
                            >
                                <SheetTitle></SheetTitle>
                                <div className="flex flex-col h-full pt-6">
                                    <div className="flex items-center justify-start mb-8 px-4">
                                        <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-green-500 rounded-md flex items-center justify-center mr-2">
                                            <span className="text-[#f0f0d0] font-bold text-lg">BR</span>
                                        </div>
                                        <span className="font-bold text-xl text-[#f0f0d0]">Bildungsrebellen</span>
                                    </div>

                                    <nav className="flex-1 space-y-2 px-2">
                                        {navbarElements.map((item, index) => (
                                            <SheetClose asChild key={index}>
                                                <Link
                                                    href={item.navLinkUrl}
                                                    className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.icon}
                                                    {item.navLink}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </nav>

                                    <div className="px-4 pb-6">
                                        <SheetClose asChild>

                                            <Button
                                                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-md font-bold mt-4"
                                                onClick={() => setIsOpen(false)}
                                            >

                                                <Link href="/mitmachen">
                                                Mitmachen!
                                                </Link>
                                            </Button>

                                        </SheetClose>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;