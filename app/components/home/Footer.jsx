import React from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter, LuHeart } from "react-icons/lu";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="w-full bg-black border-t border-white/10 px-6 py-8 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                        <span>© {currentYear} ATY.</span>
                        <span className="hidden md:inline">Built with</span>
                        <LuHeart className="w-4 h-4 text-cyan-400 fill-cyan-400 animate-pulse" />
                        <span className="hidden md:inline">and Next.js</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/atishay5845"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <LuGithub className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/atishay-sodhiya-9022a5298/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <LuLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://x.com/ATY5845"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <LuTwitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
