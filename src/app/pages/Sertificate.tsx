"use client"

import { useState } from "react";

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    description: string;
    credentialId?: string;
    skills: string[];
    validity: string;
    level: string;
}

export function Sertificate() {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    const certificates: Certificate[] = [
        {
            id: 1,
            title: "Web Development Certificate",
            issuer: "Tech Academy",
            date: "2024",
            image: "/emma.jpg",
            description: "Comprehensive full-stack web development certification covering modern frameworks, responsive design, and best practices in web development.",
            credentialId: "WD2024-001",
            skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Design"],
            validity: "Lifetime",
            level: "Professional"
        },
        {
            id: 2,
            title: "Data Science Certificate",
            issuer: "Data Institute",
            date: "2024",
            image: "/emma.jpg",
            description: "Advanced certification in data science covering machine learning, statistical analysis, data visualization, and predictive modeling.",
            credentialId: "DS2024-002",
            skills: ["Python", "Machine Learning", "Statistics", "Data Visualization", "SQL"],
            validity: "3 years",
            level: "Advanced"
        },
        {
            id: 3,
            title: "Cloud Computing Certificate",
            issuer: "Cloud Academy",
            date: "2023",
            image: "/emma.jpg",
            description: "Professional certification in AWS cloud solutions architecture, covering scalable infrastructure and cloud-native applications.",
            credentialId: "AWS2023-003",
            skills: ["AWS Services", "Cloud Architecture", "DevOps", "Security", "Monitoring"],
            validity: "2 years",
            level: "Professional"
        }
    ];

    const openModal = (certificate: Certificate) => {
        setSelectedCertificate(certificate);
    };

    const closeModal = () => {
        setSelectedCertificate(null);
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Expert": return "text-purple-600 bg-purple-100";
            case "Advanced": return "text-blue-600 bg-blue-100";
            case "Professional": return "text-green-600 bg-green-100";
            case "Intermediate": return "text-yellow-600 bg-yellow-100";
            default: return "text-gray-600 bg-gray-100";
        }
    };

    const getValidityColor = (validity: string) => {
        if (validity === "Lifetime") return "text-green-600";
        if (validity.includes("3 years")) return "text-blue-600";
        if (validity.includes("2 years")) return "text-orange-600";
        return "text-gray-600";
    };

    return (
        <section id="sertificate" aria-label="Certificate Section" className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12 lg:mb-16">
                    Certificates & Achievements
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {certificates.map((certificate) => (
                        <div
                            key={certificate.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 group"
                            onClick={() => openModal(certificate)}
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-300">
                                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded">
                                        View Details
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                    {certificate.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    {certificate.issuer}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs text-gray-500">
                                        {certificate.date}
                                    </p>
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(certificate.level)}`}>
                                        {certificate.level}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[280px] sm:min-h-[320px]">
                        <div className="text-center p-4 sm:p-6 lg:p-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-400 text-2xl font-light">+</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-500 mb-2">
                                Coming Soon
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-400">
                                New certification in progress
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {selectedCertificate && (
                <div 
                    className="fixed inset-0 backdrop-blur-md bg-white bg-opacity-30 flex items-center justify-center z-50 p-4 sm:p-6"
                    onClick={closeModal}
                >
                    <div 
                        className="relative w-full max-w-2xl lg:max-w-4xl max-h-full bg-white rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-hidden">
                            <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 sm:p-6">
                                <img
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.title}
                                    className="max-w-full max-h-[40vh] lg:max-h-[70vh] object-contain rounded-lg shadow-lg"
                                />
                            </div>
                            
                            <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                                            {selectedCertificate.title}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                                            <p className="text-base sm:text-lg text-gray-600 font-medium">
                                                {selectedCertificate.issuer}
                                            </p>
                                            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                                            <p className="text-sm sm:text-base text-gray-500">
                                                {selectedCertificate.date}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(selectedCertificate.level)}`}>
                                                {selectedCertificate.level} Level
                                            </span>
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getValidityColor(selectedCertificate.validity)} bg-gray-100`}>
                                                Valid: {selectedCertificate.validity}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {selectedCertificate.description}
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Skills Covered</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {selectedCertificate.skills.map((skill, index) => (
                                                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </span>
                                            <span>Verified Certificate</span>
                                        </div>
                                        {selectedCertificate.credentialId && (
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-xs">#</span>
                                                </span>
                                                <span>ID: {selectedCertificate.credentialId}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">⏰</span>
                                            </span>
                                            <span>Issued: {selectedCertificate.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}