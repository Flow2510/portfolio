import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import RotatingGallery from "../rotatinggallery/rotatinggallery"
import { useTranslation } from "react-i18next"

type HeroProps = {
    readonly isDesktop: boolean;
    readonly navigateWithTransition: (path: string) => void
}

export default function Hero({ isDesktop, navigateWithTransition } : HeroProps) {
    const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    const containerRef = useRef<HTMLDivElement>(null)
    const { t } = useTranslation()

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
    })

    return (
        <section className="relative h-dvh w-full overflow-hidden pt-23 flex flex-col justify-end" id="home">
            <div className="absolute w-full h-full top-1/2 left-1/2 -translate-1/2 flex items-center max-w-150 justify-center">
                <img
                    src="/images/background.png"
                    className="h-full w-full object-cover grayscale-100 opacity-30 fade-image invert-100"
                    alt=""
                />
            </div>
            <div className="absolute inset-0 animated-item">
                <RotatingGallery isDesktop={isDesktop} navigateWithTransition={navigateWithTransition}/>
            </div>
            <div className="p-2.5 flex justify-between text-[12px] leading-[90%] md:text-[15px] md:p-5">
                {isDesktop ?
                    <p className="flex gap-1.5 items-center uppercase animated-item">
                        <span>{t('hero.developer')}</span>
                        <span className="h-1 w-1 bg-neutral-950 inline-block rounded-full"></span>
                        <span>Perpignan, France</span>
                        <span className="h-1 w-1 bg-neutral-950 inline-block rounded-full"></span>
                        <span>{time}</span>
                    </p>
                :
                    <p className="flex gap-1.5 items-center uppercase animated-item">
                        <span>{t('hero.developer')}</span>
                        <span className="h-1 w-1 bg-neutral-950 inline-block rounded-full"></span>
                        <span>Perpignan, Fr</span>
                    </p>
                }
                <div className="uppercase flex items-center gap-1 animated-item">                    
                    <div className="relative">
                        <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center" ref={containerRef}>
                            
                        </div>
                        <div className="h-2 w-2 bg-green-500 rounded-full absolute left-1/2 top-1/2 -translate-1/2"></div>
                    </div>
                    <p>{t('hero.opportunities')}</p>
                </div>
            </div>
        </section>
    )
}