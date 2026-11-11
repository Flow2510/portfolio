import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { t } = useTranslation();

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
        <section className="p-2.5 md:p-5 flex flex-col gap-10 relative">
            <div className="absolute w-full h-full top-1/2 left-1/2 -translate-1/2 flex items-center max-w-150 justify-center">
                <img
                    src="/images/background.webp"
                    className="h-full w-full object-cover grayscale-100 opacity-30 fade-image invert-100"
                    alt=""
                />
            </div>
            <div className="flex items-center justify-center py-20 md:py-52 lg:py-30 xl:py-35 overflow-hidden w-full" ref={containerRef}>
                <h2 className="flex flex-col leading-[110%] items-center animated-item">
                    <span className="font-[inter] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold -mb-2.5 uppercase tracking-tight right-animation-top">
                        {t("about.info.title.line1")}
                    </span>
                    <span className="font-[italianno] text-6xl -mb-5 md:text-7xl lg:text-8xl xl:text-9xl left-animation-top italic">
                        {t("about.info.title.line2")}
                    </span>
                    <span className="font-[inter] text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl -mb-2.5 uppercase tracking-tight">
                        {t("about.info.title.line3")}
                    </span>
                    <span className="font-[inter] text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl -mb-2.5 uppercase tracking-tight right-animation-bottom">
                        {t("about.info.title.line4")}
                    </span>
                    <span className="font-[italianno] text-6xl -mb-5 md:text-7xl lg:text-8xl xl:text-9xl left-animation-bottom italic">
                        {t("about.info.title.line5")}
                    </span>
                </h2>
            </div>
            <div className="w-full p-2.5 md:p-5 flex flex-col gap-5 max-w-150 m-auto">
                <h3 className="font-[italianno] text-4xl animated-item">01 - {t("about.info.about.title")}</h3>
                <p className="animated-item text-neutral-500">
                    {t("about.info.about.text1")}
                </p>
                <p className="animated-item text-neutral-500">
                    {t("about.info.about.text2")}
                </p>
                <p className="animated-item text-neutral-500">
                    {t("about.info.about.text3")}
                </p>                
            </div>
            <div className="w-full p-2.5 md:p-5 flex flex-col gap-5 max-w-150 m-auto pb-15 md:pb-20 lg:pb-25">
                <h3 className="font-[italianno] text-4xl animated-item">02 - {t("about.info.stack.title")}</h3>
                <p className="text-neutral-500 animated-item">
                    React · TypeScript ·  Tailwind CSS · GSAP · Motion
                </p>
            </div>
        </section>
    )
}