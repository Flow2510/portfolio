import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.fromTo('.right-animation-top', 
            {
                xPercent: -20
            },
            {
                xPercent: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: 'bottom top',
                    scrub: true
                }
            }
        )
        gsap.fromTo('.right-animation-bottom', 
            {
                xPercent: 20
            },
            {
                xPercent: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: 'bottom top',
                    scrub: true
                }
            }
        )
        gsap.fromTo('.left-animation-top', 
            {
                xPercent: 15
            },
            {
                xPercent: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: 'bottom top',
                    scrub: true
                }
            }
        )
        gsap.fromTo('.left-animation-bottom', 
            {
                xPercent: -10
            },
            {
                xPercent: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: 'bottom top',
                    scrub: true
                }
            }
        )
    }, {scope: containerRef})

    return(
        <section className="p-2.5 md:p-5">
            <div className="flex items-center justify-center py-20 md:py-52 lg:py-30 xl:py-35 overflow-hidden w-full" ref={containerRef}>
                <h2 className="flex flex-col leading-[110%] items-center animated-item">
                    <span className="font-[inter] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold -mb-2.5 uppercase tracking-tight right-animation-top">
                        Turning
                    </span>
                    <span className="font-[italianno] text-6xl -mb-5 md:text-7xl lg:text-8xl xl:text-9xl left-animation-top italic">
                        Creative Visions
                    </span>
                    <span className="font-[inter] text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl -mb-2.5 uppercase tracking-tight">
                        into 
                    </span>
                    <span className="font-[inter] text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl -mb-2.5 uppercase tracking-tight right-animation-bottom">
                        immersive
                    </span>
                    <span className="font-[italianno] text-6xl -mb-5 md:text-7xl lg:text-8xl xl:text-9xl left-animation-bottom italic">
                        Digital Experiences
                    </span>
                </h2>
            </div>
            <div className="w-full p-2.5 md:p-5 flex flex-col gap-5 max-w-150 m-auto">
                <p className="animated-item">
                    I turn designs into responsive, high-performance
                    interfaces using React and TypeScript. I care deeply
                    about code quality, accessibility, and smooth user
                    interactions that elevate the overall experience
                </p>
                <p className="pb-15 animated-item">
                    To become a more complete developer, I'm currently
                    expanding into the back-end with Node.js, Express,
                    and Supabase. Building personal projects helps me
                    understand the full picture, from database design to
                    the user interface.
                </p>
            </div>
        </section>
    )
}