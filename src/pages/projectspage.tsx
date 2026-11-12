import { useTranslation } from "react-i18next";
import ProjectCard from "../components/projectcard/projectcard";
import projects from '../data/projects.json'

type ProjectsPageProps = {
    readonly navigateWithTransition: (path: string) => void
}

export default function ProjectsPage({ navigateWithTransition } : ProjectsPageProps){    
    const { t } = useTranslation()
    
    return(
        <main className="bg-neutral-200">
            <section className="relative z-1 bg-neutral-50">
                <div className="h-[60dvh] relative flex flex-col justify-end pb-15">
                    <div className="absolute w-full h-full top-1/2 left-1/2 -translate-1/2 flex items-center max-w-150 justify-center">
                <img
                    src="/images/background.webp"
                    className="h-full w-full object-cover grayscale-100 opacity-30 fade-image invert-100"
                    alt=""
                />
            </div>
                    <h2 className="flex flex-col items-center">
                        <span className="flex gap-2 font-[antonio] text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit uppercase tracking-tighter font-bold animated-item">
                            {t("projects.title.line1")}
                        </span>
                        <span className="flex gap-2 font-[italianno] w-fit font-extralight text-6xl md:text-7xl lg:text-8xl xl:text-9xl italic animated-item">
                            {t("projects.title.line2")}
                        </span>
                    </h2>
                </div>
            </section>
            <section className="relative">
                {projects.map((project) => (
                    <ProjectCard 
                        navigateWithTransition={navigateWithTransition}
                        key={project.id}
                        project={project}
                    />
                ))}
            </section>
        </main>
    )
}