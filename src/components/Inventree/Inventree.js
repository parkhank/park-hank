import React from 'react';
import './Inventree.scss';

import inventreeScreenshot from '../../assets/inventree.png';
import js from '../../assets/javascript.png';
import node from '../../assets/nodejs.png';
import express from '../../assets/expressjs.png';
import react from '../../assets/react.png';
import mysql from '../../assets/mysql.png';
import sass from '../../assets/sass.png';
import knex from '../../assets/knex.png';
import bookshelf from '../../assets/bookshelf.png';

class Inventree extends React.Component {

render() {
  return(
    <div className="inventree">
      <div className="inventree__visuals">
        <img
          src={inventreeScreenshot}
          alt="screenshot of inventree app"
          className="inventree__screenshot"/>
        <div className="inventree__icons">
          <img
            src={mysql}
            alt="mysql logo"
            className="inventree__icon"/>
          <img
            src={knex}
            alt="knex logo"
            className="inventree__icon"/>
          <img
            src={bookshelf}
            alt="bookshelf logo"
            className="inventree__icon"/>
          <img
            src={sass}
            alt="sass logo"
            className="inventree__icon"/>
          <img
            src={js}
            alt="javascript logo"
            className="inventree__icon"/>
          <img
            src={node}
            alt="node logo"
            className="inventree__icon"/>
          <img
            src={react}
            alt="react logo"
            className="inventree__icon"/>
          <img
            src={express}
            alt="express logo"
            className="inventree__icon"/>
        </div>
      </div>
      <div className="inventree__description">
        <div className="inventree__text">
          <p className="inventree__text-left">timeframe:</p>
          <p className="inventree__text-right">2 weeks</p>
        </div>
        <div className="inventree__text">
          <p className="inventree__text-left">description:</p>
          <p className="inventree__text-right">a multi-location inventory app for tracking invoices and usage of items</p>
        </div>
        <div className="inventree__text">
          <p className="inventree__text-left">challenges:</p>
          <p className="inventree__text-right">first time with relational databases, ORM, and mySQL, as well as first time working with a client guiding the process with their own wants and needs from the app</p>
        </div>
        <div className="inventree__text">
          <p className="inventree__text-left">tech stack:</p>
          <p className="inventree__text-right">mySQL, Knex.js, Bookshelf.js, Sass, Javascript, Node.js, React.js, express.js</p>
        </div>
      </div>
    </div>
  )
}

}

export default Inventree;