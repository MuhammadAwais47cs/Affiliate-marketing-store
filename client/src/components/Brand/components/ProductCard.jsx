import React, { useState } from "react";
import CouponPopUp from "../../Home/components/CouponPopUp";
import moment from "moment";

function ProductCard({ product }) {
  const [modalData, setmodalData] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalToggle = (product) => {
    setmodalData(product);
    setIsOpenModal(!isOpenModal);
  };
  console.log("product :>> ", product);
  const { images, brand, description, expireDate } = product;
  return (
    <div className="d-flex justify-content-center">
      <div class="col-md-8 card border-0       mb-3 shadow">
        <div class="row  g-0 ">
          <div class="col-3 d-flex flex-column align-items-center p-3  ">
            <img
              src={images?.url}
              alt="coupon"
              class="bd-placeholder-img img-fluid rounded "
              width="100"
              height="100"
            />
          </div>
          <div class="col-6">
            <div class="card-body">
              <h5 class="card-title ">{brand?.name}</h5>
              <p class="card-text   ">{description}</p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated : {moment(expireDate).format("DD-MM-YYYY")}{" "}
                </small>
              </p>
            </div>
          </div>
          <div class="col-3 d-flex flex-column justify-content-center align-items-center  ">
            <button
              class="btn btn-success w-75"
              onClick={() => modalToggle(product)}
            >
              Get Deal
            </button>
            {
              <CouponPopUp
                modalData={modalData}
                isOpenModal={isOpenModal}
                modalToggle={modalToggle}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
