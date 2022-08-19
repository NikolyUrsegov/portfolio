import React from 'react';
import s from './Header.module.css'
import Nav from "../nav/Nav";

const Header = () => {
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

export default Header;