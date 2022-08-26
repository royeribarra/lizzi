import React, { useState } from "react";
import { Button, Modal, Image, Col, Row } from 'antd';
import { NavLink } from "react-router-dom";
import chef1 from '../assets/images/casaChef/chef1.jpg';
import chef2 from '../assets/images/casaChef/chef2.jpg';
import chef3 from '../assets/images/casaChef/chef3.jpg';

import cava1 from '../assets/images/cava/cava1.jpg';
import cava2 from '../assets/images/cava/cava2.jpg';
import cava3 from '../assets/images/cava/cava3.jpg';

import cuzco1 from '../assets/images/cuzco/cuzco1.jpg';
import cuzco2 from '../assets/images/cuzco/cuzco2.jpg';
import cuzco3 from '../assets/images/cuzco/cuzco3.jpg';

import dental1 from '../assets/images/dental/dental1.jpg';
import dental2 from '../assets/images/dental/dental2.jpg';
import dental3 from '../assets/images/dental/dental3.jpg';

import huancaya1 from '../assets/images/huancaya/huancaya1.jpg';
import huancaya2 from '../assets/images/huancaya/huancaya2.jpg';
import huancaya3 from '../assets/images/huancaya/huancaya3.jpg';

import joya1 from '../assets/images/sanJeronimo/joya1.jpg';
import joya2 from '../assets/images/sanJeronimo/joya2.jpg';
import joya3 from '../assets/images/sanJeronimo/joya3.jpg';

import vestido1 from '../assets/images/vestido/vestido1.jpg';
import vestido2 from '../assets/images/vestido/vestido2.jpg';
import vestido3 from '../assets/images/vestido/vestido3.jpg';

