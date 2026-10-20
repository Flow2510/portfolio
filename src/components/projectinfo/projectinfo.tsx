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
    const titleRef = useRef(null)

    useGSAP(() => {
        if (!titleRef.current) return

        const split = SplitText.create(titleRef.current, { type: "chars", mask: "chars" });

        gsap.set(split.chars, {
            yPercent: -100
        })

        gsap.to(split.chars, {
            yPercent: 0,
            scrollTrigger:{
                trigger: titleRef.current,
                start: "top 90%",
                end: "top 60%",
            },
            stagger: 0.05,
            duration:0.5
        })
    })

    return(
        <section className="flex flex-col gap-15 relative z-1 bg-neutral-50">
            <div className="flex flex-col gap-10 p-2.5 md:p-5 py-15 lg:py-30">
                <div className="w-full h-px bg-neutral-400 lg:hidden"></div>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="uppercase tracking-wide font-light">Year</p>
                        <p>{selectedProject.year}</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <p className="uppercase tracking-wide font-light">Type</p>
                        <p>{selectedProject.type}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="uppercase tracking-wide font-light">Status</p>
                        <p>{selectedProject.status}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-light leading-relaxed max-w-200">
                        {selectedProject.intro}
                    </p>
                    <p className="font-light leading-relaxed max-w-200">
                        {selectedProject.text}
                    </p>
                </div>
                <div>
                    <NavLink to={selectedProject.link} target="_blank" className={'uppercase text-sm underline tracking-widest font-semibold group'}>
                        <HoverTranslate 
                            text="See project"
                        />
                    </NavLink>
                </div>
            </div>
            <ProjectGallery 
                selectedProject={selectedProject}
            />
        </section>
    )
}