import React, { Component } from 'react';
import axios from 'axios';
import all_projects from '../../data/projects/projects.json';
import Project from '../../Components/Project/Project';

class Main extends Component {
  state = {
    projectList: new Array(all_projects.total),
    skillsFilter: {}
  }

  componentDidMount() {
    for (let i=1; i <= all_projects.total; i++ ){
      axios.get('https://raw.githubusercontent.com/nathanarohde/portfolio_site/master/src/data/projects/project' + i.toString() + '.json')
      .then( response => {
        this.addProject(response.data, i);
        this.addSkills(response.data, i);
      })
      .catch( error => {
        console.log('Error');
      })
    }
  }

  addProject = (project, index) => {
    let joined = this.state.projectList
    joined[index - 1] = project;
    this.setState({projectList:joined});
  }

  addSkills = (project, index) => {
    // re-renders everytime state is updated
    // could make skillsFiter a let variable
    for (let i = 0; i < project.skills.length; i++){
      if (this.state.skillsFilter[project.skills[i]]) {
        let joined = this.state.skillsFilter;
        joined[project.skills[i]].push(index);
        this.setState({skillsFilter:joined});
      } else {
        let joined = this.state.skillsFilter;
        joined[project.skills[i]] = [index]
        this.setState({skillsFilter:joined});
      }
    }
  }

  render () {
    let projects = (this.state.projectList).map(project =>{
      return <Project key={project.id} project={project}></Project>
    });

    // console.log(this.state.skillsFilter);

    return (
      <main>
        {projects}
      </main>
    )
  }
}

export default Main;
