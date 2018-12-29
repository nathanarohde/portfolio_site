import React from 'react'

const subskill = (props) => {
  let years = props.subskill[1] > 1 ? 'years' : 'year';

  return (
    <p>{props.subskill[0]} <span>{props.subskill[1]} {years}</span></p>
  )
}

export default subskill;
