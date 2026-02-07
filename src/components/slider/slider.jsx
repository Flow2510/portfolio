import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider.scss';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';

export default function Slider({ works }) {
    return(
        <section className='slider'>
            <Swiper
                style={{ height: '100%', width: '100%'}}
                navigation
                loop
            >
                {works.map((work, index) => (
                    <SwiperSlide style={{position: 'relative', background: `${work.color}`}} key={work.id + index}>
                        <NavLink className={'slider__link'} to={`/work#${work.id}`}>
                            <img className='slider__image' src={work.image} alt="" />
                            <p className='slider__title'>{work.name}</p>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}