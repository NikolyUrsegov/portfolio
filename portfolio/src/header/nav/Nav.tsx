import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll";

type NavPropsType = {
    scroll: boolean
}
const Nav: React.FC<NavPropsType> = ({scroll}) => {

    return (
        <>
            <div className={!scroll? s.nav : `${s.scroll} ${s.nav}`}>
                <Link activeClass={s.active} to="home" spy={true} smooth={true} offset={-10} duration={500} delay={100}>
                    Home
                </Link>
                <Link activeClass={s.active} to="aboutMe" spy={true} smooth={true} offset={1} duration={500} delay={100}>
                    About me
                </Link>
                <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={1} duration={500} delay={100}>
                    Skills
                </Link>
                <Link activeClass={s.active} to="project" spy={true} smooth={true} offset={1} duration={500} delay={100}>
                    Projects
                </Link>
                <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={1} duration={500} delay={100}>
                    Contacts
                </Link>
            </div>
        </>
    );
};

export default Nav;