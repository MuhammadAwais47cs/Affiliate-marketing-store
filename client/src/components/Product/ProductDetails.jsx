import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails, getProduct } from "../../actions/productAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import "./ProductDetails.css";
import { getBrandDetails } from "../../actions/brandAction";
function ProductDetails() {
  const { product, error } = useSelector((state) => state.productDetails);
  const { loading, products, resultPerPage, productsCount } = useSelector(
    (state) => state.products
  );
  // const { brand } = useSelector((state) => state.Brands);
  console.log(
    "useSelector((state) => state.Brands); :>> ",
    useSelector((state) => state.Brands)
  );
  let pushDataArray = [];
  // console.table(products)
  if (products) {
    for (let i = 1; i < products.length; i++) {
      if (products[i]?.store !== products[i + 1]?.store) {
        pushDataArray.push({
          ...products[i],
          //
          store: products[i]["store"],
        });
      }
      // console.log("pushDataArray", pushDataArray); // Output: ['ali', 'asad', 'john']
    }
  }
  const key = "store";
  const arrayUniqueByKey = [
    ...new Map(products?.map((item) => [item[key], item])).values(),
  ];
  console.log("arrayUniqueByKey :>> ", arrayUniqueByKey);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    dispatch(getProductDetails(id));
    dispatch(getBrandDetails(id));
    // console.log('products.lenght < 1 :>> ',!products?.name,products, products.lenght < 1);
    if (!products?.name) {
      let proName = product?.name;
      console.log("products.lenght in  < 1 :>> ", proName, product?.name);
      dispatch(getProduct(proName));
    }
  }, [dispatch, id, product.name, error, alert]);

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product?.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              <div className="CarouselImage">
                <img
                  className="CarouselImage"
                  src={product?.imgUrl}
                  alt={` Slide`}
                />
              </div>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product?.name}</h2>
                <p>Product # {product?._id}</p>
              </div>
              <div className="detailsBlock-2">
                <span className="detailsBlock-2-span ">
                  {" "}
                  <span className="h5">Brand :</span>{" "}
                  <span className="h6 text-muted">{product?.brand}</span>
                </span>
              </div>
              <div className="detailsBlock-2">
                <span className="detailsBlock-2-span ">
                  {" "}
                  <span className="h5">Description :</span>{" "}
                  <span className="h6 text-muted">{product?.description}</span>
                </span>
              </div>
              <div className="detailsBlock-3">
                <div className="detailsBlock-3-1">
                  <p>
                    Status:
                    <b
                      className={product?.Stock < 1 ? "redColor" : "greenColor"}
                    >
                      {product?.Stock < 1 ? " OutOfStock" : " InStock"}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid my-3 mb-md-5">
            <div className=" row mx-0 px-0 mb-4 py-3 bg-danger rounded-pill">
              <span className="detailsBlock-2-span ">
                {" "}
                <span className="h6 text-white ">
                  Compare {product.name} Prices
                </span>
              </span>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Store</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Price</th>
                  <th scope="col">DeliveryCharges </th>
                  <th scope="col">Rating </th>
                </tr>
              </thead>
              <tbody>
                {arrayUniqueByKey?.length > 1 ? (
                  arrayUniqueByKey.map((product, index) => (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{product.store}</td>
                      <td>{product?.stock}</td>
                      <td>Rs : {product.price}</td>
                      <td>Rs : {product?.DeliveryCharges}</td>
                      <td>{product?.rating}</td>
                      <td>
                        <button
                          type=""
                          className="btn btn-outline-success rounded-pill"
                          onClick={() => handleLinkClick(product.productUrl)}
                        >
                          Visit Store
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <th scope="row">1</th>
                    <td>{product.store}</td>
                    <td>{product?.stock}</td>
                    <td>Rs : {product.price}</td>
                    <td>Rs : {product?.DeliveryCharges}</td>
                    <td>{product?.rating}</td>
                    <td>
                      <button
                        type=""
                        className="btn btn-outline-success rounded-pill"
                        onClick={() => handleLinkClick(product.productUrl)}
                      >
                        Visit Store
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetails;
