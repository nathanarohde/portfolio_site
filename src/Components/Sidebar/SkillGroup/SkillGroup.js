import React from 'react'
import Skill from '../Skill/Skill.js'

const skillGroup = (props) => {

    const skills = props.skillGroups[props.skillGroup]
    console.log(skills);

    const listSkills = skills.map( (skill) =>
        <Skill key={ Object.keys(skill)[0] } skill={ skill }></Skill>
    );

    console.log(listSkills);
    return (
      <div>
        <h5>{ props.skillGroup }</h5>
        { listSkills }
      </div>
    )
}

export default skillGroup;
