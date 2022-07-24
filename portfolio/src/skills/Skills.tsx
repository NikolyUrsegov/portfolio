import React from 'react';
import s from './Skills.module.css'
import container from '../common/style/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${container.container} ${s.skillsContainer}`}>
                <h2 style={{background: 'red'}}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'Js'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores exercitationem repellat repudiandae sequi"}/>
                    <Skill title={'HTML'} description={"velit. Aliquam consequuntur dolor dolorem facilis laborum modi nulla perferendis quae quam, quasi ratione sint veritatis voluptatum. "}/>
                    <Skill title={'CSS'} description={"velit. Aliquam consequuntur dolor dolorem facilis laborum modi nulla perferendis quae quam, quasi ratione sint veritatis voluptatum. "}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;