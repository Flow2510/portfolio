import { useState } from 'react';
import './contactmodal.scss';

export default function ContactModal({ setOpenModal }) {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmitContact = (e) => {
        e.preventDefault();
        setOpenModal(prev => !prev)
    }

    return(
        <div className="contact-modal">
            <div className="contact-modal__wrapper">
                <button className='contact-modal__button-close' onClick={() => setOpenModal(prev => !prev)}>
                    X
                </button>
                <h2 className='contact-modal__title'>Contact</h2>
                <form className='contact-modal__form' action="" onSubmit={handleSubmitContact}>
                    <label className='contact-modal__label' htmlFor="">
                        <p className='contact-modal__label-title'>Name</p>
                        <input className='contact-modal__label-input' type="text" onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className='contact-modal__label' htmlFor="">
                        <p className='contact-modal__label-title'>First Name</p>
                        <input className='contact-modal__label-input' type="text" onChange={(e) => setFirstName(e.target.value)}/>
                    </label>
                    <label className='contact-modal__label' htmlFor="">
                        <p className='contact-modal__label-title'>Email</p>
                        <input className='contact-modal__label-input' type="text" onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label className='contact-modal__label' htmlFor="">
                        <p className='contact-modal__label-title'>Message</p>
                        <textarea className='contact-modal__label-textarea' name="" id="" onChange={(e) => setName(e.target.value)}></textarea>
                    </label>
                    <button  className='contact-modal__button-send'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}