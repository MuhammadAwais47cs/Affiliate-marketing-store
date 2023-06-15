import React from "react";
import { Link } from "react-router-dom";

const Coupon = ({ product, callBack }) => {
  const { images, name } = product;
  return (
    <Link to="" onClick={callBack} className="col-md-3 pe-auto ">
      <div class="m-2 p-3 rounded-2 shadow d-flex flex-column align-items-center ">
        <img src={images.url} alt="" height="100" width="100" />
        <span
          class=" my-2 w-100 "
          style={{ "border-top": "2px grey dashed " }}
        ></span>
        <h5 class="card-title py-1">{name}</h5>
        <p class="card-text py-1">Some card's content.</p>
        <button class="btn btn-primary">somewhere</button>
      </div>
    </Link>
  );
};

export default Coupon;
