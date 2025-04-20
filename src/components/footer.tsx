"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaTwitter, FaInstagram, FaYoutube, FaHandsHelping } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";

const footerElements = [
    { navLink: "Über uns", navLinkUrl: "/about" },
    { navLink: "Unsere Vision", navLinkUrl: "/vision" },
    { navLink: "Shop", navLinkUrl: "/merchstore" },
    { navLink: "Kontakt", navLinkUrl: "/contact" },
];

export default function Footer() {
    const footerRef = useRef(null);
    const linksRef = useRef([]);
    const socialRef = useRef(null);
    const missionRef = useRef(null);

    // @ts-ignore
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top bottom",
                toggleActions: "play none none none"
            }
        });

        tl.fromTo(
            linksRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }
        );

        tl.fromTo(
            socialRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5 },
            "-=0.4"
        );

        tl.fromTo(
            missionRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.3"
        );

        return () => tl.kill();
    }, []);

    const addToLinksRef = (el: any) => {
        // @ts-ignore
        if (el && !linksRef.current.includes(el )) {
            // @ts-ignore
            linksRef.current.push(el);
        }
    };

    return (
        <footer
            ref={footerRef}
            className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t-4 border-red-600"
        >
            <div className="max-w-7xl mx-auto">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Navigation Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-red-400 flex items-center">
                            <FaHandsHelping className="mr-2" /> MITMACHEN
                        </h3>
                        <ul className="space-y-3">
                            {footerElements.map((item, index) => (
                                <li key={index}>
                                    <a
                                        ref={addToLinksRef}
                                        href={item.navLinkUrl}
                                        className="hover:text-red-400 transition-colors duration-300 text-lg"
                                    >
                                        {item.navLink}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mission Statement */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-red-400 flex items-center">
                            <RiLeafFill className="mr-2" /> UNSERE MISSION
                        </h3>
                        <p
                            ref={missionRef}
                            className="text-gray-300 text-lg leading-relaxed"
                        >
                            Wir kämpfen für ein <span className="text-red-400">gerechtes, digitales und zukunftsfähiges</span> Bildungssystem.
                            Jeder Schüler verdient die gleichen Chancen - unabhängig von Herkunft oder Wohnort.
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-red-400">FOLGE UNSERER REVOLUTION</h3>
                        <div
                            ref={socialRef}
                            className="flex space-x-6"
                        >
                            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-2xl">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-2xl">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-2xl">
                                <FaYoutube />
                            </a>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-3">Bleib informiert</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Deine Email"
                                    className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                                />
                                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md font-medium transition-colors duration-300">
                                    Los!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-2xl font-bold text-red-500">BILDUNGSREBELLEN</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Die Bildungsrebellen. Alle Rechte vorbehalten.
                        <p className="text-md text-gray-500 text-center">
                            Hinweis: Diese Website ist ein Schulprojekt. Einige Inhalte (wie z.B. der Shop)
                            sind nur zur Demonstration und nicht echt.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
}