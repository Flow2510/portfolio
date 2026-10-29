import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type ProjectCardTypes={
    readonly project: {
        name: string;
        id: string;
        year: string;
        color: string;
        link: string;
        type: string;
        videos: string[];
        images: {
            mockup: string[];
            desktop: string[];
            mobile: string[];
        };
        alts: {
            mockup: string[];
            desktop: string[];
            mobile: string[];
        };
        status: string;
        intro: string;
        text: string;
    }
    readonly navigateWithTransition: (path: string) => void
}

export default function ProjectCard({ project, navigateWithTransition } : ProjectCardTypes) {
    const containerRef = useRef<HTMLDivElement>(null)
    const words = project.name.split(" ")

    useGSAP(() => {
        if (!containerRef.current) return

        gsap.fromTo('.image-projects-card', 
            {yPercent: -20},
            {
                yPercent: 20,
                    scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
            }
        )
    }, { scope: containerRef})

    return(
        <button onClick={() => navigateWithTransition(`/projects/${project.id}`)} className="h-dvh w-full flex cursor-pointer">
            <div className="h-dvh w-full relative overflow-hidden text-neutral-50 animated-item" ref={containerRef}>
                <div className="absolute top-[-40%] h-[140%] w-full">
                    <img src={project.images.mockup[0]} className="w-full h-full object-cover image-projects-card" alt="" />
                </div>
                <div className="absolute inset-0 bg-neutral-900/40 flex justify-center items-center">
                    <div>
                        <h2 className="flex flex-col items-center">
                            <span className="flex gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 font-[antonio] text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit uppercase tracking-tighter font-bold">
                                {words.slice(0, Math.ceil(words.length / 2)).map((word, index) => (
                                    <span key={word + index} >
                                        {word}
                                    </span>
                                ))}
                            </span>
                            <span className="flex gap-2 font-[italianno] w-fit font-extralight text-6xl md:text-7xl lg:text-8xl xl:text-9xl italic">
                                {words.slice(Math.ceil(words.length / 2)).map((word, index) => (
                                    <span key={word + index}>
                                        {word}
                                    </span>
                                ))}
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-10 lg:pb-15">
                    <p className="opacity-80 lg:text-xl">
                        {project.type}
                    </p>
                </div>
            </div>
        </button>
    )
}