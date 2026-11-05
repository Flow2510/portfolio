export default function AboutHero() {
    return(
        <section className="h-dvh w-full relative text-neutral-50 bg-neutral-900">
            <div className="absolute w-full h-full top-1/2 left-1/2 -translate-1/2 flex items-center max-w-150 justify-center">
                <img
                    src="/images/background.png"
                    className="h-full w-full object-cover grayscale-100 opacity-30 fade-image"
                    alt=""
                />
            </div>
            <div className="relative h-full w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h2 className="flex flex-col items-center">
                        <span className="font-[antonio] text-7xl pr-10 md:text-8xl lg:text-9xl tracking-tighter font-bold uppercase animated-item">
                            Florian
                        </span>
                        <span className="font-[italianno] text-8xl pl-10 md:text-9xl lg:text-[168px] italic animated-item"> 
                            Sendra
                        </span>
                    </h2>
                    <p className="uppercase font-light md:text-lg lg:text-xl opacity-50 -translate-y-1/2 md:-translate-y-2/3 lg:-translate-y-full">
                        <span className="animated-item inline-block">
                            Web Developer
                        </span>
                    </p>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 opacity-50 w-full flex justify-between items-center p-2.5 md:p-5">
                <div>
                    <p className="flex flex-col md:flex-row md:gap-1 animated-item">
                        <span>Creative Developer</span>
                        <span>Based in Perpignan</span>
                    </p>
                </div>
            </div>
        </section>
    )
}