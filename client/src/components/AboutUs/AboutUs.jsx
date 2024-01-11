import React from 'react'
import banner01 from '../Asset/4.png'
import banner02 from '../Asset/5.png'
import './AboutUs.css'
function AboutUs() {
    const whyChooseUs = [
        { heading: 'Best Price', para: 'Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.' },
        { heading: 'Trusted By Thousands', para: 'NUMBER 1 PROVIDER OF THE GRIPPING DRIVING EXPERIENCES.' },
        { heading: 'Wide Range of Brands', para: 'We Have A Wide Range Of Different Car Brands.' },
    ]
    return (
      <>
        <section className="bg-light ">
          <div className="d-flex flex-row  align-items-center bg-danger-subtle py-5 ">
            <div className="col-md-6 ps-5  ">
              <h1 className="text-start  text-danger">AboutUs</h1>
            </div>
            <div className="col-md-6 pe-5">
              <p className="text-end ">Home / AboutUs</p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center py-2 con container ">
            <div className="col-md-6 mt-5">
              <div className="bannerImg">
                <img src={banner01} alt="" />
              </div>
            </div>
            <div className="col-md-6 pe-md-3">
              <h2 className="py-5">Who we are</h2>
              <p className="text-secondary pe-md-5 me-lg-5">
                Welcome to Madcoupon.de - Your Ultimate Destination for Free
                Vouchers and Coupons in Germany!
                <br />
                <br />
                Why Madcoupon.de?
                <br />
                At Madcoupon.de, we believe that saving money should be
                hassle-free. That's why we offer a vast selection of free
                vouchers and coupon codes, all tailored to the German market.
                Say goodbye to registration forms and hidden fees – our deals
                are genuinely free for you to grab and use instantly!
                <br />
                <br />
                What Sets Us Apart:
                <br />
                Extensive Selection: Explore a diverse range of vouchers
                covering everything from fashion and electronics to travel and
                dining. We've got your favorite brands covered!
                <br />
                User-Friendly Experience: Our website is designed with you in
                mind. Easily navigate through categories and find the best deals
                with just a few clicks.
                <br />
                No Registration Required: Enjoy the freedom of accessing all our
                vouchers without any mandatory sign-ups. Instantly access the
                savings you deserve.
                <br />
                Regular Updates: We keep our finger on the pulse of the latest
                deals. Visit Madcoupon.de regularly to stay updated on fresh,
                exciting offers.
                <br />
                <br />
                How It Works:
                <br />
                Browse: Explore our categories or use our search function to
                find the perfect voucher for your needs
                <br />
                Grab: Simply click on the voucher you want, and it's yours! No
                strings attached.
                <br />
                Save: Redeem your voucher at the respective store or website and
                enjoy the savings. It's that easy!
                <br />
                <br />
                Start your savings journey today with Madcoupon.de – where every
                voucher is a step towards smarter, more economical shopping!
                Happy Saving!
                <br />
                Thank you for choosing Shopping Mall. We look forward to helping
                you find the best deals on all your shopping needs. Happy
                shopping!
              </p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center py-2 con container ">
            <div className="col-md-6 pe-md-3">
              <h2 className="py-5">Our Mission</h2>
              <p className="text-secondary pe-md-5 me-lg-5">
                Our mission as Shopping Mall is to provide consumers with the
                most accurate and up-to-date information on the prices of
                products and services from various retailers and suppliers. We
                strive to make the process of finding the best deals and
                discounts as easy and convenient as possible, saving our users
                time and money. We are committed to providing unbiased and
                transparent information, and we strive to be the go-to resource
                for consumers looking to make informed purchasing decisions.
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <div className="bannerImg2">
                <img src={banner02} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-danger-subtle py-2 ">
            <h1 className="text-center pt-5  text-danger">Why Choose Us?</h1>
            <div className="d-flex flex-row justify-content-center align-items-center  container">
              {whyChooseUs.map(({ heading, para }) => (
                <div className="col-md-4" key={para}>
                  <h4 className="">{heading}</h4>
                  <p className="text-secondary">{para}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center py-2 con container ">
            <div className="col-md-6 pe-md-3">
              <h2 className="py-5">Our Vission</h2>
              <p className="text-secondary pe-md-5 me-lg-5">
                Our vision for a Shopping Mall is to create a user-friendly
                platform that allows consumers to easily compare prices and
                features of products and services from various retailers and
                providers. Our goal is to empower consumers with the information
                they need to make informed purchasing decisions and save money.
                We will strive to provide accurate and up-to-date pricing
                information, as well as detailed product information, reviews,
                and ratings. Additionally, we will work to create a seamless and
                efficient user experience, with features such as price alerts,
                price history charts, and personalized product recommendations.
                Ultimately, our vision is to be the go-to destination for
                consumers looking to save money and make informed purchasing
                decisions.
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <div className="px-5"></div>
            </div>
          </div>
        </section>
      </>
    );
}

export default AboutUs
