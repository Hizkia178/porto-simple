"use client"

import { useState } from "react";
import {
    SiPython,
    SiMicroeditor,
    SiAutodesk,
    SiAdobeaftereffects,
    SiAdobephotoshop,
    SiFigma
} from "react-icons/si";

interface Skill {
    id: number;
    name: string;
    icon: any;
    color: string;
    description: string;
    level: string;
    experience: string;
    projects: string[];
    certifications?: string[];
    image: string;
}

export function Skills() {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const skills: Skill[] = [
        {
            id: 1,
            name: "Python",
            icon: SiPython,
            color: "#3776ab",
            description: "Data analysis, automation, and backend development with modern frameworks",
            level: "Advanced",
            experience: "3+ years",
            projects: ["Data Analytics Dashboard", "Web Scraping Tools", "API Development", "Machine Learning Models"],
            certifications: ["Python Data Science Certification", "Django Web Framework"],
            image: "/emma.jpg"
        },
        {
            id: 2,
            name: "MS Office",
            icon: SiMicroeditor,
            color: "#d83b01",
            description: "Advanced Excel, PowerPoint presentations, and document management",
            level: "Expert",
            experience: "5+ years",
            projects: ["Financial Reports", "Data Visualization", "Business Presentations", "Document Templates"],
            certifications: ["Microsoft Office Specialist", "Advanced Excel Analytics"],
            image: "/emma.jpg"
        },
        {
            id: 3,
            name: "AutoCAD",
            icon: SiAutodesk,
            color: "#e51937",
            description: "2D/3D technical drawing, architectural design, and engineering drafts",
            level: "Intermediate",
            experience: "2+ years",
            projects: ["Architectural Blueprints", "Mechanical Drawings", "3D Modeling", "Technical Documentation"],
            certifications: ["AutoCAD Certified Professional"],
            image: "/emma.jpg"
        },
        {
            id: 4,
            name: "After Effects",
            icon: SiAdobeaftereffects,
            color: "#9999ff",
            description: "Motion graphics, video compositing, and visual effects creation",
            level: "Intermediate",
            experience: "2+ years",
            projects: ["Brand Animations", "Video Compositing", "Motion Graphics", "Visual Effects"],
            certifications: ["Adobe Certified Expert"],
            image: "/emma.jpg"
        },
        {
            id: 5,
            name: "Photoshop",
            icon: SiAdobephotoshop,
            color: "#001e36",
            description: "Photo editing, digital art, and creative design solutions",
            level: "Advanced",
            experience: "4+ years",
            projects: ["Photo Retouching", "Digital Art", "Brand Design", "UI Mockups"],
            certifications: ["Adobe Certified Professional"],
            image: "/emma.jpg"
        },
        {
            id: 6,
            name: "Figma",
            icon: SiFigma,
            color: "#f24e1e",
            description: "UI/UX design, prototyping, and collaborative design workflows",
            level: "Advanced",
            experience: "3+ years",
            projects: ["Mobile App Design", "Web UI/UX", "Design Systems", "Interactive Prototypes"],
            certifications: ["Figma Professional Certification"],
            image: "/emma.jpg"
        }
    ];

    const openModal = (skill: Skill) => {
        setSelectedSkill(skill);
    };

    const closeModal = () => {
        setSelectedSkill(null);
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Expert": return "text-green-600 bg-green-100";
            case "Advanced": return "text-blue-600 bg-blue-100";
            case "Intermediate": return "text-yellow-600 bg-yellow-100";
            default: return "text-gray-600 bg-gray-100";
        }
    };

    return (
        <section id="skills" aria-label="Skills Section" className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12 lg:mb-16">
                    Skills & Expertise
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 group"
                            onClick={() => openModal(skill)}
                        >
                            <div className="aspect-[4/3] overflow-hidden relative flex items-center justify-center" style={{ backgroundColor: `${skill.color}20` }}>
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: skill.color }}
                                >
                                    <skill.icon className="text-white" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-300">
                                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded">
                                        View Details
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2" style={{ color: skill.color }}>
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                    {skill.description}
                                </p>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                                    {skill.level}
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[280px] sm:min-h-[320px]">
                        <div className="text-center p-4 sm:p-6 lg:p-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-400 text-2xl font-light">+</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-500 mb-2">
                                Learning More
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-400">
                                Expanding skill portfolio
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {selectedSkill && (
                <div
                    className="fixed inset-0 backdrop-blur-md bg-white bg-opacity-30 flex items-center justify-center z-50 p-4 sm:p-6"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-2xl lg:max-w-4xl max-h-full bg-white rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-hidden">
                            <div className="flex-1 flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: `${selectedSkill.color}10` }}>
                                <div className="text-center">
                                    <div
                                        className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-6xl shadow-xl mb-4"
                                        style={{ backgroundColor: selectedSkill.color }}
                                    >
                                        <selectedSkill.icon className="text-white" />
                                    </div>
                                    <div className={`inline-block px-4 py-2 rounded-full text-lg font-bold ${getLevelColor(selectedSkill.level)}`}>
                                        {selectedSkill.level} Level
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2" style={{ color: selectedSkill.color }}>
                                            {selectedSkill.name}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                                            <p className="text-base sm:text-lg text-gray-600 font-medium">
                                                Experience: {selectedSkill.experience}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-l-4 pl-4" style={{ borderColor: selectedSkill.color }}>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {selectedSkill.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Projects</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {selectedSkill.projects.map((project, index) => (
                                                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedSkill.color }}></span>
                                                    <span>{project}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {selectedSkill.certifications && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Certifications</h4>
                                            <div className="space-y-2">
                                                {selectedSkill.certifications.map((cert, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                                            <span className="text-white text-xs">✓</span>
                                                        </span>
                                                        <span>{cert}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}