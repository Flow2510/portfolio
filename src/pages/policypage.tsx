import { useEffect, useRef, useState } from "react";
import HoverTranslate from "../components/hovertranslate/hovertranslate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

type PolicyPageProps = {
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly contactModalIsOpen: boolean;
    readonly navigateWithTransition: (path: string) => void
}

export default function PolicyPage({ setContactModalIsOpen, contactModalIsOpen, navigateWithTransition } : PolicyPageProps){
    const containerRef = useRef<HTMLDivElement>(null)
    const mainRef = useRef<HTMLElement>(null)
    const circleRef = useRef<SVGCircleElement | null>(null);
    const [isHovered, setIsHovered] = useState(false)
    const { t, i18n } =  useTranslation();

    const backToTop = () => {
        window.scrollTo(0, 0)
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: "top top",
                scrub: true
            }
        })

        tl.fromTo('.title-line-top', {
            x: -100
        }, {
            x:0
        })

        tl.fromTo('.title-line-bottom', {
            x: 100
        }, {
            x:0
        }, 0)
    }, {scope: mainRef})

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
    }, [isHovered])
    
    return(
        <main className="flex flex-col" ref={mainRef}>
            <section className="relative z-1">
                <div className="h-[60dvh] w-full flex flex-col justify-end pb-15 bg-neutral-900 text-neutral-50">
                    <div className="absolute w-full h-full top-1/2 left-1/2 -translate-1/2 flex items-center max-w-150 justify-center">
                            <img
                                src="/images/background.webp"
                                className="h-full w-full object-cover grayscale-100 opacity-30 fade-image"
                                alt=""
                            />
                        </div>
                    <h2 className="flex flex-col items-center">
                        <span className="flex gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 font-[antonio] text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit uppercase tracking-tighter font-bold animated-item pr-10 animated-item">
                            {t("policy.title.line1")}
                        </span>
                        <span className="flex gap-2 font-[italianno] w-fit font-extralight italic text-6xl md:text-7xl lg:text-8xl xl:text-9xl animated-item pl-10 animated-item">
                            {t("policy.title.line2")}
                        </span>
                    </h2>
                </div>
            </section>
            <section className="bg-neutral-50 w-full p-2.5 md:p-5 flex flex-col gap-5 py-15 md:py-25 relative z-1">                
                <div className="flex flex-col gap-5 relative md:flex-row md:gap-25">                    
                    <div className="flex flex-col gap-5 max-w-250 text-sm">
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">1. {t("policy.part1.title")}</h3>
                            <div>
                                <p>
                                    {t("policy.part1.text1")}: <a href="mailto:sendra.florian@gmail.com" target="_blank" className="underline">sendra.florian@gmail.com</a>.
                                </p>
                                <p>
                                    {t("policy.part1.text2")}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">2. {t("policy.part2.title")}</h3>
                            <div>
                                <p>
                                    {t("policy.part2.text1")}
                                </p>
                                <p>
                                    {t("policy.part2.text2")}
                                </p>
                                <p>
                                    {t("policy.part2.text3")}
                                </p>
                                <p>
                                    {t("policy.part2.text4")}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">3. {t("policy.part3.title")}</h3>
                            <div>
                                <p>
                                    {t("policy.part3.text1")}
                                </p>
                                <p>
                                    {t("policy.part3.text2")}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">4. {t("policy.part4.title")}</h3>
                            <div>
                                <p>
                                    {t("policy.part4.text1")}
                                </p>
                                <p>
                                    {t("policy.part4.text2")}
                                </p>
                                <p>
                                    {t("policy.part4.text3")}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">5. {t("policy.part5.title")}</h3>
                            <div>
                                <p>
                                    {t("policy.part5.text1")}
                                </p>
                                <p>
                                    {t("policy.part5.text2")}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">6. {t("policy.part6.title")}</h3>
                            <p>
                                {t("policy.part6.text1")}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">7. {t("policy.part7.title")}</h3>
                            <div>
                                <p>
                                    {t("policy.part7.text1")}
                                </p>
                                <p>
                                    {t("policy.part7.text2")}
                                </p>
                                <p>
                                    {t("policy.part7.text3")}
                                </p>
                                <p>
                                    {t("policy.part7.text4")}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">8. {t("policy.part8.title")}</h3>
                            <div>
                                <p>
                                    {t("policy.part8.text1")}
                                </p>
                                <p>
                                    {t("policy.part8.text2")}
                                </p>
                                <p>
                                    {t("policy.part8.text3")}: <a href="mailto:sendra.florian@gmail.com" target="_blank" className="underline">sendra.florian@gmail.com</a>.
                                </p>
                                <p>
                                   {t("policy.part8.text4")}:
                                    {" "}
                                    <a
                                        href="https://www.cnil.fr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline"
                                    >
                                        https://www.cnil.fr/
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">9. {t("policy.part9.title")}</h3>
                            <p>
                                {t("policy.part9.text1")}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">10. {t("policy.part10.title")}</h3>
                            <p>
                                {t("policy.part10.text1")}
                            </p>
                        </div>

                        <h3 className="text-sm pt-15">
                            {t("policy.update")}: {i18n.language === "en" ? "October 24, 2026" : "24 Octobre 2026"}
                        </h3>
                    </div>
                </div>                
            </section>
            <section className="">
                <div className="h-dvh w-full" ref={containerRef}>

                </div>
                <div className="h-dvh w-full flex items-center justify-center bg-neutral-900 text-neutral-50 contact-container fixed top-0 left-0 z-0">
                    <div className="absolute w-full h-full top-1/2 left-1/2 -translate-1/2 flex items-center max-w-150 justify-center">
                        <img
                            src="/images/background.webp"
                            className="h-full w-full object-cover grayscale-100 opacity-30 fade-image"
                            alt=""
                        />
                        </div>
                    <div className="flex flex-col items-center gap-10 relative">
                        <h2 className="flex flex-col items-center animated-item">
                            <span className="font-[antonio] text-7xl md:text-8xl lg:text-9xl xl:text-[150px] uppercase tracking-tight font-bold pr-10 md:pr-20 lg:pr-30 xl:pr-50 title-line-top">
                                LET'S CREATE
                            </span>
                            <span className="font-[italianno] text-8xl md:text-9xl italic -mb-5 lg:text-9xl xl:text-[180px]">
                                Something
                            </span>
                            <span className="font-[antonio] text-7xl md:text-8xl uppercase tracking-tight font-bold lg:text-9xl xl:text-[150px] pl-10 md:pl-20 lg:pl-30 xl:pl-50 title-line-bottom">
                                TOGETHER.
                            </span>
                        </h2>
                        <button 
                            className="uppercase py-5 px-10 rounded-full flex justify-center items-center border lg:border-0 text-sm cursor-pointer relative group lg:absolute lg:-bottom-5 lg:-left-20 lg:w-50 lg:h-50 animated-item" 
                            type="button" 
                            onClick={() => setContactModalIsOpen(!contactModalIsOpen)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <svg viewBox="0 0 200 200" className="absolute hidden lg:inline-block" aria-hidden>
                                <circle
                                    ref={circleRef}
                                    cx="100"
                                    cy="100"
                                    r="99"
                                    stroke="#fafafa"
                                    strokeWidth="1"
                                    fill="none"
                                />
                            </svg>
                            <span className="absolute top-0 left-0 h-full w-full rounded-full bg-neutral-50 scale-0 duration-300 group-hover:scale-100">
                
                            </span>
                            <span className="mix-blend-difference text-white">
                                GET IN TOUCH
                            </span>
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-2.5 md:p-5 flex flex-col gap-2.5">
                        <div className="flex justify-between items-end">
                            <div>
                                <button 
                                    type="button" 
                                    onClick={() => navigateWithTransition('/projects')} 
                                    className='flex items-center gap-2.5 animated-item'
                                >
                                    <div className='grid grid-cols-2 h-2.5 w-2.5 gap-0.5'>
                                        <div className='w-full h-full bg-neutral-50'></div>
                                        <div className='w-full h-full bg-neutral-50'></div>
                                        <div className='w-full h-full bg-neutral-50'></div>
                                        <div className='w-full h-full bg-neutral-50'></div>
                                    </div>
                                    <p className='text-sm'>
                                        <HoverTranslate
                                            text='All Projects'
                                        />
                                    </p>
                                </button>
                            </div>
                            <button 
                                type='button' 
                                onClick={backToTop} 
                                className='bg-neutral-50 rounded-full w-12 h-12 flex text-xl items-center justify-center text-neutral-900 cursor-pointer hover:scale-[0.9] duration-300 animated-item'
                            >
                                <span>
                                    ↑
                                </span>
                            </button>
                        </div>
                    </div>                        
                </div>
            </section>
        </main>
    )
}