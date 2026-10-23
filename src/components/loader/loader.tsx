import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type LoaderTypes = {
    readonly isLoading: boolean;
    readonly setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    readonly isTransitioning: boolean
}

export default function Loader({ isLoading, setIsLoading, isTransitioning } : LoaderTypes) {
    const loaderRef = useRef<HTMLDivElement>(null)
    const { pathname } = useLocation()

    useGSAP(() => {
        if (!loaderRef) return

        gsap.to('.background-bloc-loader', {
            yPercent: -100,
            stagger: {
                each: 0.15,
                from: "end"
            },
            ease: "power4.inOut",
            duration: 0.6,
            onComplete: () => setIsLoading(!isLoading)
        })
    }, { scope: loaderRef, dependencies: [pathname] })

    useEffect(() => {
        gsap.to('.background-bloc-loader', {
            yPercent: isTransitioning? 0 : -100,
            stagger: {
                each: 0.15,
                from: isTransitioning? "start" : "end"
            },
            ease: "power4.inOut",
            duration: 1,
        })
    }, [isTransitioning])

    return(
        <div className='fixed w-full h-full overflow-hidden pointer-events-none z-100' ref={loaderRef}>
            <div className="absolute inset-0 bg-neutral-500 background-bloc-loader pointer-events-auto">

            </div>
            <div className="absolute inset-0 bg-neutral-700 background-bloc-loader pointer-events-auto">

            </div>
            <div className="absolute inset-0 bg-neutral-900 background-bloc-loader pointer-events-auto">

            </div>
        </div>
    )
}