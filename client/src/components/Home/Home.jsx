import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import Product from "./Product.jsx";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
import { FaPlaneDeparture } from "react-icons/fa";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { getProduct } from "../../actions/productAction.js";
import { getBrand } from "../../actions/brandAction";
import banner1 from "./Asset/nike.png";
import banner2 from "./Asset/adidas.png";
import Coupon from "./components/Coupon";
import { baseurl } from "../../baseurl";
import axios from "axios";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  const { brands, brandsCount } = useSelector((state) => state.brands);
  const [modalData, setmodalData] = useState("");
  const [categories, setCategories] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (error) return alert.error(error);
    getAllCategories();
    dispatch(getProduct());
    dispatch(getBrand());
  }, [dispatch, error]);
  const getAllCategories = async () => {
    const link = `${baseurl}/api/v1/categories`;
    const { data } = await axios.get(link);
    let categories = data.categories.map(({ _id, label }) => {
      return { id: _id, label };
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
    autoplaySpeed: 2000,
    // speed: 500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const multiItems = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Ecommerce"} />
          <div className="container-fluid mt-5 ">
            <div className="d-flex flex-row pt-5 px-md-5">
              <div className="col-12">
                <Slider {...settings}>
                  <div>
                    <img src={banner1} alt="Slider" />{" "}
                  </div>
                  <div>
                    <img src={banner2} alt="Slider" />{" "}
                  </div>
                  <div>
                    <img src={banner1} alt="Slider" />{" "}
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div id="" className="mt-5  ">
            <div className="bg-white shadow container">
              <p className="col-11 h1 gridHeading text-warning gridHeading  text-start my-1  p-3 rounded-3">
                Top Brands
              </p>
              <div className="d-flex flex-row  justify-content-center  overflow-x-scroll  m-5 ">
                <Slider {...multiItems}>
                  {brands &&
                    brands.map((brand) =>
                      brand.published && brand.popular ? (
                        <Product key={brand._id} product={brand} />
                      ) : (
                        ""
                      )
                    )}
                </Slider>
              </div>
            </div>
            <div className="mx-5   px-auto">
              <div className="row ustify-content-center    ">
                <div className="col-11 h1 gridHeading text-warning gridHeading  text-start shadow-sm bg-white  my-3  p-3 rounded-3">
                  Popular Coupon
                </div>
              </div>
              <div className="row justify-content-center ">
                {products &&
                  products.map(
                    (product) =>
                      product.popular && (
                        <Coupon
                          product={product}
                          callBack={() => modalToggle(product)}
                        />
                      )
                  )}
                {/*  <Link
                          to=""
                          className="col-md-3 pe-auto "
                          onClick={modalToggle}
                        >
                          <div class="m-2 p-3 rounded-2 shadow d-flex flex-column align-items-center ">
                            <img
                              src={images.url}
                              alt=""
                              height="100"
                              width="100"
                            />
                            <span
                              class=" my-2 w-100 "
                              style={{ "border-top": "2px grey dashed " }}
                            ></span>
                            <h5 class="card-title py-1">{name}</h5>
                            <p class="card-text py-1">Some card's content.</p>
                            <button
                              onClick={modalToggle}
                              class="btn btn-primary"
                            >
                              somewhere
                            </button>
                          </div>
                      </Link> */}
              </div>
              <div className="row ustify-content-center    ">
                <div className="col-11 h1 text-warning  text-start shadow-sm bg-white  my-3  p-3 rounded-3">
                  Double Cash Back Hot Stores | April 2023
                </div>
              </div>
              <div className="row justify-content-center ">
                {brands &&
                  brands.map(
                    (brand) =>
                      brand.published && (
                        <Product key={brand._id} product={brand} />
                      )
                  )}
              </div>
              <div className="row justfy-content-center    ">
                <div className="col-11 h1 text-start gridHeading text-warning shadow-sm bg-white  my-3  p-3 rounded-3">
                  Current coupon codes and offers
                </div>
              </div>
              <div className="row justify-content-center ">
                {products &&
                  products.map(
                    (product) =>
                      product.published && (
                        <div className="col-md-4">
                          <div class="card border-0 shadow rounded-3 mb-3">
                            <div class="row  g-0 py-3">
                              <div
                                class="col-4 my-auto d-flex justify-content-center   "
                                style={{ borderRight: "1px dashed gray" }}
                              >
                                <div className="mx-auto ">
                                  <img
                                    src={product.images.url}
                                    alt="coupon"
                                    class="bd-placeholder-img img-fluid rounded-pill  "
                                    width="50"
                                    height="75"
                                  />
                                  <h5
                                    class="    text-center text-truncate  py-1"
                                    style={{ maxWidth: "5rem" }}
                                    title={product?.name}
                                  >
                                    {product?.name}
                                  </h5>
                                </div>
                              </div>
                              <div class="col-8">
                                <div class="card-body">
                                  <h5 class="w-100 overflow-x-auto text-break my-1 ">
                                    {" "}
                                    {product?.description}
                                  </h5>
                                  <p class="card-text PromoCode text-truncate text-body-secondary text-end">
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
                        </div>
                      )
                  )}
              </div>
              <div className="row     ">
                <div className="col-10 h1  text-start text-warning shadow-sm bg-white  my-3  p-3 rounded-3">
                  Top categories
                </div>
              </div>
              <div className="row justify-content-center ">
                {categories &&
                  categories.slice(0, 18).map(({ id, label }) => (
                    <div className="col-md-3 py-2" key={id}>
                      <Link
                        to={`/categories/brands/${id}`}
                        class="card border-0 shadow rounded-2 py-2 bg-success bg-opacity-25 mb-1"
                      >
                        <div class="row  g-0">
                          <div class="col-4 my-auto d-flex justify-content-center text-secondary text-opacity-75 fs-5  ">
                            <FaPlaneDeparture />
                          </div>
                          <div class="col-8">
                            <div class="card-body">
                              <h5 class=" text-secondary">{label} </h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            <Modal show={isOpenModal} size="md" onHide={modalToggle}>
              <Modal.Body className="mt-n4   rounded-3">
                <div class=" p-4  h-75    d-flex flex-column align-items-center ">
                  <img
                    src={modalData?.images?.url}
                    alt=""
                    class="border-3   rounded-pill"
                    height="100"
                    width="100"
                  />
                  <h5 class="fs-5 my-1 ">{modalData?.description}</h5>
                  <p class="fs-5 text-center">Voucher Code is : </p>
                  <span className="btn btn-outline-info   my-1 w-75">
                    {modalData?.code}{" "}
                  </span>
                  <p class=" my-1">
                    Date of Expiry :{" "}
                    <span className=" ">
                      {" "}
                      {moment(modalData?.expireDate).format("DD-MM-YYYY")}{" "}
                    </span>
                  </p>
                  <Link
                    to={`${
                      modalData?.couponType === "Code" ? "" : modalData?.link
                    }`}
                    target={`${
                      modalData?.couponType === "Code" ? "" : "_blank"
                    }`}
                    className="btn btn-danger opacity-75 text-white w-md-25 w-sm-50 rounded-pill px-2  "
                  >
                    {modalData?.couponType === "Code"
                      ? modalData?.code
                      : "Provider"}
                  </Link>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div className="bg-white shadow container">
            <p className="col-11 h1 gridHeading text-warning gridHeading  text-start my-1  p-3 rounded-3">
              Top Categories
            </p>
            <div className="d-flex flex-row  justify-content-center  overflow-x-scroll  m-5 ">
              {brands &&
                brands.map((brand) =>
                  brand.published && brand.popular ? (
                    <Product key={brand._id} product={brand} />
                  ) : (
                    ""
                  )
                )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
