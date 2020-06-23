import React from 'react';
import './About.scss';

class About extends React.Component {

render() {
  return(
    <div className="about">
      <h2 className="about__header">my story</h2>
      <p className="about__body">
        Not just a web developer, but also: a psychology graduate, a board game connoisseur, a competitive hip hop dancer, an online video game streamer, a proud LGBTQ+ Korean.
      </p>
      <p className="about__body">
        But when it comes to web development, I am passionate about solving human-focused problems by connecting the right tools, resources, and people through a digital platform.
      </p>
    </div>
  )
}

}

export default About;