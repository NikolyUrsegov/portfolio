import React from 'react';
import container from '../common/style/Container.module.css'
import s from './DistantWork.module.css'

const DistantWork = () => {
    return (
        <div className={s.block}>
            <div className={`${container.container} ${s.container}`}>
                <h2 style={{background: 'red'}}>Distant Work</h2>
                <button>Click me</button>
            </div>
        </div>
    );
};

export default DistantWork;