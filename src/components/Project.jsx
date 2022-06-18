import React from 'react';
import './Project.css'


export default function Project() {
  return (<div className='prj'>
    <h1 className='prj-title'>projects : </h1>
    <div className='prj-links'>
   
    <div className="prj-box1">
     <h2 ><a className='prj-4' class="float-start"href = "https://github.com/marjicaws/4-tune"><h3 className = "prj-text">4-Tune</h3></a></h2>
     </div>
     
     
     <div className="prj-box2">
     <h2><a className='prj-4'class="float-start"href='https://github.com/marjicaws/The-Void-Reviews'><h3 className = "prj-text">The Void Reviews</h3></a></h2>
     </div>
     <div className="prj-box4">
     <h2><a className='prj-4' class="float-start" href='https://github.com/marjicaws/listnr2'><h3 className = "prj-text">Listnr</h3></a></h2>
     </div>
     <div className="prj-box3">
     <h2><a className='prj-4'class="float-start"href='https://github.com/marjicaws/frntr-app'><h3 className = "prj-text">Frntr</h3></a></h2>
     </div>
    
     </div>

     <h1 className='prj-end'></h1>
  </div>);
}
