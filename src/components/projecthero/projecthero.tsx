import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

type ProjectInfoProps = {
    readonly selectedProject: {
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
            background: string[];
        };
        status: string;
        intro: string;
        text: string;
    }
}

gsap.registerPlugin(ScrollTrigger)

export default function ProjectHero({ selectedProject } : ProjectInfoProps) {
    const words = selectedProject.name.split(" ")
    const containerRef = useRef<HTMLDivElement>(null)
    
    useGSAP(() => {
        if (!containerRef.current ) return

        gsap.to('.image-project-hero', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            scale: 1.5
        })
    })

    return(
        <section className="relative z-1 bg-neutral-50 lg:flex">
            <div className="h-[60dvh] lg:h-dvh lg:w-full flex flex-col justify-end pb-15">
                <h2 className="flex flex-col items-center">
                    <span className="flex gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 font-[antonio] text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit uppercase tracking-tighter font-bold">
                        {words.slice(0, Math.ceil(words.length / 2)).map((word, index) => (
                            <span key={word + index} >
                                {word}
                            </span>
                        ))}
                    </span>
                    <span className="flex gap-2 font-[italianno] w-fit font-extralight italic text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                        {words.slice(Math.ceil(words.length / 2)).map((word, index) => (
                            <span key={word + index}>
                                {word}
                            </span>
                        ))}
                    </span>
                </h2>
            </div>
            <div className="h-dvh w-full overflow-hidden hidden lg:flex" ref={containerRef}>
                <div className="w-full h-full">
                    <img src={selectedProject.images.mockup[0]} className="w-full h-full object-cover image-project-hero" alt="" />
                </div>
            </div>
        </section>
    )
}