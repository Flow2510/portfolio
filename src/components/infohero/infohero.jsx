import ScrambleText from '../scrambletext/scrambletext';
import './infohero.scss';

export default function InfoHero() {
    return(
        <section className="info-hero">
            <div className='info-hero__title-wrapper'>
                <ScrambleText 
                    titleClass="info-hero__title"
                    text={"à propos"}
                />
            </div>
            <div className='info-hero__content'>
                <p className='info-hero__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad temporibus eveniet natus ducimus sequi inventore illo delectus cum minima laborum dolor aspernatur quasi quaerat quam modi, laudantium quis adipisci?</p>
                <p className='info-hero__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a sint voluptate animi molestiae dicta nemo voluptas rem veniam! Ratione ipsam, nesciunt consequuntur quod dolor repellendus.</p>
            </div>
        </section>
    )
}