import React from "react";
// import playStore from "../../../images/playstore.png";
import logo from '../assets/2.png'
// import appStore from "../../../images/Appstore.png";
import { FaFacebook ,FaInstagram ,FaPinterestP ,FaTwitterSquare,FaFacebookMessenger,FaRegEnvelope, FaPhoneSquare,FaWhatsapp,FaLocationArrow } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    'Instagram',
    'Facebook',
    'Whatsapp',
    'PinterestP',
  ]
  const handleGmailClick = (email) => {
    // Redirect to the Gmail login page
    // window.location.href = 'https://mail.google.com/mail/u/0/#inbox?compose=new';
     window.open(`https://mail.google.com/mail/u/0/#inbox?compose=new&to=${email}`, '_blank');
  }
  const handleWhatsAppClick = () => {
    // Redirect to WhatsApp with a pre-populated message
    window.open(`https://api.whatsapp.com/send?phone=${312-4709123}&text=${'message'}`) ;
  }

  return (
    <>
      <footer id="footer" className="bg-secondary   ">
        <div className="leftFooter">
          <img src={logo} alt="" />
          <p>
            {" "}
            Our mission as Shopping Mall is to provide consumers with the most
            accurate and up-to-date information on the prices{" "}
          </p>
          <div className="d-flex flex-row ">
            <a href="http://facebook.com" className="col-md-3 mx-1">
              <FaFacebook />
            </a>
            <a href="http://instagram.com" className="col-md-3 mx-1">
              <FaInstagram />
            </a>
            <a href="http://pinterest.com" className="col-md-3 mx-1">
              <FaPinterestP />
            </a>
            <a href="http://whatsapp.com" className="col-md-3 mx-1">
              <FaWhatsapp />
            </a>
          </div>
          {/*
      <p>Download App for Android and IOS mobile phone</p>
     <img src='https://elito-light-next.netlify.app/images/logo.png' alt="playstore" />
     <img src='https://elito-light-next.netlify.app/images/logo.png' alt="Appstore" /> 
    */}
        </div>

        <div className="midFooter mt-4">
          <h1>Quick Links</h1>

          <a href="/ContactUs">Contact Us</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Privacy">Privacy </a>
          <p>High Quality is our first priority</p>
        </div>

        <div className="rightFooter mt-4">
          <h4>Contact Us</h4>
          <a className="h6  " href="#" onClick={handleWhatsAppClick}>
            <FaPhoneSquare /> +92-312-4709123
          </a>
          <a
            className="h6   "
            href="#"
            onClick={() => handleGmailClick("shopingmallofficial@gmail.com")}
          >
            <FaRegEnvelope /> shopingmallofficial@gmail.com
          </a>
          <a className="h6  " href="#">
            <FaLocationArrow /> 23 Takbeer Block Bahria Town Lahore
          </a>

          {/*   <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
  <a href="http://instagram.com/meabhisingh">Facebook</a>
*/}
        </div>
      </footer>
      <div className="d-flex flex-row justify-content-center   border-top border-warning py-4 bg-secondary bg-gradient   ">
        <p className="text-white">Copyrights 2021 &copy; </p>
      </div>
    </>
  );
};

export default Footer;