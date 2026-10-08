import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import RotatingGallery from "../rotatinggallery/rotatinggallery"

type HeroProps = {
    readonly isDesktop: boolean
}

export default function Hero({ isDesktop } : HeroProps) {
    const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    const containerRef = useRef<HTMLDivElement>(null)
    const heroFooterRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
        }, 1000)
        
        return () => clearInterval(interval)
    }, [])

    useGSAP(() => {
        const container = containerRef.current

        if (!container) return

        gsap.fromTo(container, {
            scale: 0,
            opacity: 1
        }, {
            scale: 1,
            opacity: 0,
            duration: 1.5,
            repeat: -1
        })

        gsap.fromTo(heroFooterRef.current, {
            yPercent: 100
        },{
            yPercent: 0,
            duration: 0.3,
            delay: 0.5
        })
    })

    return (
        <section className="relative h-dvh w-full overflow-hidden pt-23 flex flex-col justify-end" id="home">
            <div className="absolute inset-0">     
                <RotatingGallery isDesktop={isDesktop}/>
            </div>
            <div className="p-2.5 flex justify-between text-[13px] leading-[90%] md:text-[15px] md:p-5" ref={heroFooterRef}>
                {isDesktop ?
                    <p className="flex gap-1.5 items-center uppercase">
                        <span>Web Developer</span>
                        <span className="h-1 w-1 bg-neutral-950 inline-block rounded-full"></span>
                        <span>Perpignan, France</span>
                        <span className="h-1 w-1 bg-neutral-950 inline-block rounded-full"></span>
                        <span>{time}</span>
                    </p>
                :
                    <p className="flex gap-1.5 items-center uppercase">
                        <span>Web Developer</span>
                        <span className="h-1 w-1 bg-neutral-950 inline-block rounded-full"></span>
                        <span>Perpignan, Fr</span>
                    </p>
                }
                <div className="uppercase flex items-center gap-1">
                    <div className="relative">
                        <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center" ref={containerRef}>
                            
                        </div>
                        <div className="h-2 w-2 bg-green-500 rounded-full absolute left-1/2 top-1/2 -translate-1/2"></div>
                    </div>
                    <p>Open to Work</p>
                </div>
            </div>
        </section>
    )
}