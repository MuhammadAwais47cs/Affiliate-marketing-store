import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBrand, getBrandDetails } from "../../actions/brandAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import "./BrandDetails.css";
function ProductDetails() {
  const { loading, brand, error } = useSelector((state) => state.brandDetails);
  const { products, resultPerPage, productsCount } = useSelector(
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

    dispatch(getBrandDetails(id));
    // dispatch(getProductDetails(id));
    // console.log('products.lenght < 1 :>> ',!products?.name,products, products.lenght < 1);
    // if (!products?.name) {
    //   let proName = product?.name;
    //   console.log("products.lenght in  < 1 :>> ", proName, product?.name);
    //   dispatch(getProduct(proName));
    // }
  }, [dispatch, id, brand?.name, error, alert]);

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${brand?.name} -- ECOMMERCE`} />
          <section className="ProductDetails ">
            <div class="card border-bottom border-3     mb-3">
              <div class="row  g-0 w-75">
                <div class="col-4 d-flex flex-column align-items-center   ">
                  <img
                    src={brand?.images?.url}
                    alt="coupon"
                    class="bd-placeholder-img img-fluid rounded "
                    width="100"
                    height="100"
                  />
                  <h5 class="card-title mt-4">{brand?.name}</h5>
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <p class="card-text   ">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="ProductDetails">
            <div>
              <div className="CarouselImage">
                <img
                  className="CarouselImage"
                  src={brand?.imgUrl}
                  alt={` Slide`}
                />
              </div>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{brand?.name}</h2>
                <p>Product # {brand?._id}</p>
              </div>
              <div className="detailsBlock-2">
                <span className="detailsBlock-2-span ">
                  {" "}
                  <span className="h5">Brand :</span>{" "}
                  <span className="h6 text-muted">{brand?.brand}</span>
                </span>
              </div>
              <div className="detailsBlock-2">
                <span className="detailsBlock-2-span ">
                  {" "}
                  <span className="h5">Description :</span>{" "}
                  <span className="h6 text-muted">{brand?.description}</span>
                </span>
              </div>
              <div className="detailsBlock-3">
                <div className="detailsBlock-3-1">
                  <p>
                    Status:
                    <b className={brand?.Stock < 1 ? "redColor" : "greenColor"}>
                      {brand?.Stock < 1 ? " OutOfStock" : " InStock"}
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
                  Compare {brand.name} Prices
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
                    <td>{brand.store}</td>
                    <td>{brand?.stock}</td>
                    <td>Rs : {brand.price}</td>
                    <td>Rs : {brand?.DeliveryCharges}</td>
                    <td>{brand?.rating}</td>
                    <td>
                      <button
                        type=""
                        className="btn btn-outline-success rounded-pill"
                        onClick={() => handleLinkClick(brand.productUrl)}
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
