import React from 'react';
import './Stalk.scss';

import stalkScreenshot from '../../assets/stalk.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.png';
import sass from '../../assets/sass.png';

class Stalk extends React.Component {

  render() {
    return(
      <div className="stalk">
        <div className="stalk__visuals">
          <img
            src={stalkScreenshot}
            alt="screenshot of stalk market app"
            className="stalk__screenshot"/>
          <div className="stalk__icons">
            <img
              src={sass}
              alt="sass logo"
              className="stalk__icon"/>
            <img
              src={js}
              alt="javascript logo"
              className="stalk__icon"/>
            <img
              src={react}
              alt="react logo"
              className="stalk__icon"/>
          </div>
        </div>
        <div className="stalk__description">
          <div className="stalk__text">
            <p className="stalk__text-left">timeframe:</p>
            <p className="stalk__text-right">5 hours</p>
          </div>
          <div className="stalk__text">
            <p className="stalk__text-left">description:</p>
            <p className="stalk__text-right">a mock stock market single-player game to earn money buying vegetable "stalks"</p>
          </div>
          <div className="stalk__text">
            <p className="stalk__text-left">challenges:</p>
            <p className="stalk__text-right">having to ideate, structure, code, and style an entire functioning app within such a short time frame</p>
          </div>
          <div className="stalk__text">
            <p className="stalk__text-left">tech stack:</p>
            <p className="stalk__text-right">Sass, Javascript, React.js</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Stalk;