import AboutHero from "../components/abouthero/abouthero";
import AboutSection from "../components/aboutsection/aboutsection";
import AboutSticky from "../components/aboutsticky/aboutsticky";

type AboutPageTypes = {
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly contactModalIsOpen: boolean;
}

export default function AboutPage({ contactModalIsOpen, setContactModalIsOpen } : AboutPageTypes) {
    
    return(
        <main className="bg-neutral-50">
            <AboutHero />
            <AboutSection />
            <AboutSticky contactModalIsOpen={contactModalIsOpen} setContactModalIsOpen={setContactModalIsOpen}/>
        </main>
    )
}