import React, { useState, useEffect, useMemo } from "react";
import CouponPopUp from "../../Home/components/CouponPopUp";
import moment from "moment";
import axios from "axios";
import { baseurl } from "../../../baseurl";


function ProductCard({ product, brandId }) {
  console.log("ProductCardComponent Called");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setmodalData] = useState("");

  const modalToggle = (product) => {
    setmodalData(product);
    setIsOpenModal(!isOpenModal);
  };
  const scrollPosition = useMemo(() => window.scrollY, []);
  const queryParameters = new URLSearchParams(window.location.search);
  const popId = queryParameters.get("popId");
  console.log("popId", popId);
  const scrollPositionFromQueryParameter =
    queryParameters.get("scrollPosition");

  // useScrollTo(scrollPositionFromQueryParameter || scrollPosition);

  useEffect(() => {
    console.log("useEffect");

    // if (popId && popId === product._id) {
    //   axios
    //     .get(`${baseurl}/api/v1/product/${popId}`)
    //     .then(({ data }) => {
    //       console.log("res", data);
    //       setmodalData(data.product);
    //       setIsOpenModal(true);
    //     })
    //     .catch((error) => console.error(error));
    // }

    // if (scrollPositionFromQueryParameter || scrollPosition) {
    //   window.scrollTo(0, scrollPositionFromQueryParameter || scrollPosition);
    // }
  }, [popId, scrollPositionFromQueryParameter, product._id, scrollPosition]);
  const handleClick = (link, history, product) => {
    // Store scroll position and other relevant state information
    // const scrollPosition = window.scrollY;
    //  &scrollPosition=${scrollPosition}`;

    const secondTabURL = `/brand/${brandId}?popId=${product?._id}`;
    // window.open(secondTabURL, "_blank");
    window.location.href = secondTabURL;
    // window.location.href = link;
  };

  const { images, brand, description, expireDate, link } = product;

  return (
    <div className="d-flex justify-content-center mx-2">
      <div className="col-md-8 card border-0 mb-3 shadow pb-3">
        <div className="row  g-0 ">
          <div className="col-md-3 d-flex flex-column align-items-center p-3  ">
            <img
              src={images?.url}
              alt="coupon"
              className="bd-placeholder-img img-fluid rounded "
              width="100"
              height="100"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              {/* <h5 className="card-title ">{brand?.name}</h5> */}
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated : {moment(expireDate).format("DD-MM-YYYY")}
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center  ">
            <button
              className="btn btn-success "
              onClick={() => handleClick(link, window.location.href, product)}
            >
           {product?.couponType === "Code"  ? 'Show Code': 'Show Deal'}
             
            </button>
            {isOpenModal && (
              <CouponPopUp
                modalData={modalData}
                isOpenModal={isOpenModal}
                modalToggle={modalToggle}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
 