import React from "react";
import { Link } from "react-router-dom";

const Coupon = ({ product, callBack }) => {
  const { images, name, description, badge } = product;
  return (
    <Link
      to=""
      onClick={callBack}
      className="col-md-3 position-relative pe-auto "
    >
      <div class="m-2 p-2 rounded-2 shadow d-flex flex-column align-items-center ">
        <img src={images.url} alt="" height="60" width="60" />
        <p class="card-text py-1"> {description}</p>

        <span
          class=" mt-3 w-100 "
          style={{ "border-top": "2px grey dashed " }}
        ></span>
        <button class="btn btn-sm mt-2   fs-6 btn-outline-warning rounded-pill ">
          Show
        </button>
        <span
          className="  position-absolute top-0 end-0 mt-3 px-1  text-white bg-danger rounded-pill "
          style={{ fontSize: "12px", marginRight: "2rem" }}
        >
          {badge}
        </span>
      </div>
    </Link>
  );
};

export default Coupon;
