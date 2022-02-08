import React from 'react';
import './Project.css'


export default function Project() {
  return (<div className='prj'>
    <h1 className='prj-title'>projects = [ </h1>
    <div className='prj-links'>
     <h2 className='prj-1'><a class="float-start"href = "https://github.com/marjicaws/4-tune"><img className="prj-img"src ='https://res.cloudinary.com/marssantos/image/upload/v1642917093/4-tunepic_cdnjcq.png'/></a><h3 className = "prj-text">4-Tune</h3></h2>
     <h2><a className='prj-2'class="float-start"href='https://github.com/marjicaws/The-Void-Reviews'><img className="prj-img"src ='https://res.cloudinary.com/marssantos/image/upload/v1642917107/voidpic_y7jcou.png'/></a><h3 className = "prj-text">The Void Reviews</h3></h2>
     <h2><a className='prj-3'class="float-start"href='https://github.com/marjicaws/frntr-app'><img className="prj-img"src ='https://res.cloudinary.com/marssantos/image/upload/v1642917093/4-tunepic_cdnjcq.png'/></a><h3 className = "prj-text">Frntr</h3></h2>
     <h2><a className='prj-3' class="float-start" href='https://github.com/marjicaws/listnr2'><img className="prj-img"src ='https://res.cloudinary.com/marssantos/image/upload/v1642917093/4-tunepic_cdnjcq.png'/></a><h3 className = "prj-text">Listnr</h3></h2>
     </div>

     <h1 className='prj-end'>]</h1>
  </div>);
}
