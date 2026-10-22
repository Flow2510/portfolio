import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

type ContactModalProps = {
    readonly contactModalIsOpen: boolean;
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContactModal({ contactModalIsOpen, setContactModalIsOpen } : ContactModalProps){
    const containerRef = useRef<HTMLDivElement>(null)
    const containerRightRef = useRef<HTMLDivElement>(null)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        gsap.to('.item-modal', {
            opacity: contactModalIsOpen? 1 : 0,
            y: contactModalIsOpen? 0 : 25,
            delay: contactModalIsOpen? 0.5 : 0,
            stagger: {
                each: contactModalIsOpen? 0.1 : 0,
                from: contactModalIsOpen? "start" : "end"
            }
        })
        gsap.to('.contact-modal-button', {
            opacity: contactModalIsOpen? 1 : 0,
            y: contactModalIsOpen? 0 : 25,
            delay: contactModalIsOpen? 0.5 : 0,
        })
        gsap.to(containerRef.current, {
            yPercent: contactModalIsOpen ? 100 : 0,
            duration: 0.5,
        })
        gsap.to(containerRightRef.current, {
            yPercent: contactModalIsOpen ? -100 : 0,
            duration: 0.5,
        })
        gsap.to('.contact-modal-bg', {
            background: contactModalIsOpen ? "#171717" : "transparent",
            duration: 0.5,
        })
    }, [contactModalIsOpen])

    const submitHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // faire un formulaire avec formspree
    } 

    return(
        <>
            <div className="fixed inset-0 pointer-events-none z-99 contact-modal-bg">

            </div>
            <div className="fixed w-full h-dvh lg:w-1/2 -top-full bg-neutral-900 flex items-center justify-center overflow-hidden z-100" ref={containerRef}>
                <button type="button" className="absolute top-2.5 right-2.5 text-neutral-950 cursor-pointer lg:hidden " onClick={() => setContactModalIsOpen(!contactModalIsOpen)}>
                    <div className=" uppercase bg-neutral-100 rounded-full w-12 h-12 flex font-extralight items-center justify-center contact-modal-button">
                        <span>
                            ╳
                        </span>
                    </div>
                </button>
                <div className="text-neutral-50 w-full p-5 flex flex-col gap-10 lg:gap-15">
                    <h3 className="flex flex-col text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center tracking-tighter font-bold">
                        <span className="item-modal inline-block pr-10 lg:pr-15 font-[antonio]">
                            Get in
                        </span>
                        <span className="item-modal inline-block pl-10 lg:pl-15 font-[antonio]">
                            Touch
                        </span>
                    </h3>
                    <form action="" className="flex flex-col gap-5 max-w-150 m-auto">
                        <div className="flex flex-col gap-5 md:flex-row">
                            <label htmlFor="" className="w-full item-modal">
                                <p className="sr-only">Your name</p>
                                <input type="text" className="border w-full px-5 py-3.5 outline-none" placeholder="Your name" />
                            </label>
                            <label htmlFor="" className="w-full item-modal">
                                <p className="sr-only">Your email adress</p>
                                <input type="email" className="border w-full px-5 py-3.5 outline-none" placeholder="Your email adress" />
                            </label>
                        </div>
                        <label htmlFor="" className="w-full item-modal">
                            <p className="sr-only">Your message</p>
                            <textarea name="" id="" className="border w-full h-40 px-5 py-3.5 outline-none" placeholder="Your message"></textarea>
                        </label>
                        <label htmlFor="" className="flex gap-2.5 item-modal items-center">
                            <input type="checkbox" className="sr-only" name="" id="" />
                            <button type='button' onClick={() => setIsChecked(!isChecked)} className="h-4 w-4 border rounded-full cursor-pointer">
                                <div className="h-full w-full bg-neutral-50 rounded-full duration-300" style={{ scale: isChecked? 1 : 0 }}>

                                </div>
                            </button>
                            <p className="text-neutral-400">I've accepted the <NavLink to={'/'} className={'underline underline-offset-2'}>privacy policy</NavLink>.*</p>
                        </label>
                        <button type="submit" onClick={submitHandleClick} className="duration-300 item-modal uppercase border p-3.5 w-full max-w-90 rounded-full active:bg-neutral-50 active:text-neutral-950 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer">
                            submit message
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-1/2 left-1/2 h-dvh top-full z-100 hidden lg:flex fixed bg-neutral-50" ref={containerRightRef}>
                <div className="w-full h-full">
                    <img src='/images/porvenir/background2.jpg' className="object-cover w-full h-full" alt="" />
                </div>
                <button type="button" className="absolute top-2.5 right-2.5 w-12 h-12 text-neutral-50 cursor-pointer hover:scale-[0.9] duration-200" onClick={() => setContactModalIsOpen(!contactModalIsOpen)}>
                    <div className=" uppercase bg-neutral-900 rounded-full w-full h-full flex font-extralight items-center justify-center contact-modal-button">
                        <span>
                            ╳
                        </span>
                    </div>
                </button>
                <div className="flex flex-col gap-2.5 absolute items-end bottom-2.5 right-2.5">
                        <div className="b-0 flex gap-5 font-light">
                            <a href="https://github.com/Flow2510" className="overflow-hidden hover:scale-[0.9] duration-300" target="_blank">
                                <div className="uppercase rounded-full bg-neutral-50 w-10 h-10 flex font-extralight items-center justify-center item-modal">
                                    <img src="/images/github-black-icon.png" className="w-10.5 h-10.5 object-cover inline-block scale-[1.2]" alt="" />
                                </div>
                            </a> 
                            <a href="https://www.linkedin.com/in/florian-sendra-3270961a1" className="overflow-hidden hover:scale-[0.9] duration-300" target="_blank">
                                <div className="uppercase bg-neutral-900 rounded-full w-10 h-10 flex font-extralight items-center justify-center item-modal">
                                    <img src="/images/linkedin-icon.png" className="w-7 h-7 object-cover brightness-[100]" alt="" />
                                </div>
                            </a>      
                            <a href="mailto:sendra.florian@gmail.com" className="hover:scale-[0.9] duration-300" target="_blank">
                                <div className="uppercase bg-neutral-900 rounded-full w-10 h-10 flex font-extralight items-center justify-center item-modal">
                                    <img src="/images/mail-icon.png" className="w-7 h-7 object-cover brightness-[100]" alt="" />
                                </div>
                            </a>                  
                        </div>
                    </div>
            </div>
        </>
    )
}