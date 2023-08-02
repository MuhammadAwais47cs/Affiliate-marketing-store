import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

// it is a modal component which is used to show the coupon details
function CouponPopUp({ modalData, isOpenModal, modalToggle }) {
  return (
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
            to={`${modalData?.couponType === "Code" ? "" : modalData?.link}`}
            target={`${modalData?.couponType === "Code" ? "" : "_blank"}`}
            className="btn btn-danger opacity-75 text-white w-md-25 w-sm-50 rounded-pill px-2  "
          >
            {modalData?.couponType === "Code" ? modalData?.code : "Provider"}
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CouponPopUp;
