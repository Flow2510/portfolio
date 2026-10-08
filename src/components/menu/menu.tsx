import { NavLink } from "react-router-dom";
import HoverTranslate from "../hovertranslate/hovertranslate";

type MenuProps = {
    readonly menuIsOpen: boolean;
    readonly setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ menuIsOpen, setMenuIsOpen } : MenuProps) {
    
    return(
        <div 
            className="fixed inset-0 origin-top-right pt-30 z-10 bg-neutral-950 text-neutral-50"
            style={{
                scale: menuIsOpen ? 1 : 0,
                transition: 'scale 0.3s',
            }}
        >
            <nav className="p-5 pt-15 flex flex-col text-[32px] gap-5 font-light">
                <NavLink to={'/'} className="flex gap-5 group" onClick={() => setMenuIsOpen(!setMenuIsOpen)}>
                    <span className="text-sm">
                        01
                    </span>
                    <HoverTranslate 
                        text="Home"
                    />
                </NavLink>
                <NavLink to={'/projects'} className="flex gap-5 group" onClick={() => setMenuIsOpen(!setMenuIsOpen)}>
                    <span className="text-sm">
                        02
                    </span>
                    <HoverTranslate 
                        text="Projects"
                    />
                </NavLink>
                <NavLink to={'/about'} className="flex gap-5 group" onClick={() => setMenuIsOpen(!setMenuIsOpen)}>
                    <span className="text-sm">
                        03
                    </span>
                    <HoverTranslate
                        text="About"
                    />
                </NavLink>
                <NavLink to={'mailto:sendra.florian@gmail.com'} target="_blank" className="flex gap-5 group">
                    <span className="text-sm">
                        04
                    </span>
                    <HoverTranslate 
                        text="Contact"
                    />
                </NavLink>
            </nav>
            <div className="absolute bottom-0 left-0 w-full p-5 px-2.5 flex flex-col gap-5">
                <div className="w-full h-px bg-neutral-500" 
                />
                <div className="b-0 flex justify-between font-light">
                    <a href="https://github.com/Flow2510" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/florian-sendra-3270961a1" target="_blank">Linkedin</a>
                    <a href="mailto:sendra.florian@gmail.com" target="_blank">Mail</a>
                </div>
            </div>
        </div>
    )
}