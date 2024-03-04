import React, { useState } from "react";
// import playStore from "../../../images/playstore.png";
// import logo from '../assets/2.png'
// import appStore from "../../../images/Appstore.png";
import { FaPinterest } from "react-icons/fa";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { useAlert } from "react-alert";
import axios from "axios";
import { baseurl } from "../../../baseurl";

const Footer = () => {
  const alert = useAlert();
  const [data, setData] = useState({ email: null });
  // const socialLinks = [
  //   'Instagram',
  //   'Facebook',
  //   'Whatsapp',
  //   'PinterestP',
  // ]
  const handleGmailClick = (email) => {
    // Redirect to the Gmail login page
    // window.location.href = 'https://mail.google.com/mail/u/0/#inbox?compose=new';
    window.open(
      `https://mail.google.com/mail/u/0/#inbox?compose=new&to=${email}`,
      "_blank"
    );
  };
  const handleWhatsAppClick = () => {
    // Redirect to WhatsApp with a pre-populated message
    window.open(
      `https://api.whatsapp.com/send?phone=${312 - 4709123}&text=${"message"}`
    );
  };

  const handleInstagramClick = (link) => {
    // Redirect to Instagram
    window.open(link, "_blank");
  };

  const handleFacebookClick = () => {
    // Redirect to Facebook
    window.open("https://www.facebook.com/madcoupon.de/", "_blank");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .post(`${baseurl}/api/v1/subscribe/new`, { email: data.email }, config)
      .then((res) => {
        res.data.success &&
          alert.success("Subscribed , Thanks for joining us!");
        setData({ ...data, email: null });
      })
      .catch((error) => {
        console.log("error >> ", error);
      });
  };
  return (
    <div className="">
      <footer id="footer" className="bg-secondary   ">
        {/* <div className="leftFooter">
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
          
      <p>Download App for Android and IOS mobile </p>
   
        </div> */}
        <div className="leftFooter">
          <h1>News Letter</h1>
          <p className="  border-top border-dark">
            {" "}
            You can subscribe to the newsletter here: :
          </p>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              {/* <label for="exampleInputEmail1" class="form-label">
                Email address
              </label> */}
              <input
                type="email"
                class="form-control"
                name="email"
                id="exampleInputEmail1"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                aria-describedby="emailHelp"
                required
              />
            </div>

            <button type="submit" class="btn btn-sm btn-warning bg-theame">
              Subscribe
            </button>
          </form>
          {/* <div className="d-flex flex-row ">
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
          </div> */}
        </div>

        <div className="midFooter mt-4">
          <h1>Information</h1>

          <a href="/ContactUs">Contact Us</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Privacy">Privacy </a>
        </div>

        <div className="rightFooter mt-4">
          <h4>Follow Us</h4>
          <p
            className="h6  "
            onClick={() =>
              handleInstagramClick("https://www.instagram.com/madcoupon.de/")
            }
          >
            <FaInstagram /> Instagram
          </p>
          <p
            className="h6   "
            onClick={() =>
              handleInstagramClick("https://www.pinterest.de/madcoupon01/")
            }
          >
            <FaPinterest /> Pinterest
          </p>
          <p
            className="h6"
            onClick={() =>
              handleInstagramClick(
                "https://www.facebook.com/profile.php?id=61555546487458"
              )
            }
          >
            <FaFacebook /> Facebook
          </p>

          {/*   <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
  <a href="http://instagram.com/meabhisingh">Facebook</a>
*/}
        </div>
      </footer>
      <div className="d-flex flex-row justify-content-center   border-top border-warning py-4 bg-secondary bg-gradient   ">
        <p className="text-white">
          Copyright (c) 2024 Madcoupon. All rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
