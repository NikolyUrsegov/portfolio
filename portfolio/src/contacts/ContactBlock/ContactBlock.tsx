import React from 'react';
import s from './ContactBlock.module.scss'
import {Fade} from "react-awesome-reveal";
import mail from '../../assets/images/mail.svg'
import phone from '../../assets/images/phone.svg'


const ContactBlock = () => {
    return (
        <div className={s.block}>
            <Fade direction={'left'}>
                <div className={s.item}>
                    <div className={s.icon}>
                        <img src={mail}/>
                    </div>
                    <h6>Email</h6>
                    <p>ursegov.2@mail.ru</p>
                </div>
            </Fade>
            <Fade direction={"right"}>
                <div className={s.item}>
                    <div className={s.icon}>
                        <img src={phone}/>
                    </div>
                    <h6>Phone</h6>
                    <p>+7999999999</p>
                </div>
            </Fade>
        </div>
    );
};

export default ContactBlock;