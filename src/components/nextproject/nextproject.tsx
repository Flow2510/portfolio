import { useRef } from 'react';
import projects from '../../data/projects.json'
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import HoverTranslate from '../hovertranslate/hovertranslate';

type NextProjectProps = {
    readonly selectedProject: {
        name: string;
        id: string;
        year: string;
        color: string;
        link: string;
        type: string;
        videos: string[];
        images: {
            mockup: string[];
            desktop: string[];
            mobile: string[];
            background: string[];
        };
        alts: {
            mockup: string[];
            desktop: string[];
            mobile: string[];
        };
        status: string;
        intro: string;
        text: string;
    }
}

export default function NextProject({ selectedProject } : NextProjectProps) {
    if (!selectedProject) return

    const containerRef = useRef<HTMLDivElement>(null)

    const backToTop = () => {
        window.scrollTo(0, 0)
    }

    const projectIndex = projects.findIndex((s) => s.id === selectedProject.id)
    const nextProjectIndex = (projectIndex + 1) % projects.length
    const words = projects[nextProjectIndex].name.split(" ")

    useGSAP(() => {
        gsap.to('.next-project-image', {
            scale: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'top top',
                scrub: true
            }
        })
    })

    return(
        <section >
            <div className="fixed inset-0 z-0" >
                <NavLink to={`/projects/${projects[nextProjectIndex].id}`} className="h-full w-full relative overflow-hidden">
                    <img src={projects[nextProjectIndex].images.mockup[0]} alt="" className="absolute w-full h-full object-cover scale-200 next-project-image" />
                    <div className='h-full w-full bg-neutral-950/60 relative'>

                    </div>
                    <div className='absolute h-full w-full top-0 left-0 text-neutral-50 flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <p>Next Project</p>
                            <h2 className="flex flex-col items-center">
                                <span className="flex gap-2 font-[antonio] text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit font-extrabold uppercase">
                                    {words.slice(0, Math.ceil(words.length / 2)).map((word, index) => (
                                        <span key={word + index} >
                                            {word}
                                        </span>
                                    ))}
                                </span>
                                <span className="flex gap-2 font-[italianno] w-fit font-extralight text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                                    {words.slice(Math.ceil(words.length / 2)).map((word, index) => (
                                        <span key={word + index}>
                                            {word}
                                        </span>
                                    ))}
                                </span>
                            </h2>
                        </div>
                    </div>                    
                </NavLink>
                <div className='absolute left-0 bottom-0 w-full flex justify-between items-end p-2.5 md:p-5'>
                        <NavLink to={'/projects'} className='flex items-center text-neutral-50 gap-2.5'>
                            <div className='grid grid-cols-2 h-2.5 w-2.5 gap-0.5'>
                                <div className='w-full h-full bg-neutral-50'></div>
                                <div className='w-full h-full bg-neutral-50'></div>
                                <div className='w-full h-full bg-neutral-50'></div>
                                <div className='w-full h-full bg-neutral-50'></div>
                            </div>
                            <p className='text-sm'>
                                <HoverTranslate 
                                    text='All Projects'
                                />
                            </p>
                        </NavLink>
                        <button type='button' onClick={backToTop} className='bg-neutral-100 rounded-full w-12 h-12 flex text-xl items-center justify-center text-neutral-950 cursor-pointer hover:scale-[0.9] duration-300'>
                            <span>
                                ↑
                            </span>
                        </button>
                    </div>
                </div>
            <div className="h-dvh w-full" ref={containerRef}>

            </div>
        </section>
    )
}