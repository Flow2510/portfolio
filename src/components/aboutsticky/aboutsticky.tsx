import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import HoverTranslate from "../hovertranslate/hovertranslate";

type AboutStickyTypes = {
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly contactModalIsOpen: boolean;
    readonly navigateWithTransition: (path: string) => void
}

export default function AboutSticky({ contactModalIsOpen, setContactModalIsOpen, navigateWithTransition } : AboutStickyTypes) {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    const [stripeWidth] = useState(() => {
        const n = 20
        const unit = 100 / (n * (n + 1) / 2)
        return Array.from({ length: n }, (_, i) => unit * (i + 1))
    })

    useGSAP(() => {
        if (!titleRef.current || !containerRef.current) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom bottom",
                scrub: true,
            }
        })

        const tlIndex = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "75% bottom",
                scrub: true,
            }
        })

        tlIndex.to('.first-index', {
            yPercent: 100
        })

        tlIndex.to('.second-index', {
            yPercent: 100
        })

        tl.fromTo(titleRef.current, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        })

        tl.to(titleRef.current, {
            opacity: 0,
            y: -50,
            duration: 1
        }, "+=1.5")

        tl.fromTo('.second-title', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        })

        tl.to('.second-title', {
            opacity: 0,
            y: -50,
            duration: 1
        }, "+=1.5")

        tl.to(".background-bloc", {
            scaleX: 0,
            stagger: 0.1,
            duration: 0.75,
        })

        tl.to(['.title-container', ".stripes-container"], {
            pointerEvents: "none",
            duration: 0
        })
    }, {scope: containerRef})

    const backToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div className="relative h-[500dvh]" ref={containerRef}>
                <div className="sticky h-dvh w-full top-0 ">
                    <div className="absolute inset-0 flex z-1 stripes-container overflow-hidden">
                        {stripeWidth.map((width, index) => (
                            <div className="h-dvh shrink-0 scale-x-[1.5]" key={`${width}` + `${index}`} style={{ width: `${width}%` }}>
                                <div className="h-dvh bg-neutral-900 background-bloc w-full" />
                            </div>
                        ))}
                    </div>
                    <div className="absolute h-dvh w-full flex items-center justify-center z-2 title-container">
                        <div className="relative flex items-center justify-center">
                            <h2 className="flex flex-col items-center text-neutral-50" ref={titleRef}>
                                <span className="font-[antonio] text-7xl md:text-8xl uppercase pr-10">
                                    BEYOND THE
                                </span>
                                <span className="font-[italianno] text-8xl md:text-9xl italic pl-10">
                                    Ordinary
                                </span>                                
                            </h2>
                            <h2 className="absolute flex flex-col items-center text-neutral-50 text-center second-title">
                                    <span className="font-[antonio] text-7xl md:text-8xl uppercase text-nowrap  pr-10">
                                        THINK IT. 
                                    </span>
                                    <span className="font-[italianno] text-8xl md:text-9xl italic pl-10">
                                        Build it.
                                    </span>
                                </h2>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 p-5 flex flex-col gap-5">
                            <div className="w-px h-15 bg-neutral-50/50 overflow-hidden">
                                <div className="h-full w-full bg-neutral-50 -translate-y-full first-index"></div>
                            </div>
                            <div className="w-px h-15 bg-neutral-50/50 overflow-hidden">
                                <div className="h-full w-full bg-neutral-50 -translate-y-full second-index"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-dvh w-full flex items-center justify-center bg-neutral-50 relative contact-container">
                        <div className="flex flex-col items-center gap-10 relative">
                            <h2 className="flex flex-col items-center">
                                <span className="font-[antonio] text-7xl md:text-8xl lg:text-9xl xl:text-[150px] uppercase tracking-tight font-bold pr-10 md:pr-20 lg:pr-30 xl:pr-50">
                                    LET'S CREATE
                                </span>
                                <span className="font-[italianno] text-8xl md:text-9xl italic -mb-5 lg:text-9xl xl:text-[180px]">
                                    Something
                                </span>
                                <span className="font-[antonio] text-7xl md:text-8xl uppercase tracking-tight font-bold lg:text-9xl xl:text-[150px] pl-10 md:pl-20 lg:pl-30 xl:pl-50">
                                    TOGETHER.
                                </span>
                            </h2>
                            <button className="uppercase py-5 px-10 rounded-full border text-sm cursor-pointer relative group lg:absolute lg:-bottom-5 lg:-left-20 lg:w-50 lg:h-50" type="button" onClick={() => setContactModalIsOpen(!contactModalIsOpen)}>
                                <span className="absolute top-0 left-0 h-full w-full rounded-full bg-neutral-900 scale-0 duration-300 group-hover:scale-100">

                                </span>
                                <span className="mix-blend-difference text-white">
                                    GET IN TOUCH
                                </span>
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-2.5 md:p-5 flex flex-col gap-2.5">
                            <div className="flex justify-between items-end">
                                <div>
                                    <button type="button" onClick={() => navigateWithTransition('/projects')} className='flex items-center gap-2.5'>
                                        <div className='grid grid-cols-2 h-2.5 w-2.5 gap-0.5'>
                                            <div className='w-full h-full bg-neutral-900'></div>
                                            <div className='w-full h-full bg-neutral-900'></div>
                                            <div className='w-full h-full bg-neutral-900'></div>
                                            <div className='w-full h-full bg-neutral-900'></div>
                                        </div>
                                        <p className='text-sm'>
                                            <HoverTranslate
                                                text='All Projects'
                                            />
                                        </p>
                                    </button>
                                </div>
                                <button type='button' onClick={backToTop} className='bg-neutral-900 rounded-full w-12 h-12 flex text-xl items-center justify-center text-neutral-50 cursor-pointer hover:scale-[0.9] duration-300'>
                                    <span>
                                        ↑
                                    </span>
                                </button>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
    )
}