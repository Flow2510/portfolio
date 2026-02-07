import { Link } from 'react-router-dom';
import './hero.scss';

export default function Hero() {
    return(
        <section className='hero'>
            <div className='hero__header'>
                <h2 className='hero__header-title'>Title</h2>
            </div>
            <div className='hero__content'>
                <h1 className='hero__content-title'>Title</h1>
            </div>
            <div className='hero__footer'>
                <Link className='hero__footer-link'>Contact</Link>
            </div>
        </section>
    )
}