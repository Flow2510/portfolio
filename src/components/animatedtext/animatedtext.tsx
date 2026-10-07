import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

type AnimatedTypes={
    readonly direction: string;
    readonly text: string;
    readonly column: number;
    readonly row: number;
}

export default function AnimatedText({ direction, text, column, row } : AnimatedTypes){
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        SplitText.create(".title, .text", {
            type: "lines",
            autoSplit: true,
            onSplit(self) {
            return self.lines.map((line) =>
                gsap
                .timeline({
                    scrollTrigger: {
                    trigger: line,
                    start: "top 65%",
                    end: "bottom 30%",
                    scrub: true,
                    },
                })
                .to(line, { x: direction === 'left' ? -80 : 80 })
                .to(line, { x: 0 })
            );
            },
        });
    }, { scope: containerRef });

    return(
        <div 
            className="w-full flex flex-col gap-5 max-w-100" 
            ref={containerRef} 
            style={{ 
                gridColumn: column, 
                gridRow: row, 
                textAlign: direction === "left" ? "right" : "left", 
                justifySelf: direction === "left" ? "end" : "start"
            }}
        >
            <p className="text">
                {text}
            </p>
        </div>
    )
}