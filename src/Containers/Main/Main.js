import React, { Component } from 'react';
import axios from 'axios';
import all_projects from '../../data/projects/projects.json';
import Project from '../../Components/Project/Project';

class Main extends Component {
  state = {
    projectList: []
  }

  componentDidMount() {
    for (let i=1; i <= all_projects.total; i++ ){
      axios.get('https://raw.githubusercontent.com/nathanarohde/portfolio_site/master/src/data/projects/project' + i.toString() + '.json')
      .then( response => {
        this.addProject(response.data);
      })
      .catch( error => {
        console.log('Error');
      })
    }
  }

  addProject = (project) => {
    let joined = this.state.projectList.concat(project);
    this.setState({projectList:joined});
  }

  render () {
    let projects = (this.state.projectList).map(project =>{
      return <Project key={project.id} project={project}></Project>
    });

    console.log(projects);

    return (
      <main>
        {projects}
      </main>
    )
  }
}

export default Main;
