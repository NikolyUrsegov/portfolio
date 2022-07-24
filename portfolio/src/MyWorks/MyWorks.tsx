import React from 'react';
import s from './MyWorks.module.css'
import container from '../common/style/Container.module.css'
import Work from "./Work/Work";

const MyWorks = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${container.container} ${s.containerWorks}`}>
                <h2 style={{background: 'red'}}>My Works</h2>
                <div className={s.works}>
                    <Work title={'jsss'} description={'sssss ddfdfdfd fddfdffdfd fdfdfd  dffdfdfd'}/>
                    <Work title={'jsss'} description={'sssss ddfdfdfd fddfdffdfd fdfdfd  dffdfdfd'}/>
                </div>

            </div>
        </div>
    );
};

export default MyWorks;