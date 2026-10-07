import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { useRef } from "react";

type ScrambleProps = {
    readonly title: string;
}

gsap.registerPlugin(ScrambleTextPlugin)

export default function ScrambleText({ title } : ScrambleProps) {
    const textRef = useRef<HTMLSpanElement>(null)

    useGSAP(() => {
        gsap.to(textRef.current, {
            duration: 1,
            scrambleText: {
                text: title,
                chars: String.raw`!<>-_\/[]{}—=+*^?#$%&@0123456789abcdefghijklmnopqrstuvwxyz`,

            },
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 75%",
                once: true,
            },
        })
    })

    return(
        <span ref={textRef} className="inline-block">
            {title}
        </span>
    )
}