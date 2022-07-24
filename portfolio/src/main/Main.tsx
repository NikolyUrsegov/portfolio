import React from 'react';
import s from './Main.module.css'
import container from '../common/style/Container.module.css'

const Main = () => {
    return (

        <div className={s.mainBlock}>
            <div className={container.container}>
                <div className={s.text}>
                    <span>Hello</span>
                    <h2>My name Ursegov Nikolya</h2>
                    <span>I am frontend developer</span>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
};

export default Main;