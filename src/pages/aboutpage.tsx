import AnimatedLink from "../components/animatedlink/animatedlink";
import AnimatedList from "../components/animatedlist/animatedlist";
import AnimatedText from "../components/animatedtext/animatedtext";

export default function AboutPage() {
    const servicesList = [
        "Front-end Engineering",
        "UI / UX Integration",
        "Interactive Animations",
        "Performance Optimization",
        "Full-stack Integration"
    ]

    const stackList = [
        "React",
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
                    Hi, I'm Florian, a web developer crafting modern user experiences.
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
                    text={'I turn designs into responsive, high-performance interfaces using React and TypeScript. I care deeply about code quality, accessibility, and smooth user interactions that elevate the overall experience'}
                />
                <AnimatedText 
                    direction={'right'}
                    column={2}
                    row={2}
                    text={"To become a more complete developer, I'm currently expanding into the back-end with Node.js, Express, and Supabase. Building personal projects helps me understand the full picture, from database design to the user interface."}
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
                <div>
                    <p className="text-5xl text-center font-serif tracking-tight leading-[130%] md:text-6xl lg:text-7xl max-w-250">
                        <span>
                            Looking for my next challenge in a full-time, fixed-term, or work-study role. Got a project in mind? 
                        </span>
                        <span className="pl-2.5 inline-block">
                            <a href="mailto:sendra.florian@gmail.com" className="relative inline-block">
                                <span className="">
                                    Let’s talk.
                                </span>
                                <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-0.5 bg-white inline-block">
            
                                </span>
                            </a>
                        </span>
                    </p>
                </div>
                <div className="absolute bottom-0 w-full left-0 flex items-center justify-center">
                    <a className='text-sm' href='mailto:sendra.florian@gmail.com'>
                        Florian Sendra © 2026
                    </a>
                </div>
            </div>
        </main>
    )
}