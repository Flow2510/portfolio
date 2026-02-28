import { useState } from 'react'
import './project.scss'

export default function Project ({title, text, tags, image, id, counter, link, color}) {
    const [opacity, setOpacity] = useState(0.4)

    return(
        <section id={id} className="project">
            <div className='project__overlay'
                style={{ opacity: opacity}}
            >
            </div>
            <img src={image} alt="" className='project__background'/>
            <span className='project__counter'>#{counter}</span>
            <div className="project__content">
                <h2 className="project__content-title">{title}</h2>
                <div>
                    {tags.map((tag, index) => (
                        <span className='project__content-tag' key={tag + index}>{tag}</span>
                    ))}
                </div>
                <p className="project__content-text">{text}</p>
                <a 
                    className='project__content-link' 
                    href={link}
                    target='_blank'
                >
                    <i className="fa-solid fa-up-right-from-square"></i>
                </a>
            </div>
        </section>
    )
}