import React from 'react';
import './About.css'

export default function About() {
  return( <div className='about-body'>
      <div className='about-me-img'>
      </div>
      <div className='about-me'>
      <h2 className='about-title'> Get to know me:</h2>
      <ul className='about-detail'>
        <li className='name'>Marjica Watson-Santos</li>
        <li className='location'> Atlanta, GA</li>
        <li className='title'>Junior Software Engineer, General Assembly</li>
        <li className='title'>B.A. in Creative Writing with a  Music Minor, Georgia State University</li>
        <li className='title'>Former Opera Singer and Songwriter</li>
        
        

       
        <li className='skills'>HTML CSS JS React.Js Python Django MongoDb SQL Mongoose</li>

      </ul>
      <p className='about-paragraph'>Singing and songwriting taught me about the importance of being willing to go the extra mile for the finished product. 
        From pulling all-nighters to finish tracks, to pulling all-nighters to code and debug projects, a hard day&#39;s work 
        has never thrown me off my rhythm. Creative and artistic, my talent and passion for music has intermingled with my
        love of writing beautiful, clean, and functional code. I pride myself on my ability to quickly adapt to change and use 
        my personal time to grow my skill set and hone my talents. I&#39;m an asset to any team I&#39;m on by being just as willing 
        to support as I am to lead. Adaptive, Multi-Disciplined, and Supportive, I strive to bring life to all of my creations.</p>
        <h2 className='about-end'></h2>
        

        <button  className='download-link'><a className='download-button' href = "resume.png" download="Marjica Watson-Santos Resume 2022">Download My Resume</a></button>
        </div>
  </div>
  )
}