import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    js: string
}

const Skill = (props: SkillPropsType) => {
    return (
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
    );
};

export default Skill;