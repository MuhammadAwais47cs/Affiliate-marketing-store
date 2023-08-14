import React from "react";
import { Link } from "react-router-dom";

const Coupon = ({ product, callBack }) => {
  const { images, description, badge } = product;
  return (
    <Link to="" className="Coupon col-sm-2 col-lg-3 position-relative pe-auto ">
      <div
        class="my-2 p-2 rounded-2 shadow d-flex flex-column align-items-center "
        onClick={callBack}
      >
        <img src={images.url} alt="" height="60" width="80" />
        <p class="text-truncate py-1 w-100 text-center"> {description}</p>

        <span
          class=" mt-3 w-100 "
          style={{ "border-top": "2px green dashed " }}
        ></span>
        <button class="btn btn-sm mt-2 fs-6 btn-outline-success rounded-pill ">
          Show
        </button>
        <span
          className="  position-absolute top-0 end-0 mt-3 px-2  text-white bg-danger rounded-pill "
          style={{ fontSize: "12px", marginRight: "1.2rem" }}
        >
          {badge}
        </span>
      </div>
    </Link>
  );
};

export default Coupon;
