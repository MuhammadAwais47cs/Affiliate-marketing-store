import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

// it is a modal component which is used to show the coupon details
function CouponPopUp({ modalData, isOpenModal, modalToggle }) {
  const [copyMessage, setCopyMessage] = useState(false);
  const copyCodeAndLink = (data) => {
    navigator.clipboard.writeText(
      `${data?.couponType === "Code" ? data?.code : data?.link}`
    );
    setCopyMessage(true);
  };
  return (
    <Modal show={isOpenModal} size="md" onHide={modalToggle}>
      <Modal.Body className="mt-n4   rounded-3">
        <div className=" p-4  h-75    d-flex flex-column align-items-center ">
          <img
            src={modalData?.images?.url}
            alt=""
            className="border-3   rounded-pill"
            height="100"
            width="100"
          />
          <h5 className="fs-5 my-1 ">{modalData?.description}</h5>
          <p className="fs-5 text-center text-muted">{modalData?.badge}</p>
          <p className="fs-5 text-center text-muted">
            {/* {modalData?.couponType === "Code" ? "Voucher Code is :"  : "Provider is :"} */}
            {modalData?.couponType === "Code"
              ? "Gutscheincode ist :"
              : "Anbieter ist:"}
          </p>

          {/* {copyMessage ? (
            <span className="btn btn-outline-info my-1 w-75 text-truncate">
              Copied!
            </span>
          ) : (
            <span
              className="btn btn-outline-info my-1 w-75 text-truncate"
              onClick={() => copyCodeAndLink(modalData)}
            >
              {modalData?.couponType === "Code"
                ? modalData?.code
                : modalData?.link}
            </span>
          )} */}
          <p className="row w-75">
            <span
              className="col-md-7 btn btn-outline-info my-1 me-2 text-truncate fs-5 pt-2"
              // onClick={() => copyCodeAndLink(modalData)}
            >
              {modalData?.couponType === "Code"
                ? modalData?.code
                : modalData?.link}
            </span>
            <span
              onClick={() => copyCodeAndLink(modalData)}
              className=" col-md-4 btn btn-outline-info my-1 text-truncate fs-5 pt-1"
            >
              {/* {copyMessage ? "Copied!" : "Copy"} */}
              {copyMessage ? "Kopiert!" : "Kopieren"}
            </span>
          </p>
          <p className=" my-1">
            Ablaufdatum: {/* Date of Expiry :{" "} */}
            <span className=" ">
              {" "}
              {moment(modalData?.expireDate)?.format("DD-MM-YYYY")}{" "}
            </span>
          </p>
          <Link
            // to={`${modalData?.couponType === "Code" ? "" : modalData?.link}`}
            // target={`${modalData?.couponType === "Code" ? "" : "_blank"}`}
            to={`${
              modalData?.couponType === "Code"
                ? modalData?.link
                : modalData?.link
            }`}
            target={`${modalData?.couponType === "Code" ? "_blank" : "_blank"}`}
            className="btn btn-danger opacity-75 text-white w-md-25 w-sm-50 rounded-pill px-2  "
          >
            {/* {modalData?.couponType === "Code"
              ? modalData?.code
              : "Go To Provider"} */}
            Gehen Sie zum Anbieter {/* Go To Provider */}
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CouponPopUp;
