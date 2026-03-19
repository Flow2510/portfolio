import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function ScrambleText({ text, titleClass }){
    const el = useRef(null);

    useEffect(() => {
        gsap.to(el.current, {
            duration: 0.8,
            scrambleText: {
                text: text,
                chars: '0123456789!@#$%^&*()-_=+[]{};:\'",.<>/?\\|~`',
                revealDelay: 0.2,
                speed: 0.2,
                scrambleColor: "#ff0000"
            },
            ease: "power2.inOut"
        });
    }, [text]);

    return(
        <h2 ref={el} className={titleClass}>
            {" ".repeat(text.length)}
        </h2>
    )
}