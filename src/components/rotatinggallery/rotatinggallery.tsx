import { useRef } from "react"
import projects from '../../data/projects.json'
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import InertiaPlugin from "gsap/InertiaPlugin"
import { useGSAP } from "@gsap/react"
import { NavLink } from "react-router-dom"

gsap.registerPlugin(Draggable, InertiaPlugin)

type RotatingGalleryProps = {
    readonly isDesktop: boolean;
}

export default function RotatingGallery({ isDesktop } : RotatingGalleryProps ){
    const dragProxyRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const items = [...projects, ...projects, ...projects]

    useGSAP(() => {
        const cards = cardsRef.current
        const total = cards.length

        const Rx = isDesktop ? 300 : 140;
        const Ry = isDesktop ? 300 : 140;
        const Rz = 260;

        const goldenAngle = Math.PI * (3 - Math.sqrt(5))

        const points = cards.map((_, i) => {
            const y0 = 1 - (2 * i + 1) / total;
            const r = Math.sqrt(Math.max(0, 1 - y0 * y0))
            const theta0 = i * goldenAngle
            return { x0: Math.cos(theta0) * r, y0, z0: Math.sin(theta0) * r }
        })

        const target = { yaw: 0, pitch: 0 }
        const current = { yaw: 0, pitch: 0 }
        const SMOOTHING = 0.1;

        // Multiplicateur de rayon : 0 = tout au centre, 1 = sphère complète
        const intro = { k: 0 }

        const updateGalleryPositions = () => {
            const yawRad = (current.yaw * Math.PI) / 180;
            const pitchRad = (current.pitch * Math.PI) / 180;
            const cosYaw = Math.cos(yawRad)
            const sinYaw = Math.sin(yawRad)
            const cosPitch = Math.cos(pitchRad)
            const sinPitch = Math.sin(pitchRad)

            cards.forEach((card, index) => {
                if (!card) return;
                const { x0, y0, z0 } = points[index]

                const x1 = x0 * cosYaw + z0 * sinYaw
                const z1 = -x0 * sinYaw + z0 * cosYaw
                const y1 = y0

                const y2 = y1 * cosPitch - z1 * sinPitch;
                const z2 = y1 * sinPitch + z1 * cosPitch
                const x2 = x1

                const x = x2 * Rx * intro.k;
                const y = y2 * Ry * intro.k - 35;
                const z = z2 * Rz * intro.k

                const depthProgress = (z2 + 1) / 2
                const scale = gsap.utils.mapRange(0, 1, 0.65, 1.15, depthProgress)
                const zIndex = Math.round(depthProgress * 100)

                gsap.set(card, { x, y, z, scale, zIndex })
            })
        }

        updateGalleryPositions()

        const AUTO_SPEED = 0.1; // degrés par frame pour l'auto
        let isDragging = false;

        const ticker = (_time: number, deltaTime: number) => {
            if (!isDragging) {
                target.yaw += AUTO_SPEED * (deltaTime / 16.67);
                target.pitch += AUTO_SPEED * (deltaTime / 16.67);
            }

            current.yaw = gsap.utils.interpolate(current.yaw, target.yaw, SMOOTHING);
            current.pitch = gsap.utils.interpolate(current.pitch, target.pitch, SMOOTHING);
            updateGalleryPositions();
        };
        gsap.ticker.add(ticker);

        const [draggable] = Draggable.create(dragProxyRef.current, {
            type: "x,y",
            inertia: true,
            trigger: containerRef.current,
            onPress: () => { isDragging = true; },
            onRelease: () => { isDragging = false; },
            onDrag: () => {
                target.yaw += draggable.deltaX * 0.3;
                target.pitch -= draggable.deltaY * 0.3;
            },
            onThrowUpdate: () => {
                target.yaw += draggable.deltaX * 0.3;
                target.pitch -= draggable.deltaY * 0.3;
            },
        });

        // --- Animation d'intro ---
        gsap.to(intro, { k: 1, duration: 3, ease: "expo.out" })
        gsap.from(cards, { opacity: 1, duration: 0.6, stagger: 0.03 })
        gsap.from(target, { yaw: -180, duration: 2.5, ease: "power3.out" }) 

        return () => {
            gsap.ticker.remove(ticker)
            draggable.kill()
        }
    }, { scope: containerRef, dependencies: [isDesktop] })

    return(
        <div className="w-full h-full relative flex flex-col items-center justify-center">
            <div ref={dragProxyRef} className="hidden"></div>
            <div
                ref={containerRef}
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{ 
                    perspective: '1000px', transformStyle: 'preserve-3d'
                 }}
            >
                {items.map((item, index) => (
                    <div 
                        key={item.name + `${index}`}
                        ref={(el) => {
                            cardsRef.current[index] = el;
                        }}
                        className="absolute w-20 h-12 lg:w-34 lg:h-22 shadow-sm flex items-center justify-center overflow-hidden"
                    >
                        <NavLink to={`/projects/${item.id}`} className={'active:cursor-grabbing'}>
                            <img src={item.images[0]} alt={item.alts[0]} className="w-full h-full object-cover image-rotating" />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}