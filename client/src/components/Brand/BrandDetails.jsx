import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBrandDetails } from "../../actions/brandAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import "./BrandDetails.css";
import { getProduct } from "../../actions/productAction";
import ProductCard from "./components/ProductCard";
function ProductDetails() {
  const { loading, brand, error } = useSelector((state) => state.brandDetails);
  const { products, resultPerPage, productsCount } = useSelector(
    (state) => state.products
  );

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

    dispatch(getProduct("", "", "", "", "", id));
    // }
  }, [dispatch, id, brand?.name, error, alert]);

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
            {products?.map((product) => (
              <ProductCard product={product} />
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default ProductDetails;
