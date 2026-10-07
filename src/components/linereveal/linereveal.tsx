import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

type LineRevealProps = {
    readonly text: string;
}

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function LineReveal({ text } : LineRevealProps){
    const textRef = useRef<HTMLSpanElement>(null)

    useGSAP(() => {
        const split = SplitText.create(textRef.current, { type: "lines", mask: "lines" });

        gsap.set(split.lines, {
            yPercent: 100,
        })
        
        gsap.to(split.lines, {
            yPercent: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: textRef.current,
                start: "top bottom",
                end: "top 30%",
                scrub: true,
                once: true
            }
        })
    })

    return(
        <span className="inline-block" ref={textRef}>
            {text}
        </span>
    )
}