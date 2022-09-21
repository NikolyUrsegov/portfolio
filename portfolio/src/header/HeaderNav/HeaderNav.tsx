import React from 'react';
import s from './HeaderNav.module.scss'
import Nav from "../nav/Nav";

const HeaderNav = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.logo}>
                    <span>Nikolai</span>
                </div>
                <Nav/>
            </div>
        </div>
    );
};

export default HeaderNav;