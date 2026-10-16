import { NavLink, useParams } from "react-router-dom"
import projects from '../data/projects.json'
import ProjectInfo from "../components/projectinfo/projectinfo"
import HoverTranslate from "../components/hovertranslate/hovertranslate"

export default function ProjectPage() {
    const { id } = useParams()
    const selectedProject = projects.find((project) => project.id === id)

    if (!selectedProject) return <main className="p-2.5 md:p-5 h-dvh flex flex-col">
        <div className="flex-1 flex items-center justify-center flex-col gap-5">
            <h2 className="text-[64px] uppercase font-humane font-extrabold leading-[100%]">
                Project not found
            </h2>
            <div className="flex gap-5">
                <NavLink to={'/'} className={'px-5 py-2 border group'}>
                    <HoverTranslate 
                        text="Home"
                    />
                </NavLink>
                <NavLink to={'/projects'} className={'px-5 py-2 border group'}>
                    <HoverTranslate 
                        text="Projects"
                    />
                </NavLink>
            </div>
        </div>
        <div className='w-full flex items-end justify-center'>
            <a className='text-sm' href='mailto:sendra.florian@gmail.com'>
                Florian Sendra © 2026
            </a>
        </div>
    </main>
    
    return(
        <main className="p-2.5 md:p-5">
            <ProjectInfo 
                selectedProject={selectedProject}
            />
            <div className='h-80 w-full flex items-end justify-center'>
                <a className='text-sm' href='mailto:sendra.florian@gmail.com'>
                    Florian Sendra © 2026
                </a>
            </div>
        </main>
    )
}