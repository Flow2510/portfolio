import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"

export default function AboutSticky() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    const [stripeWidth] = useState(() => {
        const n = 30
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
                markers: true
            }
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
            delay: 0.5,
            duration: 1
        })

        tl.to(".background-bloc", {
            xPercent: 110,
            stagger: 0.1,
            duration: 0.75
        })

        
    }, {scope: containerRef})

    return(
        <div className="relative h-[500dvh]" ref={containerRef}>
                <div className="sticky h-dvh w-full top-0">
                    <div className="absolute inset-0 flex">
                        {stripeWidth.map((width, index) => (
                            <div className="overflow-hidden h-dvh" key={index} style={{ width: `${width}%`}}>
                                <div className="h-dvh bg-neutral-900 background-bloc w-full" />
                            </div>
                        ))}
                    </div>
                    <div className="absolute h-dvh w-full flex items-center justify-center">
                        <div>
                            <h2 className="flex flex-col items-center text-neutral-50" ref={titleRef}>
                                <span className="font-[antonio] text-7xl md:text-8xl uppercase">
                                    Title Text on
                                </span>
                                <span className="font-[italianno] text-8xl md:text-9xl italic">
                                    2 Lines
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="h-dvh w-full flex items-center justify-center bg-neutral-50">
                        <div>
                            <h2 className="flex flex-col items-center">
                                <span className="font-[antonio] text-7xl md:text-8xl uppercase tracking-tighter font-bold">
                                    Contact title 
                                </span>
                                <span className="font-[italianno] text-8xl md:text-9xl italic">
                                    On 2 Lines
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
    )
}