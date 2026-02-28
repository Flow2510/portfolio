import { NavLink } from 'react-router-dom';
import './projectinfobar.scss';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function ProjectInfoBar({ image, title, date, link, works }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return(
        <motion.div 
            className='project-info-bar'
            initial={{ y: 100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            transition={{ duration: 0.5 }}
        >
            <NavLink className='project-info-bar__home' to={"/"}>
                <i className="fa-regular fa-house"></i>
            </NavLink>
            <div className='project-info-bar__wrapper'>
                <img className='project-info-bar__image' src={image} alt="" />
                <div className='project-info-bar__content'>
                    <p className='project-info-bar__content-subtitle'>{date}</p>
                    <h3 className='project-info-bar__content-title'>{title}</h3>
                </div>
                <a href={link} className='project-info-bar__content-link'>
                    <i className="fa-solid fa-square-arrow-up-right"></i>
                </a>
            </div>
            <button className='project-info-bar__button' onClick={() => setMenuIsOpen(prev => !prev)}>
                <i className="fa-solid fa-bars"></i>
            </button>
            {menuIsOpen &&
                <nav className='project-info-bar__menu'>
                    {works.map((work, index) => 
                        <a href={`#${work.id}`} key={work.id + index} className='project-info-bar__menu-link'>{work.name}</a>
                    )}
                </nav>
            }
        </motion.div>
    )
} 