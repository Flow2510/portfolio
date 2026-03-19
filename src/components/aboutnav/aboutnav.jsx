import { NavLink } from 'react-router-dom';
import './aboutnav.scss';
import { useState } from 'react';
import { motion } from 'motion/react';
import ContactModal from '../contactmodal/contactmodal';

export default function AboutNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [contactModalIsOpen, setContactModalIsOpen] = useState(false);

    const contactHandleClick = (e) => {
        setMenuIsOpen(prev => !prev);
        setContactModalIsOpen(prev => !prev)
    }

    return(
        <motion.div 
            className='about-nav'
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='about-nav__wrapper'>
                <NavLink 
                    className='about-nav__link'
                    to={'/'}
                >
                    <i className="fa-regular fa-house"></i>
                </NavLink>
                <h3 className='about-nav__title'>
                    Contact
                </h3>
                <button
                    className='about-nav__button'
                    onClick={() => setMenuIsOpen(prev => !prev)}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                {menuIsOpen && 
                    <motion.nav 
                        className='about-nav__menu'
                        initial={{ y: 200 }}
                        animate={{ y:0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <a href="" target='_blank' onClick={() => (setMenuIsOpen(prev => !prev))}>Github</a>
                        <a href="" target='_blank' onClick={() => (setMenuIsOpen(prev => !prev))}>Linkedin</a>
                        <button
                            onClick={contactHandleClick}
                        >
                            Mail
                        </button>
                    </motion.nav>
                }
                {contactModalIsOpen &&
                    <ContactModal />
                }
            </div>
        </motion.div>
    )
}