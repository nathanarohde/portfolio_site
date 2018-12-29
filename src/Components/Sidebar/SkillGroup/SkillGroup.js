import React from 'react'
import Skill from '../Skill/Skill'

const skillGroup = (props) => {

    const skills = props.skillGroups[props.skillGroup]

    const listSkills = skills.map( (skill) =>
        <Skill key={ Object.keys(skill)[0] } skill={ skill }></Skill>
    );

    return (
      <div>
        <h5>{ props.skillGroup }</h5>
        { listSkills }
      </div>
    )
}

export default skillGroup;
