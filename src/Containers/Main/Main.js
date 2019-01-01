import React, { Component } from 'react';
import project6 from '../../data/projects/project6.json';

class Main extends Component {
  render () {
    return (
      <main>
        Portfolio goes here
        <div>
          { project6.title }
        </div>
      </main>
    )
  }
}

export default Main;
