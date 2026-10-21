import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

type ProjectGalleryProps = {
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

gsap.registerPlugin(ScrollTrigger)

export default function ProjectGallery({ selectedProject } : ProjectGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageContainer1Ref = useRef<HTMLDivElement>(null)
    const imageContainer2Ref = useRef<HTMLDivElement>(null)
    const image1Ref = useRef<HTMLImageElement>(null)
    const image2Ref = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        if (!imageContainer1Ref.current || !imageContainer2Ref.current) return

        gsap.set(['.mobile-image-gallery'], {
            scale: 0.7
        })

        gsap.set(['.mobile-image-left'], {
            x: -30
        })

        gsap.set(['.mobile-image-right'], {
            x: 30
        })

        gsap.set('.video-up', {
            yPercent: 15
        })

        gsap.set('.video-down', {
            yPercent: -15
        })

        gsap.to(image1Ref.current, {
            scrollTrigger: {
                trigger: imageContainer1Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            yPercent: 40,
        })

        gsap.to('.video-up', {
            scrollTrigger: {
                trigger: '.video-up',
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            xPercent: 20
        })

        gsap.to('.video-down', {
            scrollTrigger: {
                trigger: '.video-down',
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            xPercent: -20
        })

        gsap.to(image2Ref.current, {
            scrollTrigger: {
                trigger: imageContainer2Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            yPercent: 40,
        })

        

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        tl.to('.mobile-image-center', {
            scale: 1
        }, 0)

        tl.to('.mobile-image-left', {
            x: 30
        }, 0)

        tl.to('.mobile-image-right', {
            x: -30
        }, 0)
    }, { scope: containerRef })

    return(
        <div className="flex flex-col gap-10 items-center relative pb-25" ref={containerRef}>
            <div className="w-full relative py-50 overflow-hidden flex justify-center items-center" ref={imageContainer1Ref}>
                <div className="h-full w-full overflow-hidden absolute top-0 left-0" >
                    <img src={selectedProject.images.background[0]} className="h-[140%] absolute left-0 top-[-40%] object-cover w-full" ref={image1Ref}  alt="" />
                </div>
                <div className="w-2/3 aspect-video relative bg-neutral-50">
                    <img className="w-full h-full object-cover" src={selectedProject.images.desktop[1]} alt={selectedProject.alts.desktop[0]}/>
                </div>
            </div>
            <div className="w-full overflow-hidden flex gap-5 max-w-200 m-auto p-2.5 md:p-5" ref={containerRef}>
                <div className="bg-neutral-500 w-full aspect-1/2 mobile-image-left mobile-image-gallery border">
                    <img src={selectedProject.images.mobile[0]} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="bg-neutral-700 w-full aspect-1/2 mobile-image-center mobile-image-gallery border">
                    <img src={selectedProject.images.mobile[1]} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="bg-neutral-500 w-full aspect-1/2 mobile-image-right mobile-image-gallery border">
                    <img src={selectedProject.images.mobile[2]} className="w-full h-full object-cover" alt="" />
                </div>
            </div>
            <div className="h-dvh w-full relative overflow-hidden" ref={imageContainer2Ref}>
                <div className="h-full w-full overflow-hidden relative" >
                    <img src={selectedProject.images.mockup[1]} className="h-[140%] absolute left-0 top-[-40%] object-cover w-full" ref={image2Ref} alt="" />
                </div>
            </div>  
            <div className="w-full flex flex-col p-2.5 md:p-5 gap-5 md:gap-10 items-center">
                <div className="w-2/3 aspect-video overflow-hidden border max-w-350 video-up">
                    <video src={selectedProject.videos[0]} className="w-full h-full object-cover" autoPlay muted loop></video>
                </div>
                <div className="w-2/3 aspect-video overflow-hidde border max-w-350 video-down">
                    <video src={selectedProject.videos[1]} className="w-full h-full object-cover" autoPlay muted loop></video>
                </div>
            </div>   
        </div>
    )
}