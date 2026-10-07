import { NavLink } from "react-router-dom";
import HoverTranslate from "../hovertranslate/hovertranslate";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type HeaderProps = {
    readonly setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly menuIsOpen: boolean;
    readonly isDesktop: boolean
}

export default function Header({ setMenuIsOpen, menuIsOpen, isDesktop } : HeaderProps ){
    const headerRef = useRef<HTMLHeadElement>(null)

    useGSAP(() => {
        if(!headerRef.current) return

        gsap.fromTo(headerRef.current, {
            yPercent: -100
        },{
            yPercent: 0,
            duration: 0.3,
            delay: 0.5
        }
    )
    })

    return(
        <header className="w-full flex justify-between fixed top-0 left-0 p-2.5 z-15 mix-blend-exclusion text-neutral-50 md:p-5" ref={headerRef} style={{ alignItems: isDesktop ? "start" : 'center' }}>
            <NavLink to={'/'}>
                <h1  className="flex flex-col uppercase font-[antonio] text-3xl tracking-[-1px] font-semibold md:text-4xl">
                    <span>
                        Florian
                    </span>
                    <span className="pl-7.5 md:pl-10">
                        Sendra
                    </span>
                </h1>
            </NavLink>
            <div className="hidden md:inline-block">
                <nav className="flex gap-5">
                    <NavLink to={'/'} className="flex gap-5 group">
                        <HoverTranslate 
                            text="Home"
                        />
                    </NavLink>
                    <NavLink to={'/projects'} className="flex gap-5 group">
                        <HoverTranslate 
                            text="Projects"
                        />
                    </NavLink>
                    <NavLink to={'/about'} className="flex gap-5 group">
                        <HoverTranslate
                            text="About"
                        />
                    </NavLink>
                    <NavLink to={'mailto:sendra.florian@gmail.com'} target="_blank" className="flex gap-5 group">
                        <HoverTranslate 
                            text="Contact"
                        />
                    </NavLink>
                </nav>
            </div>
                <div className="md:hidden">
                    <button type="button" onClick={() => setMenuIsOpen(!menuIsOpen)} className="cursor-pointer uppercase border px-4 py-1.5 flex flex-col relative font-light">
                        <span className="inline-block overflow-hidden md:text-xl">
                            <span className=" inline-block duration-300" style={{ transform: menuIsOpen? 'translateY(-100%)' : 'translateY(0%)'}}>
                                Menu
                            </span>
                        </span>
                        <span className="absolute inline-block overflow-hidden">
                            <span className="inline-block duration-300" style={{ transform: menuIsOpen? 'translateY(0%)' : 'translateY(-100%)'}}>
                                Close
                            </span>
                        </span>
                    </button>
                </div>
        </header>
    )
}