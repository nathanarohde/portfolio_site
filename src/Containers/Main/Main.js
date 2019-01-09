import React, { Component } from 'react';
import axios from 'axios';
import all_projects from '../../data/projects/projects.json';

class Main extends Component {
  state = {
    projectList: {}
  }

  componentDidMount() {
    for (let i=1; i <= all_projects.total; i++ ){
      console.log('https://raw.githubusercontent.com/nathanarohde/portfolio_site/src/data/projects/project' + i.toString() + '.json');
      // axios.get('https://raw.githubusercontent.com/nathanarohde/portfolio_site/src/data/projects/project' + i.toString() + '.json')
      // .then( reponse => {
      //
      // })
      // .then( response => {
      //   // this.setDisplayedCartoons( response.data.lastCartoon );
      //   // this.props.onSetCurrentDisplayedCartoon(
      //   //   parseInt(response.data.lastCartoon)
      //   // )
      // })
    }
  }

  render () {
    const projects ="";

    return (
      <main>
        {projects}
      </main>
    )
  }
}

export default Main;
