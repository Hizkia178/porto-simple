"use client"

import { useState, useEffect } from "react"
import { PanelLeftOpen, PanelLeftClose, Home, Code,  Mail, Compass, Clock,  Award } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const navigationItems = [
    { name: "Home", href: "#home", icon: Home, desc: "Welcome page" },
    { name: "Skills", href: "#skills", icon: Code, desc: "Technologies" },
    { name: "Sertificate", href: "#sertificate", icon: Award, desc: "My certifications" },
    { name: "Contact", href: "#contact", icon: Mail, desc: "Get in touch" },
]


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            const scrollPostion = window.scrollY + window.innerHeight / 2
            let currentSection = "home"


            navigationItems.forEach((item) => {
                const section = document.getElementById(item.href.substring(1))
                if (section) {
                    const offsetTop = section.offsetTop
                    const offsetBottom = offsetTop + section.offsetHeight
                    if (scrollPostion >= offsetTop && scrollPostion < offsetBottom) {
                        currentSection = item.href.substring(1)
                    }
                }
            })

            const lastSection = document.getElementById("contact");
            if (lastSection && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                currentSection = "contact"
            }

            setActiveSection(currentSection)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const NavLink = ({ item, onClick }: { item: typeof navigationItems[0], onClick?: () => void }) => {
        const Icon = item.icon
        const isActive = activeSection === item.href.substring(1)
        return (
            <a
                href={item.href}
                onClick={onClick}
                className={`flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 group ${isActive
                    ? "bg-gray-800 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-800 hover:shadow-lg hover:text-white"
                    }`}
            >

                <Icon
                    className={`w-5 h-5 transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"
                        }`}
                />


                <div className="flex flex-col leading-tight">
                    <span className="font-medium">{item.name}</span>
                    <span
                        className={`text-xs ${isActive ? "text-slate-300" : "text-slate-400 group-hover:text-slate-300"
                            }`}
                    >
                        {item.desc}
                    </span>
                </div>
            </a>
        )

    }

    return (
        <>
            <nav className="hidden lg:flex items-center justify-center fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded px-6 py-3 shadow-lg">
                    <div className="flex items-center space-x-8">
                        {navigationItems.map((item) => {
                            const Icon = item.icon
                            const isActive = activeSection === item.href.substring(1)
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-2 rounded transition-all group ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-lg'}`}
                                >
                                    <Icon className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                                    <span className="font-medium text-sm">{item.name}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </nav>


            <div className="lg:hidden fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-white/90 backdrop-blur-lg border  border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 p-2 rounded"
                >
                    <PanelLeftOpen className="h-5 w-5" />
                </button>

                <div
                    className={`fixed top-0 right-0 h-full w-65 bg-white border-l border-gray-200 p-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{ zIndex: 50 }}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                                    <Compass className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Navigation
                                    </h2>
                                    <p className="text-xs text-slate-500">Explore my portfolio</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-gray-100 p-2 rounded"
                                aria-label="Close navigation menu"
                            >
                                <PanelLeftClose className="h-5 w-5" />
                            </button>
                        </div>


                        <div className="flex-1 overflow-y-auto py-6">
                            <div className="space-y-2 px-6">
                                {navigationItems.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        item={item}
                                        onClick={() => setIsOpen(false)}
                                    />
                                ))}
                            </div>
                        </div>


                        <div className="px-6 pb-6">
                            <Separator className="mb-4" />
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="w-4 h-4 text-gray-500" />
                                    <span>Always available</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="text-gray-700">Online</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )

}