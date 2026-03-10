import ScrambleText from '../scrambletext/scrambletext';
import './info.scss';

export default function Info() {
    return(
        <section className="info">
            <ScrambleText 
                titleClass="info__title"
                text={"à propos"}
            />
            <div className='info__content'>
                <p className='info__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad temporibus eveniet natus ducimus sequi inventore illo delectus cum minima laborum dolor aspernatur quasi quaerat quam modi, laudantium quis adipisci?</p>
                <p className='info__content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a sint voluptate animi molestiae dicta nemo voluptas rem veniam! Ratione ipsam, nesciunt consequuntur quod dolor repellendus.</p>
            </div>
        </section>
    )
}