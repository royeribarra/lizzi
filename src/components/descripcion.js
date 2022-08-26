import React from "react";
import image0 from '../assets/images/felicidad1.png';
import image1 from '../assets/images/felicidad2.jpg';

function Descripcion() 
{

  return (
    <div id="fh5co-couple">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <h2 style={{ color: "#077f83" }}>Hola!</h2>
            <h3>¿Cómo has estado?</h3>
            <p>Te invito a ver la página y puedas elegir tu regalo.</p>
          </div>
        </div>
        <div class="couple-wrap animate-box">
          <div class="couple-half">
            <div class="groom">
              <img src={image0} alt="groom" class="img-responsive" />
            </div>
            <div class="desc-groom">
              <h3 style={{ color: "#077f83" }}>Aveces, nos caemos bien</h3>
              <p>
                Cuando nos conocimos, casi siempre solo reíamos todo era super divertido, 
                estaba la valentía de decirte oie! vamos a salir, hagamos algo
                y siempre de alguna manera, conseguía salir contigo, pasar tiempo contigo, lo valió :D
                
              </p>
            </div>
          </div>
          <p class="heart text-center"><i class="icon-heart2"></i></p>
          <div class="couple-half">
            <div class="bride">
              <img src={image1} alt="groom" class="img-responsive" />
            </div>
            <div class="desc-bride">
              <h3 style={{ color: "#077f83" }}>otras, mal</h3>
              <p>
                Conforme fue pasando el tiempo, encontramos asperidades en ambas partes, creo.
                Yo pienso que fue porque tomas más importancia a una persona y se va convirtiendo en alguien importante,
                todo es parte para concoer a alguien. También está bien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;