import { useEffect, useRef, useState } from "react";
import HoverTranslate from "../components/hovertranslate/hovertranslate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type PolicyPageProps = {
    readonly setContactModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    readonly contactModalIsOpen: boolean;
    readonly navigateWithTransition: (path: string) => void
}

export default function PolicyPage({ setContactModalIsOpen, contactModalIsOpen, navigateWithTransition } : PolicyPageProps){
    const containerRef = useRef<HTMLDivElement>(null)
    const mainRef = useRef<HTMLElement>(null)
    const circleRef = useRef<SVGCircleElement | null>(null);
    const [isHovered, setIsHovered] = useState(false)

    const backToTop = () => {
        window.scrollTo(0, 0)
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: "top top",
                scrub: true
            }
        })

        tl.fromTo('.title-line-top', {
            x: -100
        }, {
            x:0
        })

        tl.fromTo('.title-line-bottom', {
            x: 100
        }, {
            x:0
        }, 0)
    }, {scope: mainRef})

    useEffect(() => {
        const circle = circleRef.current;

        if (!circle) return;

        const length = circle.getTotalLength() + 1;

        gsap.to(circle, {
            strokeDasharray: length,
            strokeDashoffset: isHovered? length : 0,
            duration: isHovered? 0.5: 1,
            ease: "power1.inOut",
        });
    }, [isHovered])
    
    return(
        <main className="flex flex-col" ref={mainRef}>
            <section className="relative z-1">
                <div className="h-[60dvh] w-full flex flex-col justify-end pb-15 bg-neutral-900 text-neutral-50">
                    <h2 className="flex flex-col items-center">
                        <span className="flex gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 font-[antonio] text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit uppercase tracking-tighter font-bold animated-item pr-10 animated-item">
                            Privacy
                        </span>
                        <span className="flex gap-2 font-[italianno] w-fit font-extralight italic text-6xl md:text-7xl lg:text-8xl xl:text-9xl animated-item pl-10 animated-item">
                            Policy
                        </span>
                    </h2>
                </div>
            </section>
            <section className="bg-neutral-50 w-full p-2.5 md:p-5 flex flex-col gap-5 py-15 md:py-25 relative z-1">                
                <div className="flex flex-col gap-5 relative md:flex-row md:gap-25">                    
                    <div className="flex flex-col gap-5 max-w-250">
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">1. Responsable du traitement</h3>
                            <div>
                                <p>
                                    Le présent site est édité par Sendra Florian,
                                    joignable à l'adresse suivante : sendra.florian@gmail.com.
                                </p>
                                <p>
                                    Le responsable du traitement des données personnelles est Sendra Florian.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">2. Données personnelles collectées</h3>
                            <div>
                                <p>
                                    Lorsque vous utilisez le formulaire de contact, les informations que vous
                                    renseignez sont collectées afin de permettre le traitement de votre demande.
                                </p>
                                <p>
                                    Selon les champs présents dans le formulaire, ces informations peuvent
                                    comprendre votre nom, votre adresse e-mail, l'objet de votre demande
                                    et le contenu de votre message.
                                </p>
                                <p>
                                    Seules les données nécessaires au traitement de votre demande doivent être collectées.
                                </p>
                                <p>
                                    Lors de la consultation du site, des données techniques peuvent également
                                    être traitées par l'hébergeur afin d'assurer le fonctionnement, la maintenance
                                    et la sécurité du site.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">3. Finalités et bases légales</h3>
                            <div>
                                <p>
                                    Les données transmises via le formulaire de contact sont utilisées pour
                                    répondre aux demandes reçues. Ce traitement repose sur l'intérêt légitime
                                    du responsable du traitement à répondre aux sollicitations qui lui sont
                                    adressées ou, lorsque cela est pertinent, sur les mesures précontractuelles
                                    prises à la demande de la personne concernée.
                                </p>
                                <p>
                                    Les données techniques strictement nécessaires peuvent être traitées
                                    pour assurer le fonctionnement et la sécurité du site, sur la base légale
                                    applicable au traitement concerné.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">4. Hébergement et services externes</h3>
                            <div>
                                <p>
                                    Le site est hébergé et déployé à l'aide de Vercel. Dans le cadre de ce
                                    service, certaines données techniques peuvent être traitées pour assurer
                                    la disponibilité, le fonctionnement et la sécurité du site.
                                </p>
                                <p>
                                    Le site peut charger des polices de caractères depuis un service externe.
                                    Le chargement de ces ressources peut entraîner la transmission de données
                                    techniques, notamment l'adresse IP, au fournisseur concerné.
                                </p>
                                <p>
                                    GitHub est utilisé pour gérer et héberger le code source du projet.
                                    Son utilisation pour le développement ne signifie pas nécessairement que
                                    les visiteurs transmettent directement des données personnelles à GitHub.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">5. Cookies et traceurs</h3>
                            <div>
                                <p>
                                    Le site n'utilise pas d'outil de mesure d'audience tel que Google Analytics.
                                </p>
                                <p>
                                    Les éventuels cookies ou autres traceurs utilisés dépendent des fonctionnalités
                                    réellement présentes sur le site et des services externes intégrés.
                                    Les traceurs non exemptés de consentement ne sont utilisés qu'après
                                    le recueil du consentement requis par la réglementation.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">6. Destinataires des données</h3>
                            <p>
                                Les données peuvent être accessibles au responsable du traitement et aux
                                prestataires techniques concernés, dans la mesure nécessaire à leurs missions.
                                Les destinataires effectifs dépendent des services activés et de la
                                configuration du site.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">7. Durée de conservation</h3>
                            <div>
                                <p>
                                    Les données personnelles sont conservées pendant la durée nécessaire à la finalité poursuivie.
                                </p>
                                <p>
                                    Les messages du formulaire de contact sont conservés pendant 6 mois.
                                </p>
                                <p>
                                    Les données techniques et journaux de sécurité sont conservés pendant 6 mois.
                                </p>
                                <p>
                                    À l'issue de la durée applicable, les données sont supprimées ou archivées lorsque cela est justifié et autorisé.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">8. Vos droits</h3>
                            <div>
                                <p>
                                    Conformément à la réglementation applicable, vous pouvez, selon les
                                    conditions prévues par celle-ci, demander l'accès à vos données personnelles,
                                    leur rectification, leur effacement, la limitation du traitement ou exercer
                                    votre droit d'opposition.
                                </p>
                                <p>
                                    Vous pouvez également exercer votre droit à la portabilité lorsque celui-ci
                                    s'applique.
                                </p>
                                <p>
                                    Pour exercer vos droits, contactez : [adresse e-mail de contact].
                                </p>
                                <p>
                                    Vous pouvez également déposer une réclamation auprès de la CNIL :{" "}
                                    <a
                                        href="https://www.cnil.fr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline"
                                    >
                                        https://www.cnil.fr/
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">9. Sécurité</h3>
                            <p>
                                Des mesures techniques et organisationnelles adaptées sont mises en œuvre
                                pour protéger les données personnelles, selon les moyens et les services utilisés.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">10. Mise à jour</h3>
                            <p>
                                Cette politique peut être modifiée afin de refléter les évolutions du site,
                                de ses fonctionnalités ou de la réglementation applicable.
                            </p>
                        </div>

                        <h3 className="text-sm pt-15">
                            Dernière mise à jour : 24 octobre 2026
                        </h3>
                    </div>
                </div>                
            </section>
            <section className="">
                <div className="h-dvh w-full" ref={containerRef}>

                </div>
                <div className="h-dvh w-full flex items-center justify-center bg-neutral-900 text-neutral-50 contact-container fixed top-0 left-0 z-0">
                    <div className="flex flex-col items-center gap-10 relative">
                        <h2 className="flex flex-col items-center animated-item">
                            <span className="font-[antonio] text-7xl md:text-8xl lg:text-9xl xl:text-[150px] uppercase tracking-tight font-bold pr-10 md:pr-20 lg:pr-30 xl:pr-50 title-line-top">
                                LET'S CREATE
                            </span>
                            <span className="font-[italianno] text-8xl md:text-9xl italic -mb-5 lg:text-9xl xl:text-[180px]">
                                Something
                            </span>
                            <span className="font-[antonio] text-7xl md:text-8xl uppercase tracking-tight font-bold lg:text-9xl xl:text-[150px] pl-10 md:pl-20 lg:pl-30 xl:pl-50 title-line-bottom">
                                TOGETHER.
                            </span>
                        </h2>
                        <button 
                            className="uppercase py-5 px-10 rounded-full flex justify-center items-center border lg:border-0 text-sm cursor-pointer relative group lg:absolute lg:-bottom-5 lg:-left-20 lg:w-50 lg:h-50 animated-item" 
                            type="button" 
                            onClick={() => setContactModalIsOpen(!contactModalIsOpen)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <svg viewBox="0 0 200 200" className="absolute hidden lg:inline-block">
                                <circle
                                    ref={circleRef}
                                    cx="100"
                                    cy="100"
                                    r="99"
                                    stroke="#fafafa"
                                    strokeWidth="1"
                                    fill="none"
                                />
                            </svg>
                            <span className="absolute top-0 left-0 h-full w-full rounded-full bg-neutral-50 scale-0 duration-300 group-hover:scale-100">
                
                            </span>
                            <span className="mix-blend-difference text-white">
                                GET IN TOUCH
                            </span>
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-2.5 md:p-5 flex flex-col gap-2.5">
                        <div className="flex justify-between items-end">
                            <div>
                                <button 
                                    type="button" 
                                    onClick={() => navigateWithTransition('/projects')} 
                                    className='flex items-center gap-2.5 animated-item'
                                >
                                    <div className='grid grid-cols-2 h-2.5 w-2.5 gap-0.5'>
                                        <div className='w-full h-full bg-neutral-50'></div>
                                        <div className='w-full h-full bg-neutral-50'></div>
                                        <div className='w-full h-full bg-neutral-50'></div>
                                        <div className='w-full h-full bg-neutral-50'></div>
                                    </div>
                                    <p className='text-sm'>
                                        <HoverTranslate
                                            text='All Projects'
                                        />
                                    </p>
                                </button>
                            </div>
                            <button 
                                type='button' 
                                onClick={backToTop} 
                                className='bg-neutral-50 rounded-full w-12 h-12 flex text-xl items-center justify-center text-neutral-900 cursor-pointer hover:scale-[0.9] duration-300 animated-item'
                            >
                                <span>
                                    ↑
                                </span>
                            </button>
                        </div>
                    </div>                        
                </div>
            </section>
        </main>
    )
}