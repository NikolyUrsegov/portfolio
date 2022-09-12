import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import {backgroundImg} from "../assets/utilits/utilitsBg";
import bg from '../assets/images/headerBg.jpeg'
import tgIcon from '../assets/images/linksSvg/telegramSvg.svg'
import vkIcon from '../assets/images/linksSvg/vkSvg.svg'
import wsIcon from '../assets/images/linksSvg/wsSvg.svg'
import linkIcon from '../assets/images/linksSvg/linkSvg.svg'

const Header = () => {
    const [span, setSpan] = useState('active')
    const [span1, setSpan1] = useState('hidden')

    useEffect(() => {
        const int = setInterval(() => {
            if (span == 'active') {
                setSpan('hidden')
                setSpan1('active')
            }
            if (span == 'hidden') {
                setSpan('active')
                setSpan1('hidden')
            }
        }, 1500)
        return () => {
            clearInterval(int)
        }
    })
    return (
        <div className={s.header} style={backgroundImg(bg)}>
            <div>
                <div className={s.caption}>
                    <div className={s.title}>
                        <h5>Hello</h5>
                    </div>
                    <div>
                        <h1>
                            <span>I am </span>
                            <span hidden={span == 'hidden'}>Ursegov Nikolay</span>
                            <span hidden={span1 == 'hidden'}>Front-end Developer</span>

                        </h1>
                    </div>
                </div>
                <div className={s.socialIcon}>
                    <a href="">
                        <span>
                            <img src={tgIcon}/>
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <img src={vkIcon}/>
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <img src={wsIcon}/>
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <img src={linkIcon}/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;