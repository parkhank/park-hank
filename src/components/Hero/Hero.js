import React from 'react';
import './Hero.scss';

import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.png';
import emailIcon from '../../assets/email.png';
import arrowDown from '../../assets/arrowdown.png';

class Hero extends React.Component {

render() {
  return(
    <div className="hero">
      <div className="hero__header">
        <h1>Hank</h1>
        <h1>Park</h1>
      </div>
      <div className="hero__divider"></div>
      <div className="hero__socials">
        <div className="hero__socials-line">
          <img className="hero__socials-icon" src={githubIcon} alt="github icon"/>
          <a href="https://github.com/parkhank">/parkhank</a>
        </div>
        <div className="hero__socials-line">
          <img className="hero__socials-icon" src={linkedinIcon} alt="linkedin icon"/>
          <a href="https://linkedin.com/in/parkhank">/parkhank</a>
        </div>
        <div className="hero__socials-line">
          <img className="hero__socials-icon" src={emailIcon} alt="email icon"/>
          <a href="mailto:park.hty@gmail.com">park.hty@gmail.com</a>
        </div>
      </div>
      <img
        className="hero__icon"
        src={arrowDown}
        alt="arrow down"/>
    </div>
  )
}

}

export default Hero;