import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaRegShareSquare } from "react-icons/fa";

const Product = ({ product }) => {
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

      <p className="shareIcon position-absolute top-0 end-0 me-md-2 me-lg-4 text-danger ">
        <FaRegShareSquare />
      </p>
    </Link>
  );
};

export default Product;
