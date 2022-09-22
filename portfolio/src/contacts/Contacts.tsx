import React from 'react';
import s from './Contacts.module.scss'
import FormContacts from "./form/FormContacts";
import Title from "../common/Title";
import ContactBlock from "./ContactBlock/ContactBlock";

const Contacts = () => {
    return (
        <div className={s.block} id={'contacts'}>
            <div className={`${s.container}`}>
                <Title title={'Contacts.'}/>
                <ContactBlock/>
                <FormContacts/>
            </div>
        </div>
    );
};

export default Contacts;