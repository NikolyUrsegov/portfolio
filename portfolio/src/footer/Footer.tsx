import React from 'react';
import container from '../common/style/Container.module.css'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.block}>
            <div className={`${s.container} ${container.container}`}>
                <h2 style={{background: 'red'}}>Ursegov Nikolai</h2>
                <div className={s.blockIcon}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <span>All rights reserved</span>
            </div>

        </div>
    );
};

export default Footer;