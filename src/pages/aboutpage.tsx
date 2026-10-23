import AboutHero from "../components/abouthero/abouthero";
import AboutSection from "../components/aboutsection/aboutsection";
import AboutSticky from "../components/aboutsticky/aboutsticky";

type AboutPageTypes = {
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly contactModalIsOpen: boolean;
    readonly navigateWithTransition: (path: string) => void
}

export default function AboutPage({ contactModalIsOpen, setContactModalIsOpen, navigateWithTransition } : AboutPageTypes) {
    
    return(
        <main className="bg-neutral-50">
            <AboutHero />
            <AboutSection />
            <AboutSticky contactModalIsOpen={contactModalIsOpen} setContactModalIsOpen={setContactModalIsOpen} navigateWithTransition={navigateWithTransition}/>
        </main>
    )
}