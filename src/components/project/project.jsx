import { useRef, useState } from 'react'
import './project.scss'
import { useMotionValueEvent, useScroll } from 'motion/react';
import ScrambleText from '../scrambletext/scrambletext';

export default function Project ({title, text, tags, image, id, date, setCurrentIndex, index }) {
    const [opacity, setOpacity] = useState(0.4)
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 75%", "end 75%"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.5) {
            setCurrentIndex(index)
        }
    })

    return(
        <section id={id} className="project" ref={ref}>
            <div className='project__overlay'
                style={{ opacity: opacity}}
            >
            </div>
            <img src={image} alt="" className='project__background'/>
            
            <div className="project__content">
                <ScrambleText 
                    text={title}
                    className={"project__content-title"}
                />
                <p>{date}</p>
                <div>
                    {tags.map((tag, index) => (
                        <span className='project__content-tag' key={tag + index}>{tag}</span>
                    ))}
                </div>
                <p className="project__content-text">{text}</p>
            </div>
        </section>
    )
}