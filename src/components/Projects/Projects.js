import React from 'react';
import './Projects.scss';

import Inventree from '../Inventree';
import Stalk from '../Stalk';

class Projects extends React.Component {

render() {
  return(
    <div className="projects">
      <h2 className="projects__header">projects</h2>
      <h3 className="projects__title">inventree</h3>
      <Inventree />
      <h3 className="projects__title">stalk market</h3>
      <Stalk />
    </div>
  )
}

}

export default Projects;