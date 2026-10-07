import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

type AnimatedLinkTypes={
    readonly direction: string;
    readonly  list: {
        name: string;
        link: string;
    }[]
    readonly title: string;
    readonly column: number;
    readonly row: number;
}

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedLink({ direction, list, title, column, row } : AnimatedLinkTypes) {
    const containerRef = useRef(null)

    useGSAP(() => {
        const lines = gsap.utils.toArray<HTMLElement>(['.item', '.title'])

        if (!lines) return

        lines.forEach((line) => {
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
        })
    }, { scope: containerRef })

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
            <h2 className="text-[64px] uppercase font-humane font-extrabold leading-[100%] title">
                {title}
            </h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index + item.name} className="item">
                        <a href={item.link} target="_blank" >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}