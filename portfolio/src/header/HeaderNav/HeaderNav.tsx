import React, {useEffect, useState} from 'react';
import s from './HeaderNav.module.scss'
import Nav from "../nav/Nav";
import BurgerNav from "../nav/burgreNav/BurgerNav";

const HeaderNav = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > document.documentElement.clientHeight);
        });
    }, []);

    return (
        <div className={scroll ? s.header : `${s.header} ${s.show}`}>
            <div className={s.container}>
                <div className={s.logo}>
                    <span>Nikolai</span>
                </div>
                <Nav scroll={scroll}/>
                <BurgerNav scroll={scroll}/>
            </div>
        </div>
    );
};

export default HeaderNav;