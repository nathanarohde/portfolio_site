import React from "react"

const project = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>{ props.project.title }</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8 text-left">
          <p>{ props.project.description }</p>
          <p>{ props.project.skills }</p>
          <p>{ props.project.link }</p>
        </div>
      </div>
    </div>
  );
}

export default project;
