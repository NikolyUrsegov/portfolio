import React from 'react';
import s from './Nav.module.scss'

const Nav = () => {
    return (
        <>
            <div className={s.nav}>
                <a href="src/header/nav/Nav">Home</a>
                <a href="#skills">Skills</a>
                <a href="src/header/nav/Nav">Projects</a>
                <a href="src/header/nav/Nav">Contacts</a>
            </div>
            <div className={s.smallNav}>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
            </div>
        </>
    );
};

export default Nav;