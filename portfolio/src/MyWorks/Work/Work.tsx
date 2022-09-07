import React from 'react';
import s from './Work.module.scss'
import vkImg from "../../assets/images/vk.jpeg";
import {backgroundImg} from "../../assets/utilits/utilitsBg";

type WorkPropsType = {
    title: string
    description: string
    backgroundImgVK: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={s.workBlock}>
            <div className={s.block}>
                <div className={s.photo} >
                    <div className={s.img} style={backgroundImg(props.backgroundImgVK)}></div>
                    <button>Watch</button>
                </div>
            </div>
            <div className={s.text}>
                <h6>{props.title}</h6>
            </div>

        </div>
    );
};

export default Work;