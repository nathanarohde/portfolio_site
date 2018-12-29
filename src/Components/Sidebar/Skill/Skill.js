import React from 'react'
import Subskill from '../Subskill/Subskill'

const skill = (props) => {
  let subskills = null;

  if ( props.skill[Object.keys(props.skill)[0]].subskills !== false ){
    subskills = props.skill[Object.keys(props.skill)[0]].subskills.map( subskill => {
      return <Subskill key={subskill[0]} subskill={subskill}></Subskill>
    })
  }

  return (
    <div>
      <p>{ Object.keys(props.skill)[0] }
        <span> { props.skill[Object.keys(props.skill)[0]].years } years</span>
      </p>
      { subskills }
    </div>
  )
}

export default skill;
