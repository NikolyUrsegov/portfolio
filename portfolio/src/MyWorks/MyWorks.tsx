import React from 'react';
import s from './MyWorks.module.scss'
import Work from "./Work/Work";
import Title from "../common/Title";
import vkImg from '../assets/images/vk.jpeg'

const MyWorks = () => {

    return (
        <div className={s.worksBlock} id={'project'}>
                <Title title={'My Works.'}/>
                <div className={s.works}>
                    <Work title={'Social network'}
                          description={'sssss ddfdfdfd fddfdffdfd fdfdfd  dffdfdfd'}
                          backgroundImgVK={vkImg}
                    />
                    <Work title={'Todo List'}
                          description={'sssss ddfdfdfd fddfdffdfd fdfdfd  dffdfdfd'}
                          backgroundImgVK={vkImg}
                    />
                </div>
        </div>
    );
};

export default MyWorks;