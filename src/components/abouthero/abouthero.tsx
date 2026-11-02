export default function AboutHero() {
    return(
        <section className="h-dvh w-full relative text-neutral-50">
            <div className="h-full w-full overflow-hidden relative flex items-end justify-center">
                <img src="/images/background-black.jpg" className="absolute w-full h-full brightness-150 object-cover" alt="" />                   
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                <div className="flex flex-col items-center">
                    <h2 className="flex flex-col items-center">
                        <span className="font-[antonio] text-7xl pr-10 md:text-8xl lg:text-9xl tracking-tighter font-bold uppercase animated-item">
                            Florian
                        </span>
                        <span className="font-[italianno] text-8xl pl-10 md:text-9xl lg:text-[168px] italic animated-item"> 
                            Sendra
                        </span>
                    </h2>
                    <p className="uppercase font-light text-2xl opacity-50 -translate-y-1/2 md:-translate-y-2/3 lg:-translate-y-full">
                        <span className="animated-item inline-block">
                            Web Developer
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}