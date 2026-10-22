import ProjectCard from "../components/projectcard/projectcard";
import projects from '../data/projects.json'

export default function ProjectsPage(){
    return(
        <main className="bg-neutral-50">
            <section className="relative z-1 bg-neutral-50">
                <div className="h-[60dvh] flex flex-col justify-end pb-15">
                    <h2 className="flex flex-col items-center">
                        <span className="flex gap-2 font-[antonio] text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit uppercase tracking-tighter font-bold">
                            Selected
                        </span>
                        <span className="flex gap-2 font-[italianno] w-fit font-extralight text-6xl md:text-7xl lg:text-8xl xl:text-9xl italic">
                            Work
                        </span>
                    </h2>
                </div>
            </section>
            <section>
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        project={project}
                    />
                ))}
            </section>
        </main>
    )
}