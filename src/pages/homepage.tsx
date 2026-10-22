import Hero from "../components/hero/hero";

type HomePageProps = {
    readonly isDesktop: boolean;
    readonly navigateWithTransition: (path: string) => void
}

export default function HomePage({ isDesktop, navigateWithTransition } : HomePageProps){
    return(
        <main className="">
            <Hero 
                navigateWithTransition={navigateWithTransition}
                isDesktop={isDesktop}
            />
        </main>
    )
}