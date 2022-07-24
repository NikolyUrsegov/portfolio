import React from 'react';
import s from './Contacts.module.css'
import container from '../common/style/Container.module.css'
import FormContacts from "./form/FormContacts";

const Contacts = () => {
    return (
        <div className={s.block}>
            <div className={`${container.container} ${s.container}`}>
                <h2 style={{background: 'red'}}>Contacts</h2>
                <FormContacts/>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;