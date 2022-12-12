import "./Home.css";
import { Link } from "react-router-dom";
import logo from '../images/Logo.png'

import React from "react";

const Home = () => {
  return (
    <div className="home-img-div">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=melodrama@300,400&display=swap" rel='stylesheet'></link>
      </head>
      <div className="home-border">
       
        <img src={logo}></img>
        <p className="home-title">Aspiring Software Engineer</p>
        <h2 className="home-title">Singer-Songwriter</h2>

        <h3 className="home-date">2022</h3>
        <div className="btns">
          <Link className="about-btn" to="/about">
            <button className="btn-home">
              <p>about</p>
            </button>
          </Link>
          <Link className="portfolio-link" to="/portfolio">
            <button className="btn-port">
              <p>portfolio</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
