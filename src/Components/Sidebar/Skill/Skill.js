import React from 'react'

const skill = (props) => {
  console.log(Object.keys(props.skill));
  // { props.skill }
  return (
    <p>{Object.keys(props.skill)[0]}
      <span> X years</span>
    </p>
  )
}

export default skill;
