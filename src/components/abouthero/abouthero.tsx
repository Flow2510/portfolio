export default function AboutHero() {
    return(
        <section className="h-dvh w-full relative text-neutral-50">
            <div className="h-full w-full overflow-hidden relative flex items-end justify-center">
                <img src="/images/background-black.jpg" className="absolute w-full h-full brightness-150 object-cover" alt="" />                   
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                <div>
                    <h2 className="flex flex-col items-center">
                        <span className="font-[antonio] text-7xl pr-10 md:text-8xl lg:text-9xl tracking-tighter font-bold uppercase animated-item">
                            Creative Web
                        </span>
                        <span className="font-[italianno] text-8xl pl-10 md:text-9xl lg:text-[168px] italic animated-item"> 
                            Developer
                        </span>
                    </h2>
                </div>
            </div>
            <div className="absolute bottom-2.5 md:bottom-5 left-1/2 -translate-x-1/2 animated-item">
                <p className="uppercase font-light opacity-70">
                    DESIGN MINDED. CODE DRIVEN.
                </p>
            </div>
        </section>
    )
}