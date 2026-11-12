import HoverTranslate from "../hovertranslate/hovertranslate";
import { useEffect } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

type HeaderProps = {
    readonly setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly menuIsOpen: boolean;
    readonly contactModalIsOpen: boolean;
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly navigateWithTransition: (path: string) => void;
}

export default function Header({ setMenuIsOpen, menuIsOpen, contactModalIsOpen, setContactModalIsOpen, navigateWithTransition } : HeaderProps ){
    const { t, i18n } = useTranslation();

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
        <header className="w-full flex justify-between fixed top-0 left-0 p-2.5 z-15 md:p-5 mix-blend-exclusion text-white animated-item md:items-start">
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
                            text={t('header.home')}
                        />
                    </button>
                    <button onClick={() => navigateWithTransition('/projects')} className="cursor-pointer">
                        <HoverTranslate 
                            text={t('header.projects')}
                        />
                    </button>
                    <button onClick={() => navigateWithTransition('/about')} className="cursor-pointer">
                        <HoverTranslate 
                            text={t('header.about')}
                        />
                    </button>
                    <button type="button" onClick={() => setContactModalIsOpen(!contactModalIsOpen)} className="flex gap-5 group cursor-pointer">
                        <HoverTranslate 
                            text={t('header.contact')}
                        />
                    </button>
                    <div className="h-5 w-0.5 bg-neutral-50/50 translate-y-1/8"></div>
                    <div className="flex gap-2.5 text-neutral-400">                        
                        <div className="flex gap-2.5 text-neutral-400">
                            <button
                                aria-label={t("link-aria-label.en")}   
                                type="button" 
                                style={{
                                    cursor: "pointer",
                                    fontWeight: i18n.language === "en" ? 500 : 400,
                                    color: i18n.language === "en" ? '#fafafa' : "#a1a1a1"
                                }}
                                onClick={() => void i18n.changeLanguage('en')}
                            >
                                En
                            </button>
                            <span>/</span>
                            <button
                                aria-label={t("link-aria-label.fr")}
                                type="button" 
                                style={{
                                    cursor: "pointer",
                                    fontWeight: i18n.language === "fr" ? 500 : 400,
                                    color: i18n.language === "fr" ? '#fafafa' : "#a1a1a1"
                                }}
                                onClick={() => void i18n.changeLanguage('fr')}
                            >
                                Fr
                            </button>
                        </div>
                    </div>
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