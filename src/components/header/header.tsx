import HoverTranslate from "../hovertranslate/hovertranslate";
import { useEffect } from "react";
import gsap from "gsap";

type HeaderProps = {
    readonly setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly menuIsOpen: boolean;
    readonly isDesktop: boolean;
    readonly contactModalIsOpen: boolean;
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    readonly navigateWithTransition: (path: string) => void
}

export default function Header({ setMenuIsOpen, menuIsOpen, isDesktop, contactModalIsOpen, setContactModalIsOpen, navigateWithTransition } : HeaderProps ){

    useEffect(() => {
        gsap.to('.button-line-top',{
            xPercent: menuIsOpen? -100 : 0,
            delay: menuIsOpen? 0 : 0.5
        })
        gsap.to('.button-line-bottom',{
            xPercent: menuIsOpen? 100 : 0,
            delay: menuIsOpen? 0 : 0.5
        })
        gsap.to('.button-close',{
            scale: menuIsOpen? 1 : 0,
            delay: menuIsOpen? 0.5 : 0
        })
    }, [menuIsOpen])

    return(
        <header className="w-full flex justify-between fixed top-0 left-0 p-2.5 z-15 md:p-5 mix-blend-exclusion text-white animated-item" style={{ alignItems: isDesktop ? "start" : 'center' }}>
            <button onClick={() => navigateWithTransition('/')} className={'pointer-events-auto cursor-pointer'}>
                <h1  className="flex flex-col uppercase font-[antonio] text-3xl tracking-[-1px] font-semibold md:text-4xl">
                    <span>
                        Florian
                    </span>
                    <span className="pl-7.5 md:pl-10">
                        Sendra
                    </span>
                </h1>
            </button>
            <div className="hidden md:inline-block pointer-events-auto ">
                <nav className="flex gap-5">
                    <button onClick={() => navigateWithTransition('/')} className="cursor-pointer">
                        <HoverTranslate 
                            text="Home"
                        />
                    </button>
                    <button onClick={() => navigateWithTransition('/projects')} className="cursor-pointer">
                        <HoverTranslate 
                            text="Projects"
                        />
                    </button>
                    <button onClick={() => navigateWithTransition('/about')} className="cursor-pointer">
                        <HoverTranslate 
                            text="About"
                        />
                    </button>
                    <button type="button" onClick={() => setContactModalIsOpen(!contactModalIsOpen)} className="flex gap-5 group cursor-pointer">
                        <HoverTranslate 
                            text="Contact"
                        />
                    </button>
                </nav>
            </div>
            <div className="md:hidden ">
                <button
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    className="flex flex-col gap-1.5 button-open cursor-pointer relative py-4"
                >
                    <div className="overflow-hidden">
                        <div className="h-px w-12.5 bg-neutral-400 button-line-top">

                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="h-px w-12.5 bg-neutral-50 button-line-bottom">

                        </div>
                    </div>
                    <div className="button-close uppercase absolute top-1/2 left-1/2 -translate-1/2 bg-neutral-100 rounded-full w-12 h-12 flex font-extralight items-center justify-center">
                        <span className="text-black">
                            ╳
                        </span>
                    </div>
                </button>
            </div>
        </header>
    )
}