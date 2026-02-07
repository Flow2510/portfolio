import './project.scss'

export default function Project ({title, text, background, tags, image, id}) {
    return(
        <section id={id} className="project" style={{ background: `${background}`}}>
            <img src={image} alt="" className='project__background'/>
            <div className="project__content">
                <h2 className="project__content-title">{title}</h2>
                {tags.map((tag, index) => (
                    <span key={tag + index}>{tag}</span>
                ))}
                <p className="project__content-text">{text}</p>
            </div>
        </section>
    )
}