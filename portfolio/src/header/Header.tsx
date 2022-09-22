import React from 'react';
import s from './Header.module.scss'
import {backgroundImg} from "../assets/utilits/utilitsBg";
import bg from '../assets/images/headerBg.jpeg'
import tgIcon from '../assets/images/linksSvg/telegramSvg.svg'
import vkIcon from '../assets/images/linksSvg/vkSvg.svg'
import wsIcon from '../assets/images/linksSvg/wsSvg.svg'
import linkIcon from '../assets/images/linksSvg/linkSvg.svg'
import ReactTypingEffect from 'react-typing-effect';
const Header = () => {

    return (
        <div className={s.header} style={backgroundImg(bg)} id={'home'}>
            <div>
                <div className={s.caption}>
                    <div className={s.title}>
                        <h5>Hello</h5>
                    </div>
                    <div>
                        <h1>
                            <ReactTypingEffect
                                text={["Front-end Developer", "Ursegov Nikolai"]}
                                speed={200}
                                eraseSpeed={100}
                                eraseDelay={2000}
                                staticText={'I am'}
                            />
                        </h1>
                    </div>
                </div>
                <div className={s.socialIcon}>
                    <a href="tg://resolve?domain=@kolya_ursegov">
                        <span>
                            <img src={tgIcon}/>
                        </span>
                    </a>
                    <a href="https://vk.com/id307145735" target={'_blank'}>
                        <span>
                            <img src={vkIcon}/>
                        </span>
                    </a>
                    <a href="https://wa.me/79991636806" target={'_blank'}>
                        <span>
                            <img src={wsIcon}/>
                        </span>
                    </a>
                    <a href="" target={'_blank'}>
                        <span>
                            <img src={linkIcon} />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;