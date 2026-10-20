import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

type MenuProps = {
    readonly menuIsOpen: boolean;
    readonly setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly contactModalIsOpen: boolean;
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu({ menuIsOpen, setMenuIsOpen, contactModalIsOpen, setContactModalIsOpen } : MenuProps) {

    useEffect(() => {
        gsap.to('.menu-container', {
            xPercent: menuIsOpen ? 100 : 0,
            stagger: {
                each: 0.1,
                from: menuIsOpen ? "start" : "end",
            },
            duration: 0.7,
            ease: "power4.inOut",
        })
        gsap.to('.text-menu', {
            yPercent: menuIsOpen ? 0 : 100,
            delay: menuIsOpen? 0.5 : 0,
            stagger: {
                each:menuIsOpen? 0.05 : 0,
            },
            duration: 0.3
        })
        gsap.to('.line-menu', {
            xPercent: menuIsOpen ? 0 : 100,
            delay: menuIsOpen? 0.8 : 0,
            duration: 0.4
        })
    }, [menuIsOpen])
    
    return(
        <div>
            <div 
                className="fixed h-dvh w-full -left-full z-10 bg-neutral-500 menu-container"
            >
            </div>
            <div 
                className="fixed h-dvh w-full -left-full z-11 bg-neutral-700 menu-container"
            >  
            </div>
            <div 
                className="fixed h-dvh w-full -left-full z-12 bg-neutral-900 text-neutral-200 menu-container flex flex-col"
            >
                <nav className="p-5 flex flex-col items-end gap-5 flex-1 justify-center">
                    <NavLink to={'/'} className="flex items-end gap-3" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                        <span className="text-5xl uppercase font-extrabold tracking-tight overflow-hidden">
                            <span className="inline-block text-menu">
                                Home
                            </span>
                        </span>
                        <span className="text-2xl font-[italianno] overflow-hidden">
                            <span className="inline-block text-menu">
                                01
                            </span>
                        </span>
                    </NavLink>
                    <NavLink to={'/projects'} className="flex items-end gap-3" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                        <span className="text-5xl uppercase font-extrabold tracking-tight overflow-hidden">
                            <span className="inline-block text-menu">
                                Work
                            </span>
                        </span>
                        <span className="text-2xl font-[italianno] overflow-hidden">
                            <span className="inline-block text-menu">
                                02
                            </span>
                        </span>
                    </NavLink>
                    <NavLink to={'/about'} className="flex items-end gap-3" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                        <span className="text-5xl uppercase font-extrabold tracking-tight overflow-hidden">
                            <span className="inline-block text-menu">
                                About
                            </span>
                        </span>
                        <span className="text-2xl font-[italianno] overflow-hidden">
                            <span className="inline-block text-menu">
                                03
                            </span>
                        </span>
                    </NavLink>
                    <button type="button" className="flex items-end gap-3 cursor-pointer" onClick={() => setContactModalIsOpen(!contactModalIsOpen)}>
                        <span className="text-5xl uppercase font-extrabold tracking-tight overflow-hidden">
                            <span className="inline-block text-menu">
                                Contact
                            </span>
                        </span>
                        <span className="text-2xl font-[italianno] overflow-hidden">
                            <span className="inline-block text-menu">
                                04
                            </span>
                        </span>
                    </button>
                </nav>
                <div className="w-full px-2.5 pb-10 flex flex-col gap-10">
                    <div className="overflow-hidden">
                        <div className="w-full h-px bg-neutral-500 line-menu" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="overflow-hidden">
                            <a href="mailto:sendra.florian@gmail.com" className="text inline-block" target="_blank">sendra.florian@gmail.com</a>
                        </div>
                        <div className="b-0 flex gap-10 font-light">
                            <a href="https://www.linkedin.com/in/florian-sendra-3270961a1" className="overflow-hidden" target="_blank">
                                <div className="uppercase rounded-full bg-neutral-900 w-10 h-10 flex font-extralight items-center justify-center text">
                                    <img src="/images/github-icon.png" className="w-10 h-10 object-cover scale-[1.2]" alt="" />
                                </div>
                            </a> 
                            <a href="https://www.linkedin.com/in/florian-sendra-3270961a1" className="overflow-hidden" target="_blank">
                                <div className="uppercase bg-neutral-100 rounded-full w-10 h-10 flex font-extralight items-center justify-center text">
                                    <img src="/images/linkedin-icon.png" className="w-7 h-7 object-cover" alt="" />
                                </div>
                            </a>                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}