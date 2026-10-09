import { useParams } from "react-router-dom"
import projects from '../data/projects.json'
import ProjectInfo from "../components/projectinfo/projectinfo"

export default function ProjectPage() {
    const { id } =useParams()
    const selectedProject = projects.find((project) => project.id === id)

    if (!selectedProject) return <h2>
        Error
    </h2>
    
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