import './hero.scss';
import Cross from '../cross/cross';
import ScrambleText from '../scrambletext/scrambletext';

export default function Hero({ setOpenModal }) {
    return(
        <section className='hero'>
            <div className='hero__header'>
                <ScrambleText 
                    text={"Folio: 02"}
                    titleClass={'hero__header-text'}
                />
                <ScrambleText 
                    text={"Florian S."}
                    titleClass={'hero__header-title'}
                />
                <ScrambleText 
                    text={"©2026"}
                    titleClass={'hero__header-text'}
                />
            </div>
            <div className='hero__content'>
                <div className='hero__cross-left hero__cross'>
                    <Cross />
                    <Cross />
                </div>
                <h1 className='hero__content-title'>
                    <span>Développeur</span>
                    <span>Frontend React</span>
                    <span>Junior</span>
                </h1>
                <div className='hero__cross-right hero__cross'>
                    <Cross />
                    <Cross />
                </div>
            </div>
            <div className='hero__footer'>
                <button className='hero__footer-button' onClick={() => setOpenModal(prev => !prev)}>
                    <ScrambleText 
                        text={'Contact'}
                        titleClass={'hero__footer-button--text'}
                    />
                </button>
            </div>
        </section>
    )
}