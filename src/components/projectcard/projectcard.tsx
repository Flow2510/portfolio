import { useState } from "react"
import { NavLink } from "react-router-dom";

type ProjectCardTypes={
    readonly project: {
        name: string;
        id: string;
        year: string;
        color: string;
        link: string;
        type: string;
        videos: string[];
        images: string[];
        alts: string[];
        status: string;
        intro: string;
        text: string;
    }
}

export default function ProjectCard({ project } : ProjectCardTypes) {
    const [isHovered, setIsHovered] = useState(false)

    return(
        <NavLink to={`/projects/${project.id}`}>
            <article className="cursor-pointer flex flex-col gap-2">
                <div className='w-full aspect-square' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {isHovered ?
                        <video src={project.videos[0]} autoPlay muted loop className="w-full h-full object-cover">

                        </video>
                    :
                        <img className='w-full h-full object-cover' src={project.images[0]} alt="" />
                    }
                </div>
                <div>
                    <h2 className="font-semibold text-sm">
                        {project.name}
                    </h2>
                    <h3 className="text-sm">
                        {project.type}
                    </h3>
                </div>
            </article>
        </NavLink>
    )
}