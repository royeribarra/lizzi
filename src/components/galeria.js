import React from "react";
import image1 from '../assets/images/nuevo/galeria1.jpeg';
import image2 from '../assets/images/nuevo/galeria2.jpeg';
import image3 from '../assets/images/nuevo/galeria3.jpeg';
import image4 from '../assets/images/nuevo/galeria4.jpeg';

function Galeria() 
{

  return (
    <div id="fh5co-gallery" class="fh5co-section-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <h2 style={{ color: "#077f83" }}>Algunas fotos</h2>
            <p>
              Bueno son algunas que tengo en mi celular, aunque ninguna de los dos, pero eso por ti,
              así que no me culpes :P
            </p>
          </div>
        </div>
        <div class="row row-bottom-padded-md">
          <div class="col-md-12">
            <ul id="fh5co-gallery-list">
              
            <li class="one-third animate-box" data-animate-effect="fadeIn">
              <img src={image1} style={{ width: "100%"}} />
            </li>
            <li class="one-third animate-box" data-animate-effect="fadeIn">
              <img src={image2} style={{ width: "100%"}} />
            </li>
            <li class="one-third animate-box" data-animate-effect="fadeIn">
              <img src={image3} style={{ width: "100%"}} />
            </li>
            <li class="one-third animate-box" data-animate-effect="fadeIn">
              <img src={image4} style={{ width: "100%"}} />
            </li>
            </ul>		
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galeria;