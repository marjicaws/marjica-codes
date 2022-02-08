import "./Home.css"
import { Link } from 'react-router-dom'

import React from 'react';

const Home = () => {
  return <div className='home-img-div'>
    <div className="home-border">
    <h1 data-text=" Marjica Watson-Santos" className="home-name"> Marjica Watson-Santos</h1>
      <img className='image-rotate'src = "https://res.cloudinary.com/marssantos/image/upload/v1644358299/Neutral_Script_Typography_Logo_2_ihseu6.png" />
    
     <h2 className="home-title">Software Engineer</h2>
     <h3 className="home-date">2022</h3>
     </div>
  </div>;
};

export default Home;
