import React, { Component } from 'react';
import skillGroups from '../../data/skills.json'
import SkillGroup from '../../Components/Sidebar/SkillGroup/SkillGroup'

class Sidebar extends Component {

  render () {
    // const listSkills = Object.keys( skillGroups )
    //                           .map( skill => {
    //                             return skillGroups[skill]
    //                           }).forEach(function (skillGroup) {
    //   console.log( skillGroup );
    //   skillGroup.forEach(function(skills){
    //     console.log(skills);
    //     Object.keys( skills )
    //           .map( skill => {
    //             console.log(skill)
    //             console.log(skills[skill].years)
    //             if ( skills[skill].subskills !== false ){
    //               console.log(skills[skill].subskills)
    //               skills[skill].subskills.forEach(function(subskill){
    //                 console.log(subskill[0])
    //                 console.log(subskill[1])
    //               })
    //             }
    //           })
    //   });
    // });

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
