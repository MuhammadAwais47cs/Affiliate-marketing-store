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
  { img: approved, heading: 'PTA Approved', para: `Look for the voucher on the website. Click on it. Once the new page opens, copy the coupon code. Then, click the button that says 'Go to store' to use this coupon.` },
  { img: warranty, heading: '1 Year', para: ' When you click this button, you will go to the store page of the product you want.' },
  { img: delivery, heading: '24hr Delivery', para: `Next, go to the store's website and find the product you want. When you're ready to buy, enter the coupon code on the payment page to enjoy your purchase.` },
  //   { img : shipping, heading:'Free Delivery', para :'All Over Pakistan'},
]
const Footer = () => {
  return (
    <div id="" className="bg-secondary bg-opacity-25 shadow  px-4  py-4 my-3">

      <div class="d-flex flex-wrap justify-content-center">
        <div class="col-md-4">
          <h4 >
            <i className={`fa fa-calendar fa-lg text-theame me-2  `} aria-hidden="true" />

            How to Redeem a coupon.
          </h4>
        </div>
        <div class="col-md-7 w-50"  >
          <hr style={{ height: '0.5px', backgroundColor: '#717D7E' }} />

        </div>
      </div>


      <div className="d-flex flex-wrap justify-content-evenly ">
        {svg.map(({ para }, i) => (
          <div className="col-md-12 col-lg m-2  bg-white shadow-lg rounded" key={i} >
            <div className="  d-flex flex-wrap mx-2 my-2">
              <div className="col-1">
                <i className={`fa fa-circle-arrow-right fa-lg text-theame ml-2`} aria-hidden="true" />
              </div>
              <div className="col-11 ps-2">
                <p>{para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Footer;