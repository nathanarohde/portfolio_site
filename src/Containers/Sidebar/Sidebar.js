import React, { Component } from 'react';
import skillGroups from '../../data/skills.json'

class Sidebar extends Component {
  getSkillSets(skillGroup) {
    console.log( 'Fired' );
  }
  // listGroup( skillGroup ) {
  //   return skillGroup;
  //   // return <p> { skillGroup } <p>
  // }
  // listGroup( skillGroup )

  render () {
    // const listSkillGroups = Object.keys( skillGroups )
    //                           .map( skill => {
    //                             return skillGroups[skill]
    //                           });
    // console.log( listSkillGroups );

    const listSkills = Object.keys( skillGroups )
                              .map( skill => {
                                return skillGroups[skill]
                              }).forEach(function (skillGroup) {
      console.log( skillGroup );
      skillGroup.forEach(function(skills){
        console.log(skills);
        Object.keys( skills )
              .map( skill => {
                console.log(skill)
                console.log(skills[skill].years)
                if ( skills[skill].subskills !== false ){
                  console.log(skills[skill].subskills)
                  skills[skill].subskills.forEach(function(subskill){
                    console.log(subskill[0])
                    console.log(subskill[1])
                  })
                }
              })
      });
    });


    const skillList = Object.keys( skillGroups )
                            .map( skillGroup => {
                              return (
                                // <div>
                                  <h5 key={ skillGroup }>{ skillGroup } </h5>
                                //   { this.getSkillSets(skillGroup) }
                                // </div>
                              )
                            })
                          // .forEach(function(skillGroup){
                          //     console.log(skillGroup);
                          //   });

    return (
      <nav>
        { skillList }
      </nav>
    )
  }
}

export default Sidebar;
