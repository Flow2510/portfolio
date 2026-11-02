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
                            <h3 className="font-semibold text-xl">1. Data Controller</h3>
                            <div>
                                <p>
                                    This website is operated by Sendra Florian,
                                    who can be contacted at the following email address: <a href="mailto:sendra.florian@gmail.com" target="_blank" className="underline">sendra.florian@gmail.com.</a>
                                </p>
                                <p>
                                    Sendra Florian is the data controller responsible for the processing of personal data.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">2. Personal Data Collected</h3>
                            <div>
                                <p>
                                    When you use the contact form, the information you provide
                                    is collected in order to process your request.
                                </p>
                                <p>
                                    Depending on the fields included in the form, this information
                                    may include your name, email address, subject of your request,
                                    and the content of your message.
                                </p>
                                <p>
                                    Only the data necessary to process your request should be collected.
                                </p>
                                <p>
                                    When browsing the website, technical data may also be processed
                                    by the hosting provider to ensure the website's operation,
                                    maintenance, and security.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">3. Purposes and Legal Bases</h3>
                            <div>
                                <p>
                                    Data submitted through the contact form is used to respond
                                    to incoming requests. This processing is based on the
                                    legitimate interest of the data controller in responding
                                    to inquiries received or, where applicable, on pre-contractual
                                    measures taken at the request of the data subject.
                                </p>
                                <p>
                                    Technical data that is strictly necessary may be processed
                                    to ensure the operation and security of the website,
                                    on the applicable legal basis for the processing concerned.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">4. Hosting and External Services</h3>
                            <div>
                                <p>
                                    This website is hosted and deployed using Vercel. As part
                                    of this service, certain technical data may be processed
                                    to ensure the website's availability, operation, and security.
                                </p>
                                <p>
                                    The website may load fonts from an external service.
                                    Loading these resources may involve the transmission
                                    of technical data, including your IP address, to the
                                    relevant provider.
                                </p>
                                <p>
                                    GitHub is used to manage and host the project's source code.
                                    Its use for development purposes does not necessarily mean
                                    that visitors directly transmit personal data to GitHub.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">5. Cookies and Tracking Technologies</h3>
                            <div>
                                <p>
                                    This website does not use audience measurement tools
                                    such as Google Analytics.
                                </p>
                                <p>
                                    Any cookies or other tracking technologies used depend
                                    on the features actually available on the website and
                                    the external services integrated into it.
                                    Tracking technologies that are not exempt from consent
                                    requirements are only used after the required consent
                                    has been obtained in accordance with applicable regulations.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">6. Data Recipients</h3>
                            <p>
                                Data may be accessed by the data controller and relevant
                                technical service providers, to the extent necessary for
                                the performance of their duties.
                                The actual recipients depend on the services enabled
                                and the website's configuration.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">7. Data Retention Period</h3>
                            <div>
                                <p>
                                    Personal data is retained for as long as necessary
                                    to fulfil the purpose for which it was collected.
                                </p>
                                <p>
                                    Messages submitted through the contact form are retained for 6 months.
                                </p>
                                <p>
                                    Technical data and security logs are retained for 6 months.
                                </p>
                                <p>
                                    Once the applicable retention period has expired,
                                    the data is deleted or archived where justified and permitted.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">8. Your Rights</h3>
                            <div>
                                <p>
                                    In accordance with applicable regulations, you may,
                                    subject to the conditions set out therein, request
                                    access to your personal data, its rectification,
                                    erasure, restriction of processing, or exercise
                                    your right to object.
                                </p>
                                <p>
                                    You may also exercise your right to data portability
                                    where applicable.
                                </p>
                                <p>
                                    To exercise your rights, please contact:
                                    [contact email address].
                                </p>
                                <p>
                                    You may also lodge a complaint with the French Data
                                    Protection Authority (CNIL):
                                    {" "}
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
                            <h3 className="font-semibold text-xl">9. Security</h3>
                            <p>
                                Appropriate technical and organisational measures are
                                implemented to protect personal data, depending on
                                the resources and services used.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2.5 animated-item">
                            <h3 className="font-semibold text-xl">10. Updates</h3>
                            <p>
                                This policy may be updated to reflect changes to the
                                website, its features, or applicable regulations.
                            </p>
                        </div>

                        <h3 className="text-sm pt-15">
                            Last updated: October 24, 2026
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