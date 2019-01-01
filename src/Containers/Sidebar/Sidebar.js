import React, { Component } from 'react';
import skillGroups from '../../data/skills.json'
import SkillGroup from '../../Components/Sidebar/SkillGroup/SkillGroup'

class Sidebar extends Component {

  render () {
    const skillList = Object.keys( skillGroups )
                            .map( skillGroup => {
                              return <SkillGroup key={skillGroup} skillGroups={skillGroups} skillGroup={skillGroup}></SkillGroup>
                            })

    return (
      <nav>
        { skillList }
      </nav>
    )
  }
}

export default Sidebar;
