import React from 'react';
import './Projects.scss';

import Inventree from '../Inventree';

class Projects extends React.Component {

render() {
  return(
    <div className="projects">
      <h2 className="projects__header">projects</h2>
      <h3 className="projects__title">inventree</h3>
      <Inventree />
    </div>
  )
}

}

export default Projects;