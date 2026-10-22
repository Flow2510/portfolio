import AboutHero from "../components/abouthero/abouthero";
import AboutSection from "../components/aboutsection/aboutsection";
import { useGSAP } from "@gsap/react";
import AboutSticky from "../components/aboutsticky/aboutsticky";

export default function AboutPage() {

    // const contactList = [
    //     {
    //         "name": 'Github',
    //         "link": "https://github.com/Flow2510"
    //     },
    //     {
    //         "name": 'Linkedin',
    //         "link": "https://www.linkedin.com/in/florian-sendra-3270961a1"
    //     },
    //     {
    //         "name": 'Mail',
    //         "link": "mailto:sendra.florian@gmail.com"
    //     },
    //     {
    //         "name": 'CV',
    //         "link": "CV_Sendra_Florian.pdf"
    //     }
    // ]

    useGSAP(() => {

    })
    
    return(
        <main className="bg-neutral-50">
            <AboutHero />
            <AboutSection />
            <AboutSticky />
        </main>
    )
}