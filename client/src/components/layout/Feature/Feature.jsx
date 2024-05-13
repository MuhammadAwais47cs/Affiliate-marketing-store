import React from "react";
// import playStore from "../../../images/playstore.png";
import logo from '../assets/logo.png'
import "../footer/Footer.css";

import approved from '../assets/feature-approved.svg';
import delivery from '../assets/feature-delivery.svg';
import shipping from '../assets/feature-shipping.svg';
import warranty from '../assets/feature-warranty.svg';
// import appStore from "../../../images/Appstore.png";
const svg = [
  { img : approved, heading:'PTA Approved', para :'Mobile Phone'},
  { img : warranty, heading:'1 Year', para :'Brand Warranty'},
  { img : delivery, heading:'24hr Delivery', para :'Lahore & Islamabad'},
  { img : shipping, heading:'Free Delivery', para :'All Over Pakistan'},
 ]
const Footer = () => {
  return (
    <div className="bg-white shadow py-2">
      <div className="d-flex flex-row justify-content-evenly">
        {svg.map(({ img, heading, para }) => (
          <div className="feature-box col-md-3 d-flex flex-column align-items-center justify-content-center my-2">
            <img src={img} key={heading} alt={heading} className="" />
            <h3>{heading}</h3>
            <p>{para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;