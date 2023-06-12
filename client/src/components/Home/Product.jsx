import React from "react";
import { Link } from "react-router-dom";
import hp from "./Asset/hp.png";
import {
  FaSearch,
  FaPowerOff,
  FaUserCircle,
  FaRegShareSquare,
} from "react-icons/fa";
// import { Rating } from "@material-ui/lab";

const Product = ({ product }) => {
  //   const options = {
  //     value: product.ratings,
  //     readOnly: true,
  //     precision: 0.5,
  //   };
  return (
    <Link
      className="productCard position-relative col-md-3"
      to={`/brand/${product?._id}`}
    >
      <img src={product?.images?.url} alt={product?.name} />
      <p>{product?.name}</p>
      <div>
        {/*
       <Rating {...options} />{" "}
       <span className="productCardSpan">
       {" "}
       ({product?.numOfReviews} Reviews)
       </span>
      */}
      </div>

      <p className="shareIcon position-absolute top-0 end-0 me-4 text-danger ">
        <FaRegShareSquare />
      </p>
    </Link>
  );
};

export default Product;