function RegaloCompleto() 
{
  const [isModalVisibleHuancaya, setIsModalVisibleHuancaya] = useState(false);
  const [isModalVisibleCuzco, setIsModalVisibleCuzco] = useState(false);
  const [isModalVisibleSanJeronimo, setIsModalVisibleSanJeronimo] = useState(false);
  const [isModalVisibleCasaChef, setIsModalVisibleCasaChef] = useState(false);
  const [isModalVisibleTequila, setIsModalVisibleTequila] = useState(false);
  const [isModalVisibleVestido, setIsModalVisibleVestido] = useState(false);
  const [isModalVisibleDentista, setIsModalVisibleDentista] = useState(false);

  const showModalHuancaya = () => {
    setIsModalVisibleHuancaya(true);
  };
  const showModalCuzco = () => {
    setIsModalVisibleCuzco(true);
  };
  const showModalSanJeronimo = () => {
    setIsModalVisibleSanJeronimo(true);
  };
  const showModalCasaChef = () => {
    setIsModalVisibleCasaChef(true);
  };
  const showModalTequila = () => {
    setIsModalVisibleTequila(true);
  };
  const showModalVestido = () => {
    setIsModalVisibleVestido(true);
  };
  const showModalDentista = () => {
    setIsModalVisibleDentista(true);
  };

  const handleOk = () => {
    setIsModalVisibleHuancaya(false);
    setIsModalVisibleCuzco(false);
    setIsModalVisibleSanJeronimo(false);
    setIsModalVisibleCasaChef(false);
    setIsModalVisibleTequila(false);
    setIsModalVisibleVestido(false);
    setIsModalVisibleDentista(false);
  };

  const handleCancel = () => {
    setIsModalVisibleHuancaya(false);
    setIsModalVisibleCuzco(false);
    setIsModalVisibleSanJeronimo(false);
    setIsModalVisibleCasaChef(false);
    setIsModalVisibleTequila(false);
    setIsModalVisibleVestido(false);
    setIsModalVisibleDentista(false);
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div  style={{ backgroundImage: "url(images/img_bg_3.jpg)", marginTop: "25px" }}>
    
      <div className="container">
          <div>
            <span>Tu regalo de cumpleaños</span>
            <h2 style={{ color: "#077f83" }}>Elije uno, guapa :3</h2>
        </div>
        
        <div className="row">
          <div className="display-t">
            <div className="display-tc">
              <div className="col-md-10 col-md-offset-1">
                <div style={{ marginBottom: "15px" }}>
                  <Button type="primary" onClick={showModalHuancaya} style={{ width: "100%", backgroundColor: "#41b9bd", borderColor: "#41b9bd" }}>
                    Huancaya
                  </Button>
                  <Modal title="Huancaya!" visible={isModalVisibleHuancaya} onOk={handleOk} onCancel={handleCancel}>
                    <div className="event-wrap animate-box">
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
                    <Row>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={huancaya1}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={huancaya2}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={huancaya3}
                        />
                      </Col>
                    </Row>
                  </Modal>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <Button type="primary" onClick={showModalCuzco} style={{ width: "100%", backgroundColor: "#41b9bd", borderColor: "#41b9bd" }}>
                    Cuzco
                  </Button>
                  <Modal title="Cuzco!" visible={isModalVisibleCuzco} onOk={handleOk} onCancel={handleCancel}>
                    <div className="event-wrap animate-box">
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
                    <Row>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={cuzco1}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={cuzco2}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={cuzco3}
                        />
                      </Col>
                    </Row>
                  </Modal>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <Button type="primary" onClick={showModalSanJeronimo} style={{ width: "100%", backgroundColor: "#41b9bd", borderColor: "#41b9bd" }}>
                    San Jeronimo
                  </Button>
                  <Modal title="San Jeronimo!" visible={isModalVisibleSanJeronimo} onOk={handleOk} onCancel={handleCancel}>
                    <div className="event-wrap animate-box">
                      <div className="event-col">
                        <i className="icon-clock"></i>
                        <span>7:00 AM</span>
                        <span>8:00 PM</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>Jueves 15</span>
                        <span>Septiembre, 2022</span>
                      </div>
                      <p>
                        Recuerdo la joya que perdiste de tu abuelita, así que podriamos comprar algo,
                        no para remplazarlo, pero si para recordartela.
                      </p>
                    </div>
                    <Row>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={joya1}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={joya2}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={joya3}
                        />
                      </Col>
                    </Row>
                  </Modal>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <Button type="primary" onClick={showModalCasaChef} style={{ width: "100%", backgroundColor: "#41b9bd", borderColor: "#41b9bd" }}>
                    Casa del chef
                  </Button>
                  <Modal title="Casa del chef!" visible={isModalVisibleCasaChef} onOk={handleOk} onCancel={handleCancel}>
                    <div className="event-wrap animate-box">
                      <div className="event-col">
                        <i className="icon-clock"></i>
                        <span>7:00 AM</span>
                        <span>10:00 PM</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>Sabado 17</span>
                        <span>Septiembre, 2022</span>
                      </div>
                      <p>
                        Podríamos pasar en la casa del chef un día entero y comer bien, piscina, todo lo que pueda ofrecer
                        el lugar. Claro si te gustó la primera visita que tuvimos.
                      </p>
                    </div>
                    <Row>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={chef1}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={chef2}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={chef3}
                        />
                      </Col>
                    </Row>
                  </Modal>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <Button type="primary" onClick={showModalTequila} style={{ width: "100%", backgroundColor: "#41b9bd", borderColor: "#41b9bd" }}>
                    Tequila
                  </Button>
                  <Modal title="Tequila!" visible={isModalVisibleTequila} onOk={handleOk} onCancel={handleCancel}>
                    <div className="event-wrap animate-box">
                      <h3></h3>
                      <div className="event-col">
                        <i className="icon-clock"></i>
                        <span>8:00 PM</span>
                        <span>4:00 AM</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>Sabado 17</span>
                        <span>Septiembre, 2022</span>
                      </div>
                      <p>
                        Ahora, una vez si mal no recuerdo querías tomar tequila, así que, podría ser la noche, será tu noche!
                        Y el mejor lugar que conozco es el Cava.
                      </p>
                    </div>
                    <Row>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={cava1}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={cava2}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={cava3}
                        />
                      </Col>
                    </Row>
                  </Modal>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <Button type="primary" onClick={showModalVestido} style={{ width: "100%", backgroundColor: "#41b9bd", borderColor: "#41b9bd" }}>
                    Vestido
                  </Button>
                  <Modal title="Vestido!" visible={isModalVisibleVestido} onOk={handleOk} onCancel={handleCancel}>
                    <div className="event-wrap animate-box">
                      <h3>Vestido!</h3>
                      <div className="event-col">
                        <i className="icon-clock"></i>
                        <span>3:00 PM</span>
                        <span>10:00 PM</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>Jueves 15</span>
                        <span>Septiembre, 2022</span>
                      </div>
                      <p>
                        Sé que te gustan los vestidos y aunque encontrar el que te guste será una experiencia bastante agotadora,
                        puedo soportarlo, hasta que lo encuentres.
                      </p>
                    </div>
                    <Row>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={vestido1}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={vestido2}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={vestido3}
                        />
                      </Col>
                    </Row>
                  </Modal>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <Button type="primary" onClick={showModalDentista} style={{ width: "100%", backgroundColor: "#41b9bd", borderColor: "#41b9bd" }}>
                    Dentista
                  </Button>
                  <Modal title="Dentista!" visible={isModalVisibleDentista} onOk={handleOk} onCancel={handleCancel}>
                    <div className="event-wrap animate-box">
                      <div className="event-col">
                        <i className="icon-clock"></i>
                        <span>10:00 AM</span>
                        <span>1:00 PM</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>Jueves 15</span>
                        <span>Septiembre, 2022</span>
                      </div>
                      <p>
                        No te enojes si, me gustas y todo, pero también creo que es importante mantener una buena higiene y salud dental.
                        Y si, me he fijado, eres una coneja, pero tienes algunos dientes "que deberían ser revisados", podría sacar una cita
                        en mi odontóloga y hacerte una revisión.
                      </p>
                    </div>
                    <Row>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={dental1}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={dental2}
                        />
                      </Col>
                      <Col span={8} style={{ paddingRight: "5px" }}>
                        <Image
                          width="100%"
                          src={dental3}
                        />
                      </Col>
                    </Row>
                  </Modal>
                </div>
                <Button>
                <NavLink to="/">
                  Voler al Inicio
                </NavLink>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegaloCompleto;