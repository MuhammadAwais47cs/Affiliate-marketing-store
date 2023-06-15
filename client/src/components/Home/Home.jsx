import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import Product from "./Product.jsx";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { getProduct } from "../../actions/productAction.js";
import { getBrand } from "../../actions/brandAction";
import banner1 from "./Asset/nike.png";
import banner2 from "./Asset/adidas.png";
import banner3 from "./Asset/banner3.png";
import { categories } from "./data";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  const { brands, brandsCount } = useSelector((state) => state.brands);
  const [category, setCategory] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(true);
  useEffect(() => {
    console.log("objec :>> ", error);
    if (error) return alert.error(error);

    dispatch(getProduct());
    dispatch(getBrand());
  }, [dispatch, error]);

  const modalToggle = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Ecommerce"} />
          <div className="container-fluid mt-5 mx-md-5 ">
            <div className="d-flex flex-row pt-5 px-md-5">
              <div className="col-xl-9 col-lg-12">
                <div
                  id="carouselExample"
                  className="carousel slide pointer-event"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      {/*  <img src='https://images.priceoye.pk/pakistan-priceoye-slider-hwg39.jpg' width="1600px"/>  */}
                      <img src={banner1} />
                    </div>

                    <div className="carousel-item">
                      <img src={banner2} />
                    </div>
                    <div className="carousel-item">
                      <img src={banner3} />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev "
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-dark"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-xl-3 col-lg-0 carousel-item-right ms-1">
                <img
                  src={
                    "https://fatcoupon.com/_next/image?url=https%3A%2F%2Fd3itvsmwj0r86k.cloudfront.net%2Fimages%2F6935fd0e-7448-4ee6-b033-d31f895b610d.webp&w=1920&q=75"
                  }
                  className=""
                  alt=""
                />
                <img
                  src={
                    "https://fatcoupon.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3eacb62b.png&w=1920&q=100"
                  }
                  className="pt-2"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="" className="mt-5 pt-5 ">
            <div className="mx-5 my-5 px-auto">
              <div className="row ustify-content-center    ">
                <div className="col-11 h1 text-warning  text-start shadow-sm bg-white  my-3  p-3 rounded-3">
                  Popular Coupon
                </div>
              </div>
              <div className="row justify-content-center ">
                {products &&
                  products.map(
                    ({ images, popular, name }) =>
                      popular && (
                        <div className="col-md-3">
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
                        </div>
                      )
                  )}
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
                <div className="col-11 h1 text-start text-warning shadow-sm bg-white  my-3  p-3 rounded-3">
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
                            <div class="row  g-0">
                              <div class="col-4 my-auto d-flex justify-content-center   ">
                                <img
                                  src={product.images.url}
                                  alt="coupon"
                                  class="bd-placeholder-img img-fluid rounded "
                                  width="50"
                                  height="75"
                                />
                              </div>
                              <div class="col-8">
                                <div class="card-body">
                                  <h5 class="card-title">{product?.name}</h5>
                                  <p class="card-text text-truncate text-body-secondary">
                                    {product?.description}{" "}
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
                  categories.map(({ id, label }) => (
                    <div className="col-md-4" key={id}>
                      <div class="card border-0 shadow rounded-4 w-75 mb-3">
                        <div class="row  g-0">
                          <div class="col-4 my-auto d-flex justify-content-center   ">
                            <svg
                              class="bd-placeholder-img img-fluid rounded "
                              width="40%"
                              height="50"
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              aria-label="Placeholder: Image"
                              preserveAspectRatio="xMidYMid slice"
                              focusable="false"
                            >
                              <title>Placeholder</title>
                              <rect
                                width="100%"
                                height="100%"
                                fill="#868e96"
                              ></rect>
                              <text x="20%" y="50%" fill="#dee2e6" dy=".2em">
                                Image
                              </text>
                            </svg>
                          </div>
                          <div class="col-8">
                            <div class="card-body">
                              <h6 class="card-title text-warning">{label} </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <Modal show={isOpenModal} size="lg" onHide={modalToggle}>
              <Modal.Body className="mt-n4">
                <div class=" p-4  h-75    d-flex flex-column align-items-center ">
                  <img
                    src=""
                    alt=""
                    class="border-3 bg-danger bg-opacity-75 rounded-pill"
                    height="100"
                    width="100"
                  />
                  <h5 class="card-title my-2">Card title</h5>
                  <p class="card-text">Some card's content.</p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
