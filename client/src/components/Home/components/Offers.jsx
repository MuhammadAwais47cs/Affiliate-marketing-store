import moment from "moment";
import React from "react";
import RightArrow from "../Asset/angleRight.svg";
import { FaAngleRight } from "react-icons/fa";
// import { FaRegShareSquare } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
// import { Link } from "react-router-dom";

const Offers = ({ product, callBack }) => {
  console.log("Current coupon codes and offers", product);
  return (
    <>
      <div to="" className="col-md-4" onClick={callBack}>
        <div className="card border-0 shadow rounded-3 mb-3">
          <div className="row  g-0 py-1">
            <div
              className="col-4 my-auto d-flex justify-content-center   "
              // style={{ borderRight: "1px dashed gray" }}
            >
              <div className="mx-auto ">
                <img
                  src={product.images.url}
                  alt="coupon"
                  className="bd-placeholder-img img-fluid rounded-pill  "
                  width="50"
                  height="75"
                />
                {/* <h5
                  className="    text-center text-truncate  py-1"
                  style={{ maxWidth: "5rem" }}
                  title={product?.name}
                >
                  {product?.name}
                </h5> */}
              </div>
            </div>
            <div className="col-8">
              <div className="card-body">
                <p className="card-text PromoCode text-truncate text-body-secondary my-0 ">
                  {moment(product?.expireDate).format("DD-MM-YYYY")}{" "}
                  {/* <span className=" rounded-pill  px-3 py-1 text-danger">
                  </span> */}
                </p>
                <h5 className="w-100 text-truncate  text-break my-1 ">
                  {" "}
                  {product?.description}
                </h5>
                <p className="card-text PromoCode text-truncate text-body-secondary ">
                  {/* {moment(product?.expireDate).format("DD-MM-YYYY")}{" "} */}
                  product.badge
                  {/* <span className=" rounded-pill  px-3 py-1 text-danger">
                  </span> */}
                </p>
              </div>
            </div>
            <div
              className="col-1 my-auto d-flex justify-content-center   "
              // style={{ borderRight: "1px dashed gray" }}
            >
              <div className="mx-auto ">
                <FaAngleRight className="fa-2x shareIcon position-absolute top-50 end-0 me-md-2 me-lg-4 text-danger " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to="" className="col-md-4" onClick={callBack}>
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
                    {moment(product?.expireDate).format("DD-MM-YYYY")}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link> */}
    </>
  );
};
export default Offers;
