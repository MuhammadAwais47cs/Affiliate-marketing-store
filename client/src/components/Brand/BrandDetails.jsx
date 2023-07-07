import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBrand, getBrandDetails } from "../../actions/brandAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import "./BrandDetails.css";
import { getProduct } from "../../actions/productAction";
function ProductDetails() {
  const { loading, brand, error } = useSelector((state) => state.brandDetails);
  const { products, resultPerPage, productsCount } = useSelector(
    (state) => state.products
  );
  // const { brand } = useSelector((state) => state.Brands);
  console.log(
    "useSelector((state) => state.Brands);  ",
    useSelector((state) => state.Brands),
    products
  );
  let pushDataArray = [];
  console.table(products);
  // if (products) {
  //   for (let i = 1; i < products.length; i++) {
  //     if (products[i]?.store !== products[i + 1]?.store) {
  //       pushDataArray.push({
  //         ...products[i],
  //         //
  //         store: products[i]["store"],
  //       });
  //     }
  //     // console.log("pushDataArray", pushDataArray); // Output: ['ali', 'asad', 'john']
  //   }
  // }
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
    // console.log(
    // "!brand?.name, brand, brand.lenght < 1:>> ",
    // !brand?._id,
    // brand,
    // brand.lenght < 1
    // );
    // if (brand?._id) {
    // let id = brand?._id;
    console.log(" id if =----------= :>> ", id);
    dispatch(getProduct("", "", "", "", "", id));
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
              <div class="row  g-0 w-md-100 w-lg-75">
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
          <section className=" ">
            {products?.map(
              ({ images, description, name, code, expireDate, badge }) => (
                <>
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
                                {expireDate}
                              </small>
                            </p>
                          </div>
                        </div>
                        <div class="col-3 d-flex flex-column justify-content-center align-items-center  ">
                          <button class="btn btn-success w-75">Get Deal</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            )}
          </section>
        </>
      )}
    </>
  );
}

export default ProductDetails;
