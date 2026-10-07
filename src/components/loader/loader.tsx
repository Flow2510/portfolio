import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import projects from '../../data/projects.json'
import { useRef } from "react";

type LoaderTypes = {
    readonly isLoading: boolean;
    readonly setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    readonly isDesktop: boolean;
}

export default function Loader({ isLoading, setIsLoading, isDesktop } : LoaderTypes) {
    const items = [...projects,...projects]
    const loaderRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!isLoading) return

        const cards = gsap.utils.toArray<HTMLDivElement>('.loader-card')
        const words = gsap.utils.toArray<HTMLSpanElement>('.word')

        const COUNT = cards.length

        const getCirclePositions = (diameter: number, count = COUNT) => {
            const radius = diameter / 2
            return Array.from({ length: count }, (_, i) => {
                const angle = (i / count) * Math.PI * 2 - Math.PI / 2 // démarre en haut
                return {
                    x: Math.round(Math.cos(angle) * radius),
                    y: Math.round(Math.sin(angle) * radius),
                }
            })
        }
        const positions = getCirclePositions(isDesktop ? 700 : 250)

        gsap.set(
            cards,
            { opacity: 0, x: (i) => positions[i].x, y: (i) => positions[i].y, scale: 0.8 },
        )

        gsap.set(words, {
            opacity: 0
        })

        const tl = gsap.timeline({
            onComplete: () => setIsLoading(false)
        })

        const TURNS = 1 // nombre de tours autour du centre

        const spiral = cards.map((_, i) => ({
            t: 0,
            startAngle: Math.atan2(positions[i].y, positions[i].x), // angle de départ de la carte
            startRadius: Math.hypot(positions[i].x, positions[i].y), // distance au centre au départ
        }))

        tl.to(words, {
            opacity: 1,
            duration: 0.3,
        }, 0)

        tl.to(cards, {
            opacity: 1,
            stagger: 0.1,
            duration: 0.2
        }, 1)

        tl.to(words, {
            opacity: 0,
            duration: 0.5
        }, 2)

        tl.to(spiral, {
            t: 1,
            duration: 3,
            ease: 'power3.inOut',
            stagger: 0.05,
            onUpdate: () => {
                spiral.forEach((s, i) => {
                    const angle = s.startAngle + s.t * TURNS * Math.PI * 2
                    const radius = s.startRadius * (1 - s.t)
                    gsap.set(cards[i], {
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius - 35 * s.t, // finit à y: -35 comme ta sphère
                        scale: 0.8 + 0.1 * s.t,                 // 0.8 → 0.9
                    })
                })
            },
        }, 1 )
    }, { scope: loaderRef })

    return(
        <div className='absolute inset-0 bg-neutral-50 flex items-center justify-center overflow-hidden' ref={loaderRef}>
            <div className='relative flex justify-center items-center container'>
            <div className='absolute'>
                <h1 className='flex flex-col items-center font-[antonio] text-3xl uppercase tracking-tighter font-semibold lg:text-6xl'>
                <span className='flex gap-1.5 overflow-hidden lg:gap-2.5'>
                    <span className='word inline-block'>Florian</span>
                    <span className='word inline-block'>Sendra</span>
                </span>
                <span className='flex gap-1.5 overflow-hidden lg:gap-2.5'>
                    <span className='word inline-block'>Creative</span>
                    <span className='word inline-block'>Web</span>
                    <span className='word inline-block'>Developer</span>
                </span>
                </h1>
            </div>
            {items.map((item, index) => (
                <div className='absolute w-20 h-12 lg:w-34 lg:h-22 loader-card' key={item.id + `${index}`}>
                <img src={item.images[0]} className='w-full h-full bg-amber-200' alt="" loading='lazy'/>
                </div>
            ))}
            </div>
        </div>
    )
}