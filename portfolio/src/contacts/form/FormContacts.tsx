import React from 'react';
import s from './FormContacts.module.scss'
import {Fade} from "react-awesome-reveal";


const FormContacts = () => {
    return (

        <form className={s.form}>
            <Fade duration={2000}>
                <div className={s.block}>
                    <div className={s.item}>
                        <input defaultValue={'Name'}/>
                    </div>
                    <div className={s.item}>
                        <input defaultValue={'Email'}/>
                    </div>
                </div>
                <div className={s.areaBlock}>
                    <textarea defaultValue={'Message'}/>
                </div>
                <button type={'submit'}>Submit</button>
            </Fade>
        </form>
    );
};

export default FormContacts;