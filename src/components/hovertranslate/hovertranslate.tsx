import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type HoverTranslateProps = {
    readonly text: string;
}

export default function HoverTranslate({ text }: HoverTranslateProps) {
    const letters = text.split("")
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const lettersTop = containerRef.current?.querySelectorAll(".letter-top")
        const lettersBottom = containerRef.current?.querySelectorAll(".letter-bottom")
        if (!lettersTop || !lettersBottom) return
        
        gsap.to(lettersTop, {
            yPercent: isHovered ? -100 : 0,
            duration: 0.2,
            ease: "power4.inOut",
            stagger: 0.05
        })

        gsap.to(lettersBottom, {
            yPercent: isHovered ? -100 : 0,
            duration: 0.2,
            ease: "power4.inOut",
            stagger: 0.05
        })
    })

    return (
        <span className="flex relative overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} ref={containerRef}>
            <span className="overflow-hidden">
                {letters.map((letter, i) => (
                    <span key={letter + i} className="inline-block duration-200 letter-top">
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </span>
            <span className="absolute top-full">
                {letters.map((letter, i) => (
                    <span key={letter + i} className="inline-block duration-200 letter-bottom">
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </span>
        </span>
    )
}