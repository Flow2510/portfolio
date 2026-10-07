export default function ContactSection(){
    return(
        <footer>
            <div className="h-dvh w-full p-2.5 flex items-end pb-30 md:p-5" id="contact">
                <div className="flex flex-col gap-5" id="background-change">
                    <p className="font-semibold text-neutral-500 uppercase text-sm md:text-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam hic nihil laudantium ea culpa modi cum laboriosam.
                    </p>
                    <p className="text-7xl md:text-[170px] uppercase font-humane font-extrabold">
                        Get in touch
                    </p>
                    <div className="w-full bg-neutral-600 h-px"></div>
                    <a href="mailto:sendra.florian@gmail.com" target="_blank" className="text-xl font-extralight md:text-2xl">
                        sendra.florian@gmail.com
                    </a>
                    <a href="/" className="text-xl text-neutral-500 md:text-2xl" target="_blank">
                        +33 6 00 00 00 00
                    </a>
                </div>
            </div>
            <div className="p-2.5 py-5 flex flex-col gap-5 md:p-5">
                <div className="w-full bg-neutral-600 h-px"></div>
                <p className="font-semibold text-neutral-500 uppercase text-sm md:text-xl">
                    @2026 Florian
                </p>
                <div className="pb-0 flex gap-10 uppercase text-sm text-neutral-300 md:text-xl">
                    <a href="https://github.com/Flow2510" target="_blank">Github</a>
                    <a href="www.linkedin.com/in/florian-sendra-3270961a1" target="_blank">Linkedin</a>
                    <a href="mailto:sendra.florian@gmail.com" target="_blank">Mail</a>
                </div>
            </div>
        </footer>
    )
}