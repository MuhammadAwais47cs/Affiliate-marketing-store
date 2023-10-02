import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import Product from "./Product.jsx";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Carousel, { consts } from "react-elastic-carousel";
import MetaData from "../layout/MetaData.js";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction.js";
import { getBrand } from "../../actions/brandAction";
import { getSlider } from "../../actions/sliderAction";
import banner1 from "./Asset/co.png";
import CouponList from "./components/CouponList.jsx";
import CategoriesList from "./components/CategoriesList.jsx";
import BrandList from "./components/BrandList.jsx";
import OfferList from "./components/OfferList.jsx";
import { baseurl } from "../../baseurl";
import axios from "axios";
import "./index.css";
import CouponPopUp from "./components/CouponPopUp";

function Home() {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const { brands } = useSelector((state) => state.brands);
  const { sliders } = useSelector((state) => state.sliders);
  const [modalData, setmodalData] = useState("");
  const [categories, setCategories] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (error) return alert.error(error);
    dispatch(getSlider());
    dispatch(getProduct());
    dispatch(getBrand());
    getAllCategories();
  }, [dispatch, error]);
  const getAllCategories = async () => {
    const link = `${baseurl}/api/v1/categories`;
    const { data } = await axios.get(link);
    let categories = data.categories.map(({ _id, label, icon }) => {
      return { id: _id, label, icon };
    });
    setCategories(categories);
  };
  const modalToggle = (product) => {
    setmodalData(product);
    setIsOpenModal(!isOpenModal);
  };

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // speed: 500,
    pauseOnHover: true,
  };
  const breakPoints = [
    { width: 300, itemsToShow: 3, pagination: false },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 6, pagination: false },
    { width: 1024, itemsToShow: 7, pagination: false, itemsToScroll: 2 },
    { width: 1440, itemsToShow: 7, pagination: false },
    { width: 1750, itemsToShow: 12, pagination: false },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Ecommerce"} />
          <div className="container-fluid mt-4 ">
            <div className="d-flex flex-row  px-md-5">
              <div className="col-12">
                <Slider {...settings}>
                  {sliders?.images?.map(({ url, _id }) => (
                    <div key={_id}>
                      <img src={banner1} alt="Slider" className="img-fluid" />{" "}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div id="" className="mt-5  ">
            <div className="bg-secondary bg-opacity-25 shadow container">
              <p className="col-11 h3   gridHeading  text-center my-1 fw-bold p-3 rounded-3">
                Popular Brands
              </p>
              {brands && (
                <Carousel
                  itemposition={consts.CENTER}
                  breakPoints={breakPoints}
                  enableAutoPlay
                  autoPlaySpeed={1500}
                >
                  {brands &&
                    brands.map(
                      (brand) =>
                        brand.published && (
                          <Link
                            className="d-flex flex-row justify-content-center bg-white shadow-lg p-lg-2 p-md-1 border-0 rounded mb-2 mx-2"
                            to={`/brand/${brand?._id}`}
                          >
                            <img
                              src={brand?.images?.url}
                              alt={brand?.name}
                              className="mx-2 brandSliderImg"
                            />
                          </Link>
                        )
                    )}
                </Carousel>
              )}
            </div>
            <div className="mx-4    px-auto">
              <div className="row justify-content-center    ">
                <div className="col-11 h3 gridHeading fw-bold    text-center shadow-sm bg-white  my-3  p-3 rounded-3">
                  Popular Coupon
                </div>
              </div>
              {brands && (
                <CouponList
                  Coupons={brands.filter(
                    (brands) => brands.popular && brands.published
                  )}
                />
              )}

              {/* <div className="row justify-content-center    ">
                <div className="col-11 h1 text-warning gridHeading text-start shadow-sm bg-white  my-3  p-3 rounded-3">
                  Double Cash Back Hot Stores | April 2023
                </div>
              </div>
              {brands && (
                <BrandList
                  data={brands.filter(
                    (brand) => brand.popular && brand.published
                  )}
                />
              )} */}
              {/* <div className="row justify-content-center ">
                {brands &&
                  brands.map(
                    (brand) =>
                      brand.published && (
                        <Product key={brand._id} product={brand} />
                      )
                  )}
              </div> */}

              <div className="row justify-content-center    ">
                <div className="col-11 h3 gridHeading fw-bold    text-center shadow-sm bg-white  my-3  p-3 rounded-3">
                  Featured Coupons
                </div>
              </div>
              {products && (
                <OfferList
                  Coupons={products.filter(
                    (product) => product.popular && product.published
                  )}
                />
              )}
              {/* <div className="row justify-content-center ">
                {products &&
                  products.map(
                    (product) =>
                      product.published && (
                        <Link
                          to=""
                          className="col-md-4"
                          onClick={() => modalToggle(product)}
                        >
                          <div className="card border-0 shadow rounded-3 mb-3">
                            <div className="row  g-0 py-3">
                              <div
                                className="col-4 my-auto d-flex justify-content-center   "
                                style={{ borderRight: "1px dashed gray" }}
                              >
                                <div className="mx-auto ">
                                  <img
                                    src={product.images.url}
                                    alt="coupon"
                                    className="bd-placeholder-img img-fluid rounded-pill  "
                                    width="50"
                                    height="75"
                                  />
                                  <h5
                                    className="    text-center text-truncate  py-1"
                                    style={{ maxWidth: "5rem" }}
                                    title={product?.name}
                                  >
                                    {product?.name}
                                  </h5>
                                </div>
                              </div>
                              <div className="col-8">
                                <div className="card-body">
                                  <h5 className="w-100 overflow-x-auto text-break my-1 ">
                                    {" "}
                                    {product?.description}
                                  </h5>
                                  <p className="card-text PromoCode text-truncate text-body-secondary text-end">
                                    Promo code:{" "}
                                    <span className=" rounded-pill  px-3 py-1 text-danger">
                                      {moment(modalData?.expireDate).format(
                                        "DD-MM-YYYY"
                                      )}{" "}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                  )}
              </div> */}
              {/* <div className="row     ">
                <div className="col-11 h1 text-center gridHeading fw-bold shadow-sm bg-white  my-3  p-3 rounded-3">
                  Top categories
                </div>
              </div> */}
              <div className="row justify-content-center    ">
                <div className="col-11 h3 fw-bold gridHeading  text-center shadow-sm bg-white  my-3  p-3 rounded-3">
                  Top categories
                </div>
              </div>
              <CategoriesList data={categories} />
              {/* <div className="row justify-content-center ">
                {categories &&
                  categories.slice(0, 18).map(({ id, label }) => (
                    <div className="col-md-3 py-2" key={id}>
                      <Link
                        to={`/categories/brands/${id}`}
                        className="card border-0 shadow rounded-2 py-2 bg-success bg-opacity-25 mb-1"
                      >
                        <div className="row  g-0">
                          <div className="col-4 my-auto d-flex justify-content-center text-secondary text-opacity-75 fs-5  ">
                            <FaPlaneDeparture />
                          </div>
                          <div className="col-8">
                            <div className="card-body">
                              <h5 className=" text-secondary">{label} </h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div> */}
            </div>
            {
              <CouponPopUp
                modalData={modalData}
                isOpenModal={isOpenModal}
                modalToggle={modalToggle}
              />
            }
          </div>
          {/* <div className="bg-white shadow container">
            <p className="col-11 h1 gridHeading text-warning gridHeading  text-start my-1  p-3 rounded-3">
              Top Categories
            </p>
            <Carousel itemposition={consts.CENTER} breakPoints={breakPoints}>
              {brands &&
                brands.map(
                  (brand) =>
                    brand.published && (
                      <Product key={brand._id} product={brand} />
                    )
                )}
            </Carousel>
          </div> */}
        </>
      )}
    </>
  );
}

export default Home;
