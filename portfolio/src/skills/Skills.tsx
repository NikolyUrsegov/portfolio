import React from 'react';
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/Title";
import js from '../assets/images/javascript.svg'

const Skills = () => {
    return (
        <div className={s.skillsBlock} id={'skills'}>
            <Title title={'Skills.'}/>
            <div className={s.skills}>
                <Skill title={'JavaScript'}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores exercitationem repellat repudiandae sequi"}
                       js={js}
                />
                <Skill title={'HTML'}
                       description={"velit. Aliquam consequuntur dolor dolorem facilis laborum modi nulla perferendis quae quam, quasi ratione sint veritatis voluptatum. "}
                       js={js}
                />
                <Skill title={'CSS'}
                       description={"velit. Aliquam consequuntur dolor dolorem facilis laborum modi nulla perferendis quae quam, quasi ratione sint veritatis voluptatum. "}
                       js={js}
                />
                <Skill title={'CSS'}
                       description={"velit. Aliquam consequuntur dolor dolorem facilis laborum modi nulla perferendis quae quam, quasi ratione sint veritatis voluptatum. "}
                       js={js}
                />
                <Skill title={'CSS'}
                       description={"velit. Aliquam consequuntur dolor dolorem facilis laborum modi nulla perferendis quae quam, quasi ratione sint veritatis voluptatum. "}
                       js={js}
                />
                <Skill title={'CSS'}
                       description={"velit. Aliquam consequuntur dolor dolorem facilis laborum modi nulla perferendis quae quam, quasi ratione sint veritatis voluptatum. "}
                       js={js}
                />
            </div>
        </div>
    );
};

export default Skills;