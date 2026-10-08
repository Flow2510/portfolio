import AnimatedLink from "../components/animatedlink/animatedlink";
import AnimatedList from "../components/animatedlist/animatedlist";
import AnimatedText from "../components/animatedtext/animatedtext";

export default function AboutPage() {
    const servicesList = [
        "Front-end Development",
        "UI / UX Integration",
        "Web Design",
        "API & Back-end",
        "Performance Optimization"
    ]

    const stackList = [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Supabase",
    ]

    const contactList = [
        {
            "name": 'Github',
            "link": "https://github.com/Flow2510"
        },
        {
            "name": 'Linkedin',
            "link": "https://www.linkedin.com/in/florian-sendra-3270961a1"
        },
        {
            "name": 'Mail',
            "link": "mailto:sendra.florian@gmail.com"
        },
        {
            "name": 'CV',
            "link": "CV_Sendra_Florian.pdf"
        }
    ]
    
    return(
        <main className="bg-neutral-50 relative p-2.5 md:p-5">
            <section className="w-full h-dvh flex items-center justify-center">
                <p className="text-5xl text-center font-serif tracking-tight leading-[130%] md:text-6xl lg:text-7xl max-w-250">
                    Hi, I'm Florian, a web developer crafting clean, expressive interfaces.
                </p>
            </section>
            <section className="w-full sticky top-[calc(50%-60px)] flex items-center justify-center">
                <div className="h-30 w-30 rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/images/photo.png" className="h-full w-full object-cover" alt="Portrait de Florian Sendra, développeur front-end" />
                </div>
            </section>
            <section className="grid grid-cols-2 overflow-hidden relative gap-y-25 pt-30">
                <AnimatedText 
                    direction={'left'}
                    column={1}
                    row={1}
                    text={'Front-end focused web developer, I build clean, fast and accessible interfaces. I care as much about visual detail as code quality, and I\'m currently open to new opportunities.'}
                />
                <AnimatedText 
                    direction={'right'}
                    column={2}
                    row={2}
                    text={'I\'m currently learning back-end development, building APIs with Node.js and Express and exploring Supabase for databases and authentication. It helps me understand a project end to end and work more closely with the whole team, from design to production.'}
                />
                <AnimatedList 
                    direction={"left"}
                    list={servicesList}
                    title={"What I do"}
                    column={1}
                    row={3}
                />   
                <AnimatedList 
                    direction={"right"}
                    list={stackList}
                    title={"Stack"}
                    column={2}
                    row={4}
                />
                <AnimatedLink 
                    direction={"left"}
                    list={contactList}
                    title={"Contact"}
                    column={1}
                    row={5}
                />
            </section>
            <div className="w-full h-dvh flex items-center justify-center relative text-neutral-50 mix-blend-difference">
                <p className="text-5xl text-center font-serif tracking-tight leading-[130%] md:text-6xl lg:text-7xl max-w-250">
                    Open to full-time, fixed-term or work-study roles. Freelance projects are welcome too.
                </p>
                <div className="absolute bottom-0 w-full left-0 flex items-center justify-center">
                    <a className='text-sm' href='mailto:sendra.florian@gmail.com'>
                        Florian Sendra ©2026
                    </a>
                </div>
            </div>
        </main>
    )
}