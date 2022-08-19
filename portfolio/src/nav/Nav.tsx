import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <>
            <div className={s.nav}>
                <a href="">Home</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
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