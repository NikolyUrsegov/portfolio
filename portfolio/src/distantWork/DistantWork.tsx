import React from 'react';
import s from './DistantWork.module.scss'
import {Fade} from "react-awesome-reveal";
import Title from "../common/Title";

const DistantWork = () => {
    return (
        <div className={s.block}>
            <div className={`${s.container}`}>
                <Title title={'Distant Work'}/>
                <Fade>
                    <button>Click me</button>
                </Fade>
            </div>
        </div>
    );
};

export default DistantWork;