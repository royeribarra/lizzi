
import { Button, Affix } from 'antd';
import React from "react";
import { NavLink } from "react-router-dom";

function Regalo() 
{

  return (
    <div  className="fh5co-bg" style={{ backgroundImage: "url(images/img_bg_3.jpg)"}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <h2 style={{ color: "#077f83" }}>Por favor, revisa todas las opciones y elige una</h2>
          </div>
        </div>
        <div className="row">
          <div className="display-t">
            <div className="display-tc" style={{ marginBottom: "15px"}}>
              <div className="col-md-10 col-md-offset-1">
                <div className="col-md-6 col-sm-6 text-center">
                  <div className="event-wrap animate-box">
                    <h3><u>Huancaya!</u></h3>
                    <div className="event-col">
                      <i className="icon-clock"></i>
                      <span>5:00 AM</span>
                      <span>11:00 PM</span>
                    </div>
                    <div className="event-col">
                      <i className="icon-calendar"></i>
                      <span>Jueves 15</span>
                      <span>Septiembre, 2022</span>
                    </div>
                    <p>
                      Como me comentaste ir a Huancaya, tendrías que preguntar el tour, para que puedas reservar, lo último sería
                      que vayas a lo free, me refiero con cualquier auto que salga de Chupaca.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 text-center">
                  <div className="event-wrap animate-box">
                    <h3><u>Cuzco!</u></h3>
                    <div className="event-col">
                      <i className="icon-clock"></i>
                      <span>7:00 PM</span>
                      <span>12:00 AM</span>
                    </div>
                    <div className="event-col">
                      <i className="icon-calendar"></i>
                      <span>Viernes 11</span>
                      <span>Noviembre, 2022</span>
                    </div>
                    <p>
                      También quiero conocer el Cuzco, pero planear ahí, es con un poco más de tiempo.
                      Así que una fecha podría ser noviembre, de paso ahorro, estaría súper!
                    </p>
                  </div>
                </div>
              </div>
              <Button style={{ border: "0px", backgroundColor: "#077f83"}}>
                <NavLink to="/regalos" style={{ color: "white" }}>
                  Ver más
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Regalo;