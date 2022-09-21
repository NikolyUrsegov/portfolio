import React from 'react';
import s from './Main.module.scss'
import {Fade} from "react-awesome-reveal";
import dots from '../assets/images/dots.png'
import Tilt from 'react-parallax-tilt';
import myPhoto from '../assets/images/MyFoto.jpg'
import {backgroundImg} from "../assets/utilits/utilitsBg";


const Main = () => {

    return (

        <div className={s.mainBlock} id={'main'}>
            <div className={s.block}>
                <div className={s.photo}>
                    <Tilt className={s.img} style={backgroundImg(myPhoto)}></Tilt>
                    <div className={s.dots} style={backgroundImg(dots)}></div>
                </div>

                <div className={s.text}>
                    <Fade duration={2000}>
                        <h3>About Me.</h3>
                        <span>Web developer</span>
                        <p>
                            I am <b>Ursegov Nikolai</b> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not
                            only five centuries, but also the leap into electronic but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Main;