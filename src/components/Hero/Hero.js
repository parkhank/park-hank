import React from 'react';
import './Hero.scss';

import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.png';
import emailIcon from '../../assets/email.png';

class Hero extends React.Component {

render() {
  return(
    <div className="hero">
      <div className="hero__filter">
        <div className="hero__header">
          <h1>Hank</h1>
          <h1>Park</h1>
        </div>
        <div className="hero__divider"></div>
        <div className="hero__socials">
          <div className="hero__socials-line">
            <img className="hero__socials-icon" src={githubIcon}/>
            <a href="https://github.com/parkhank">/parkhank</a>
          </div>
          <div className="hero__socials-line">
            <img className="hero__socials-icon" src={linkedinIcon}/>
            <a href="https://linkedin.com/in/parkhank">/parkhank</a>
          </div>
          <div className="hero__socials-line">
            <img className="hero__socials-icon" src={emailIcon}/>
            <p>park.hty@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

}

export default Hero;