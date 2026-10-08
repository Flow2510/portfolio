import { useRef, useState } from "react"
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
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleEnter = () => {
        setIsHovered(true);
        videoRef.current?.play().catch(() => {});
    };

    const handleLeave = () => {
        setIsHovered(false);
        videoRef.current?.pause();
    };

    return(
        <NavLink to={`/projects/${project.id}`}>
            <article className="cursor-pointer flex flex-col gap-2">
                <div className="w-full aspect-square relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src={project.images[0]}
                        alt={project.alts[0]}
                    />
                    <video
                        ref={videoRef}
                        src={project.videos[0]}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                        style={{ opacity: isHovered ? 1 : 0 }}
                    />
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