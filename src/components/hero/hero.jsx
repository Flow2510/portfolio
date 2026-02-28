import './hero.scss';
import Cross from '../cross/cross';

export default function Hero({ setOpenModal }) {
    return(
        <section className='hero'>
            <div className='hero__header'>
                <p className='hero__header-text'>Folio: 02</p>
                <h2 className='hero__header-title'>Florian S.</h2>
                <p className='hero__header-text'>©2026</p>
            </div>
            <div className='hero__content'>
                <div className='hero__cross-left'>
                    <Cross />
                    <Cross />
                </div>
                <h1 className='hero__content-title'>
                    <span>Développeur</span>
                    <span>Frontend React</span>
                    <span>Junior</span>
                </h1>
                <div className='hero__cross-right'>
                    <Cross />
                    <Cross />
                </div>
            </div>
            <div className='hero__footer'>
                <button className='hero__footer-button' onClick={() => setOpenModal(prev => !prev)}>Contact</button>
            </div>
        </section>
    )
}