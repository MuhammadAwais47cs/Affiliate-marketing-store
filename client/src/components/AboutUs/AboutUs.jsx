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
            <section className='bg-light '>
                <div className='d-flex flex-row  align-items-center bg-danger-subtle py-5 '>
                    <div className='col-md-6 ps-5  '>
                        <h1 className='text-start  text-danger'>AboutUs</h1>
                    </div>
                    <div className='col-md-6 pe-5'>

                        <p className='text-end '>
                            Home / AboutUs
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center py-2 con container ">
                    <div className="col-md-6 mt-5">
                        <div className='bannerImg'>

                            <img src={banner01} alt="" />

                        </div>
                    </div>
                    <div className="col-md-6 pe-md-3">
                        <h2 className='py-5' >Who we are</h2>
                        <p className='text-secondary pe-md-5 me-lg-5' >
                            Welcome to Shopping Mall! We are dedicated to helping you find the best deals on a wide range of products and services. Our goal is to make your shopping experience as easy and convenient as possible by providing you with a comprehensive list of prices from various retailers and merchants.
                            <br />
                            <br />
                            We understand that shopping can be overwhelming, especially when you are trying to find the best deal. That's why we have created a user-friendly platform that allows you to compare prices, read reviews, and find the perfect product for you.
                            <br />
                            <br />
                            Our team of experts works tirelessly to ensure that our website is always up-to-date with the latest prices and deals. We also work with a variety of retailers and merchants to bring you exclusive offers and discounts.
                            <br />
                            <br />
                            We believe that shopping should be a stress-free and enjoyable experience. That's why we are committed to providing you with the best possible service. If you ever have any questions or concerns, please don't hesitate to contact us. We would be more than happy to help.
                            <br />
                            <br />
                            Thank you for choosing Shopping Mall. We look forward to helping you find the best deals on all your shopping needs. Happy shopping!
                        </p>
                    </div>

                </div>
                <div className="d-flex flex-row justify-content-center py-2 con container ">
                    <div className="col-md-6 pe-md-3">
                        <h2 className='py-5' >Our Mission
                        </h2>
                        <p className='text-secondary pe-md-5 me-lg-5' >
                            Our mission as Shopping Mall is to provide consumers with the most accurate and up-to-date information on the prices of products and services from various retailers and suppliers. We strive to make the process of finding the best deals and discounts as easy and convenient as possible, saving our users time and money. We are committed to providing unbiased and transparent information, and we strive to be the go-to resource for consumers looking to make informed purchasing decisions.
                        </p>


                    </div>
                    <div className="col-md-6 mt-5">
                        <div className='bannerImg2'>

                            <img src={banner02} alt="" />

                        </div>
                    </div>
                </div>

                <div className='bg-danger-subtle py-2 '>
                    <h1 className='text-center pt-5  text-danger'>Why Choose Us?

                    </h1>
                    <div className='d-flex flex-row justify-content-center align-items-center  container'>
                        {whyChooseUs.map(({ heading, para }) => (
                            <div className='col-md-4' key={para}>
                                <h4 className=''>{heading}
                                </h4>
                                <p className='text-secondary'>{para}
                                </p>
                            </div>
                        ))}



                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center py-2 con container ">
                    <div className="col-md-6 pe-md-3">
                        <h2 className='py-5' >Our Vission

                        </h2>
                        <p className='text-secondary pe-md-5 me-lg-5' >
                            Our vision for a Shopping Mall is to create a user-friendly platform that allows consumers to easily compare prices and features of products and services from various retailers and providers. Our goal is to empower consumers with the information they need to make informed purchasing decisions and save money. We will strive to provide accurate and up-to-date pricing information, as well as detailed product information, reviews, and ratings. Additionally, we will work to create a seamless and efficient user experience, with features such as price alerts, price history charts, and personalized product recommendations. Ultimately, our vision is to be the go-to destination for consumers looking to save money and make informed purchasing decisions.
                        </p>


                    </div>
                    <div className="col-md-6 mt-5">
                        <div className='px-5'>



                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default AboutUs
