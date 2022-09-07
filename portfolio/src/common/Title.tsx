import React from 'react';
import s from './Title.module.css'
import dots from '../assets/images/dots.png'
import {backgroundImg} from "../assets/utilits/utilitsBg";

const Title = (props: {title: string}) => {
    return (
        <div className={s.blockTitle}>
            <div className={s.title}>
                <div className={s.dots} style={backgroundImg(dots)}></div>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
};

export default Title;