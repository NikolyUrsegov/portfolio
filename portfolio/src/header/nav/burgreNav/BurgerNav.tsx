import React, {useState} from 'react';
import s from "./BurgerNav.module.scss";
import {Link} from "react-scroll";

type BurgerNavPropsType = {
    scroll: boolean
}

const BurgerNav: React.FC<BurgerNavPropsType> = ({scroll}) => {
    const [isOpenClose, setOpenClose] = useState(false)
    return (
        <>
            <div className={!scroll ? s.BurgerNav : `${s.BurgerNav} ${s.scroll}`}>
                <div className={isOpenClose ? s.nav : `${s.nav} ${s.show}`}>
                    <Link activeClass={s.active} to="home" spy={true} smooth={true} offset={-10} duration={500}
                          delay={100} onClick={() => setOpenClose(!isOpenClose)}>
                        Home
                    </Link>
                    <Link activeClass={s.active} to="aboutMe" spy={true} smooth={true} offset={0} duration={500}
                          delay={100} onClick={() => setOpenClose(!isOpenClose)}>
                        About me
                    </Link>
                    <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={0} duration={500}
                          delay={100} onClick={() => setOpenClose(!isOpenClose)}>
                        Skills
                    </Link>
                    <Link activeClass={s.active} to="project" spy={true} smooth={true} offset={0} duration={500}
                          delay={100} onClick={() => setOpenClose(!isOpenClose)}>
                        Projects
                    </Link>
                    <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={0} duration={500}
                          delay={100} onClick={() => setOpenClose(!isOpenClose)}>
                        Contacts
                    </Link >
                </div>
                <div className={s.smallNav} onClick={() => setOpenClose(!isOpenClose)}>
                </div>
            </div>
        </>
    );
};

export default BurgerNav;