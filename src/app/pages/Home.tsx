"use client"

import { useState, useEffect } from "react"
import { Download, Mail, ChevronDown } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from "@/components/ui/carousel"

export function HeroSection() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const images = [
        {
            src: "/emma.jpg",
            alt: "Professional headshot 1"
        },
        {
            src: "emma.jpg",
            alt: "Professional headshot 2"
        },
        {
            src: "emma.jpg",
            alt: "Professional headshot 3"
        }
    ]

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    useEffect(() => {
        if (!api) {
            return
        }

        const interval = setInterval(() => {
            api.scrollNext()
        }, 4000)

        return () => clearInterval(interval)
    }, [api])

    return (
        <section
            id="home"
            aria-label="Home HeroSection"
            className="min-h-screen flex items-center justify-center px-6 py-10 bg-white"
        >
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                    <div className="relative">
                        <Carousel
                            setApi={setApi}
                            className="w-full max-w-sm" // perkecil juga bisa
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative">
                                            <div className="aspect-[3/4] rounded overflow-hidden shadow p-2">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </div>

                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        <div className="flex justify-center space-x-2 mt-6">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current - 1
                                        ? 'bg-slate-800 w-6'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    onClick={() => api?.scrollTo(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8 text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Hi there, My name is <span className="text-slate-800">Hizkia Siahaan</span>
                        </h1>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                        I am an Industrial Engineering student with prior experience in team management
                        and logistics within events and organizations. I possess strong coordination skills
                        in teamwork, with the ability to both lead and collaborate effectively. Proficient
                        in video editing, AutoCAD, Microsoft Office, and Python.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/resume.pdf" // taro file resume di folder public
                            download
                            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-medium px-6 py-3 rounded shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-800 font-medium px-6 py-3 rounded transition-all duration-200"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Me
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
}