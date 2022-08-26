import React from "react";
import { Col, Row, Statistic } from 'antd';
import "./reloj.css";

const { Countdown } = Statistic;
const deadline = new Date('August 30, 2022');

function Reloj() 
{
  const onFinish = () => {
    console.log('finished!');
  };
  return (
    <header id="fh5co-header" className="fh5co-cover" role="banner" style={{ backgroundColor: "#41b9bd"}} data-stellar-background-ratio="0.5">
      
      <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center">
        <div className="display-t">
          <div className="display-tc animate-box" data-animate-effect="fadeIn">
          <h1 style={{ fontSize: "60px" }}>Lizeth</h1>
          <h2 style={{ fontSize: "20px" }}>¡Feliz cumpleaños!</h2>
          <Countdown title="30/08/2022" value={deadline} onFinish={onFinish} />
          </div>
        </div>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Reloj;