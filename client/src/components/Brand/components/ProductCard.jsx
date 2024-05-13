import React, { useState, useMemo } from "react";
import CouponPopUp from "../../Home/components/CouponPopUp";
import moment from "moment";

function ProductCard({ product, brandId }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setmodalData] = useState("");

  const modalToggle = (product) => {
    setmodalData(product);
    setIsOpenModal(!isOpenModal);
  };
  const scrollPosition = useMemo(() => window.scrollY, []);
  const queryParameters = new URLSearchParams(window.location.search);
  const popId = queryParameters.get("popId");
  const scrollPositionFromQueryParameter =
    queryParameters.get("scrollPosition");

  const handleClick = (link, history, product) => {
    const secondTabURL = `/brand/${brandId}?popId=${product?._id}`;
    window.open(secondTabURL, "_blank");
    window.location.href = link;
  };

  const { images, badge, description, expireDate, link } = product;

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
              <p className="card-text my-0 py-0 "> {badge}</p>

              <p className="card-text">
                <small className="text-body-secondary">
                  {/* Expiry Date : {moment(expireDate)?.format("DD-MM-YYYY")} */}
                  Verfallsdatum : {moment(expireDate)?.format("DD-MM-YYYY")}
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center  ">
            <button
              className="btn btn-success "
              onClick={() => handleClick(link, window.location.href, product)}
            >
              <small className="">
                {/* {product?.couponType === "Code" ? "Show Code" : "Show Deal"} */}
                {product?.couponType === "Code" ? "Code anzeigen" : "showDeal"}
              </small>
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
