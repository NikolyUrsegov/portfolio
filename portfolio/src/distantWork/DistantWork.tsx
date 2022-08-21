import React from 'react';
import s from './DistantWork.module.scss'
import Title from "../common/Title";

const DistantWork = () => {
    return (
        <div className={s.block}>
            <div className={`${s.container}`}>
                <Title title={'Distant Work'}/>
                <button>Click me</button>
            </div>
        </div>
    );
};

export default DistantWork;