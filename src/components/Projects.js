import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  render() {
    let projectItem;
    if (this.props.projects) {
      projectItem = this.props.projects.map(project => {
        return <ProjectItem key={project.title} project={project} />;
      });
    }

    return (
      <div className="Projects">
        <h3> Adasd</h3>

        {projectItem}
      </div>
    );
  }
}

export default Projects;
