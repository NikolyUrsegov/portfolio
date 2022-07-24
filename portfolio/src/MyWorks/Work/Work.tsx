import React from 'react';
import s from './Work.module.css'

type WorkPropsType = {
    title: string
    description: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={s.workBlock}>
            <div className={s.block}>
                <div className={s.photo}></div>
                <button>Watch</button>
            </div>
            <div className={s.text}>
                <span>{props.title}</span>
                <span>{props.description}</span>
            </div>

        </div>
    );
};

export default Work;