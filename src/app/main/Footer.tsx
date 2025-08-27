"use client"

import { Heart } from "lucide-react";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaEnvelope
} from "react-icons/fa";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://instagram.com/username",
            color: "#E4405F"
        },
        {
            name: "Twitter",
            icon: FaTwitter,
            url: "https://twitter.com/username",
            color: "#1DA1F2"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedinIn,
            url: "https://linkedin.com/in/username",
            color: "#0077B5"
        },
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/username",
            color: "#333333"
        },
        {
            name: "Email",
            icon: FaEnvelope,
            url: "mailto:hizkia@example.com",
            color: "#EA4335"
        }
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "Serificate", href: "#sertificate" },
        { name: "Contact", href: "#contact" }
    ];

    const handleSocialClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Hizkia Siahaan
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                            Industrial Engineering student with expertise in team management, 
                            logistics coordination, and technical skills including video editing, 
                            AutoCAD, Microsoft Office, and Python.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <button
                                    key={social.name}
                                    onClick={() => handleSocialClick(social.url)}
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                    aria-label={`Follow on ${social.name}`}
                                >
                                    <social.icon 
                                        className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" 
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Let's Connect
                        </h3>
                        <div className="space-y-2">
                            <p className="text-gray-300 text-sm">
                                Ready to collaborate on your next project?
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                <FaEnvelope className="w-3 h-3" />
                                Get in touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center items-center">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>© {currentYear} Hizkia Siahaan. Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}