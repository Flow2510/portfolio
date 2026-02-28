import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation , Controller } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.scss';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Slider({ works }) {
    const [mainSwiper, setMainSwiper] = useState(null);
    const [bgSwiper, setBgSwiper] = useState(null);

    return(
        <section className='slider'>
            <Swiper
                style={{ height: '60%', width: '70%', position: "relative", zIndex: "5", border: "2px solid white", borderRadius: '0.5rem', maxWidth: "400px", transform: "translateY(-1.5rem)"}}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
                pagination={{
                    type: "progressbar"
                }}
                modules={[Autoplay, Pagination, Navigation, Controller]}
                onSwiper={setMainSwiper}
                controller={{ control: bgSwiper }}
            >
                {works.map((work, index) => (
                    <SwiperSlide style={{ position: 'relative', borderRadius: '0.5rem' }} key={work.id + index}>
                        <NavLink className={'slider__link'} to={`/work#${work.id}`}>
                            <img className='slider__image slider__image-front' src={work.image} alt="" />
                        </NavLink>
                    </SwiperSlide>
                ))}

            </Swiper>
            <Swiper
                style={{ height: '100%', width: '100%', position: "absolute", top: "0", left: "0",}}
                navigation
                loop
                modules={[Controller]}
                onSwiper={setBgSwiper}
                controller={{ control: mainSwiper }}
                slidesPerView={1}
                allowTouchMove={false}
            >
                {works.map((work, index) => (
                    <SwiperSlide style={{ position: 'relative' }} key={work.id + index}>
                        <div className='slider__background-wrapper'>
                            <img className='slider__image slider__image-background' src={work.image} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <motion.div 
                className='slider__nav'
                initial={{ y: 50 }}
                whileInView={{ y:0 }}
                transition={{ duration: 0.5 }}
            >
                <NavLink className='slider__nav-link' to={'/work'}>Projets</NavLink>
                <i className="fa-solid fa-bars slider__nav-icon"></i>
                <NavLink className='slider__nav-link' to={'/about'} >à propos</NavLink>
            </motion.div>
        </section>
    )
}