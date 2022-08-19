import React from 'react';
import s from './ContactBlock.module.css'
import mail from '../../assets/images/mail.svg'
import phone from '../../assets/images/phone.svg'


const ContactBlock = () => {
    return (
        <div className={s.block}>
            <div className={s.item}>
                <div className={s.icon}>
                    <img src={mail}/>
                </div>
                <h6>Email</h6>
                <p>ursegov.2@mail.ru</p>
            </div>
            <div className={s.item}>
                <div className={s.icon}>
                    <img src={phone}/>
                </div>
                <h6>Phone</h6>
                <p>+7999999999</p>
            </div>
        </div>
    );
};

export default ContactBlock;