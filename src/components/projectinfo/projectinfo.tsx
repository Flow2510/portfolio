import { NavLink } from "react-router-dom";
import ProjectGallery from "../projectgallery/projectgallery";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import HoverTranslate from "../hovertranslate/hovertranslate";

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

    return(
        <section className="flex flex-col relative z-1 bg-neutral-50" ref={sectionRef}>
            <div className="w-full relative py-50 overflow-hidden flex justify-center items-center" >
                <div className="h-full w-full overflow-hidden absolute top-0 left-0" ref={containerRef}>
                    <img src={selectedProject.images.background[1]} className="h-[140%] absolute left-0 top-[-40%] object-cover w-full image-project-info"  alt="" />
                </div>
                <div className="w-2/3 aspect-video relative bg-neutral-50">
                    <img className="w-full h-full object-cover" src={selectedProject.images.desktop[0]} alt={selectedProject.alts.desktop[0]}/>
                </div>
            </div>
            <div className="px-5 flex justify-center">
                <div className="flex flex-col gap-10 w-full bg-neutral-800 text-neutral-50 justify-between p-10 -translate-y-1/4 md:flex-row md:-translate-y-1/2 md:w-2/3 md:p-15">
                    <div className="flex flex-col gap-2">
                        <p className="tracking-wide font-light text-neutral-400">Status</p>
                        <p>{selectedProject.status}</p>
                    </div>
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
                    <h3 className="font-semibold">About</h3>
                    <div className="flex flex-col gap-15">
                        <div className="flex flex-col gap-5 md:flex-row">
                            <p className="font-light leading-relaxed max-w-200 w-full">
                                {selectedProject.intro}
                            </p>
                            <p className="font-light leading-relaxed max-w-200 w-full">
                                {selectedProject.text}
                            </p>    
                        </div>    
                                  
                    </div>
                </div>
                <NavLink to={selectedProject.link} target="_blank" className={'uppercase text-sm underline tracking-widest font-semibold group'}>
                    <HoverTranslate 
                        text="See project"
                    />
                </NavLink> 
            </div>
            <ProjectGallery 
                selectedProject={selectedProject}
            />
        </section>
    )
}