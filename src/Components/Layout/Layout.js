import React from 'react';
import Header from '../Header/Header'
import Main from '../../Containers/Main/Main'
import Sidebar from '../../Containers/Sidebar/Sidebar'

const layout = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Header></Header>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-10">
          <Main></Main>
        </div>
      </div>
    </div>
  );
}

export default layout;
