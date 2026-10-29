import { NavLink } from "react-router-dom";
import ProjectGallery from "../projectgallery/projectgallery";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

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
        alts: {
            mockup: string[];
            desktop: string[];
            mobile: string[];
        };
        status: string;
        intro: string;
        text: string;
    }
}

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function ProjectInfo({ selectedProject } : ProjectInfoProps) {
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const circleRef = useRef<SVGCircleElement | null>(null);
    const [isHovered, setIsHovered] = useState(false)

    useGSAP(() => {
        if (!containerRef.current) return

        gsap.to(".image-project-info",{
            yPercent: 40,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
    })

    useEffect(() => {
        const circle = circleRef.current;

        if (!circle) return;

        const length = circle.getTotalLength() + 1;

        gsap.to(circle, {
            strokeDasharray: length,
            strokeDashoffset: isHovered? length : 0,
            duration: isHovered? 0.5: 1,
            ease: "power1.inOut",
        });

        gsap.to('.button-background', {
            scale: isHovered? 1 : 0,
            duration: 0.7,
            ease: "power4.inOut",
        });
    }, [isHovered])

    return(
        <section className="flex flex-col relative z-1 bg-neutral-50" ref={sectionRef}>
            <div className="w-full relative py-50 overflow-hidden flex justify-center items-center animated-item" >
                <div className="h-full w-full overflow-hidden absolute top-0 left-0" ref={containerRef}>
                    <img src={selectedProject.images.background[1]} className="h-[140%] absolute left-0 top-[-40%] object-cover w-full image-project-info"  alt="" />
                </div>
                <div className="w-2/3 aspect-video relative bg-neutral-50">
                    <img className="w-full h-full object-cover" src={selectedProject.images.desktop[0]} alt={selectedProject.alts.desktop[0]}/>
                </div>
            </div>
            <div className="px-5 flex justify-center animated-item">
                <div className="flex flex-col gap-10 w-full bg-neutral-800 text-neutral-50 justify-between p-10 -translate-y-1/4 md:flex-row md:-translate-y-1/2 md:w-2/3 md:p-15">
                    <div className="flex flex-col gap-2">
                        <p className="tracking-wide font-light text-neutral-400">Year</p>
                        <p>{selectedProject.year}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="tracking-wide font-light text-neutral-400">Type</p>
                        <p>{selectedProject.type}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="tracking-wide font-light text-neutral-400">Status</p>
                        <p>{selectedProject.status}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-20 p-5 pb-30 items-center">
                <div className="flex flex-col gap-10 md:flex-row md:w-2/3">
                    <h3 className="font-semibold animated-item">About</h3>
                    <div className="flex flex-col gap-15">
                        <div className="flex flex-col gap-5 md:flex-row">
                            <p className="font-light leading-relaxed max-w-200 w-full animated-item">
                                {selectedProject.intro}
                            </p>
                            <p className="font-light leading-relaxed max-w-200 w-full animated-item">
                                {selectedProject.text}
                            </p>    
                        </div>    
                                  
                    </div>
                </div>
                <NavLink 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    to={selectedProject.link} 
                    target="_blank" 
                    className="uppercase py-5 px-10 rounded-full text-sm cursor-pointer border md:border-0 relative group md:w-50 md:h-50 md:flex md:items-center md:justify-center animated-item bg-neutral-50" 
                >
                    <svg viewBox="0 0 200 200" className="absolute hidden md:inline-block">
                        <circle
                            ref={circleRef}
                            cx="100"
                            cy="100"
                            r="99"
                            stroke="#171717"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>
                    <span className="absolute top-0 left-0 h-full w-full rounded-full bg-neutral-900 scale-0 button-background">
                
                    </span>
                    <span className="mix-blend-difference text-white">
                        See Project
                    </span>
                </NavLink>
            </div>
            <ProjectGallery 
                selectedProject={selectedProject}
            />
        </section>
    )
}