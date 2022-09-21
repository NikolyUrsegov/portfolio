import React from 'react';
import s from './Skill.module.scss';
import {Fade} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';



type SkillPropsType = {
    title: string
    description: string
    js: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <Tilt>
            <Fade direction={'up'}>
                <div className={s.skillBlock}>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <img src={props.js} alt="js"/>
                        </div>
                        <div className={s.description}>
                            <h6>{props.title}</h6>
                            <span>{props.description}</span>
                        </div>
                    </div>
                </div>
            </Fade>
        </Tilt>
    );
};

export default Skill;