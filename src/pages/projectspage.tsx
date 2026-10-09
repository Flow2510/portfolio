import ProjectCard from '../components/projectcard/projectcard'
import projects from '../data/projects.json'

export default function ProjectsPage(){
    return(
        <main className="bg-neutral-50 p-2.5 md:p-5">
            <section className="">
                <div className='h-80 pb-20 flex flex-col justify-end items-center'>
                    <p className='font-medium max-w-3/4 text-center'>
                        A Curated Selection of Digital Projects
                    </p>
                </div>
                <div className='flex flex-col gap-15 md:gap-x-2.5 md:grid md:grid-cols-2 xl:grid-cols-3'>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </section>
            <div className='h-80 w-full flex items-end justify-center'>
                <a className='text-sm' href='mailto:sendra.florian@gmail.com'>
                    Florian Sendra © 2026
                </a>
            </div>
        </main>
    )
}