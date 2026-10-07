import Hero from "../components/hero/hero";

type HomePageProps = {
    readonly isDesktop: boolean
}

export default function HomePage({ isDesktop } : HomePageProps){
    return(
        <main className="">
            <Hero 
                isDesktop={isDesktop}
            />
        </main>
    )
}