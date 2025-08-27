"use client"

import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
    FaUser,
    FaCommentDots
} from "react-icons/fa";

interface SocialMedia {
    id: number;
    name: string;
    icon: any;
    color: string;
    url: string;
    username: string;
    description: string;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

export function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const socialMedias: SocialMedia[] = [
        {
            id: 1,
            name: "Instagram",
            icon: FaInstagram,
            color: "#E4405F",
            url: "https://instagram.com/username",
            username: "@username",
            description: "Follow for daily updates and behind-the-scenes content"
        },
        {
            id: 2,
            name: "Twitter",
            icon: FaTwitter,
            color: "#1DA1F2",
            url: "https://twitter.com/username",
            username: "@username",
            description: "Join the conversation and get the latest news"
        },
        {
            id: 3,
            name: "LinkedIn",
            icon: FaLinkedinIn,
            color: "#0077B5",
            url: "https://linkedin.com/in/username",
            username: "/in/username",
            description: "Connect professionally and explore opportunities"
        },
        {
            id: 4,
            name: "GitHub",
            icon: FaGithub,
            color: "#333333",
            url: "https://github.com/username",
            username: "@username",
            description: "Explore my code repositories and open source projects"
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {

            await new Promise(resolve => setTimeout(resolve, 2000));


            setFormData({ name: "", email: "", message: "" });
            setSubmitStatus("success");
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSocialClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="contact" aria-label="Contact Section" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12 lg:mb-16">
                    Let's Connect
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                            Follow Me On Social Media
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {socialMedias.map((social) => (
                                <div
                                    key={social.id}
                                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 group"
                                    onClick={() => handleSocialClick(social.url)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: social.color }}
                                        >
                                            <social.icon className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-800 mb-1">
                                                {social.name}
                                            </h4>
                                            <p className="text-sm font-medium mb-1" style={{ color: social.color }}>
                                                {social.username}
                                            </p>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {social.description}
                                            </p>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6L8 8l4 4-4 4 2 2 6-6-6-6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                            Get In Touch
                        </h3>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaUser className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-0 pl-3 flex pointer-events-none">
                                            <FaCommentDots className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm resize-none"
                                            placeholder="Tell me about your project or just say hello..."
                                        />
                                    </div>
                                </div>


                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </span>
                                    )}
                                </button>


                                {submitStatus === "success" && (
                                    <div className="p-3 bg-green-100 border border-green-300 rounded-lg text-green-700 text-sm">
                                        ✅ Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
                                        ❌ Failed to send message. Please try again.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}