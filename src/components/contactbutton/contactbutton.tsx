import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type ContactButtonProps = {
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly contactModalIsOpen: boolean;
}

export default function ContactButton({ setContactModalIsOpen, contactModalIsOpen} : ContactButtonProps) {
    const circleRef = useRef<SVGCircleElement | null>(null);
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const circle = circleRef.current;

        if (!circle) return;

        const length = circle.getTotalLength() + 1;

        gsap.to(circle, {
            strokeDasharray: length,
            strokeDashoffset: isHovered? length : 0,
            duration: isHovered? 0.5: 1,
            ease: "power4.inOut",
        });

        gsap.to('.button-background', {
            scale: isHovered? 1 : 0,
            duration: 0.7,
            ease: "power4.inOut",
        });
    }, [isHovered])

    return(
        <button 
            style={{ background: "#fafafa" }}
            className="uppercase py-5 px-10 rounded-full border lg:border-0 text-sm cursor-pointer relative items-center justify-center flex group lg:absolute lg:-bottom-5 lg:-left-20 lg:w-50 lg:h-50" 
            type="button" 
            onClick={() => setContactModalIsOpen(!contactModalIsOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <svg viewBox="0 0 200 200" className="absolute hidden lg:inline-block">
                <circle
                    ref={circleRef}
                    cx="100"
                    cy="100"
                    r="99"
                    stroke="#171717"
                    strokeWidth="1"
                    fill="none"
                />
            </svg>
            <span className="absolute top-0 left-0 h-full w-full rounded-full bg-neutral-900 scale-0 button-background">

            </span>
            <span className="mix-blend-difference text-white">
                GET IN TOUCH
            </span>
        </button>
    )
}