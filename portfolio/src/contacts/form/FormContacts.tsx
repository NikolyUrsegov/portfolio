import React from 'react';
import s from './FormContacts.module.css'

const FormContacts = () => {
    return (
        <form className={s.form}>
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
        </form>
    );
};

export default FormContacts;