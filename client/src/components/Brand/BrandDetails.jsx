import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBrandDetails } from "../../actions/brandAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import "./BrandDetails.css";
import { getProduct } from "../../actions/productAction";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import { baseurl } from "../../baseurl";
import CouponPopUp from "../Home/components/CouponPopUp";
function ProductDetails() {
  const queryParameters = new URLSearchParams(window.location.search);
  const popId = queryParameters.get("popId");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setmodalData] = useState("");

  const modalToggle = (product) => {
    setmodalData(product);
    setIsOpenModal(!isOpenModal);
  };

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
    // get similar brands by brand.realtedBrand ids array
    brand?.length > 0 && getSimilarBrands(brand?.relatedBrands);

    if (popId) {
      axios
        .get(`${baseurl}/api/v1/product/${popId}`)
        .then(({ data }) => {
          console.log("res", data);
          setmodalData(data.product);
          setIsOpenModal(true);
        })
        .catch((error) => console.error(error));
    }
  }, [dispatch, id, brand?.name, error, alert]);

  // here write code for if we come from home page thorugh a special coupon  when we prform all those activities
  const scrollPosition = useMemo(() => window.scrollY, []);

  // const scrollPositionFromQueryParameter =
  // queryParameters.get("scrollPosition");

  const getSimilarBrands = async (relatedBrands) => {
    console.log("relatedBrands :>> ", relatedBrands);

    // write a post api to get similar brands by brand.realtedBrand ids array
    const { data } = await axios.post(
      `${baseurl}/api/v1/getSimilarBrands`,
      { relatedBrands },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("data :>> ", data);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${brand?.name} -- ECOMMERCE`} />
          <section className="ProductDetails ">
            <div className="card border-bottom border-3     mb-3">
              <div className="row  g-0 w-md-100 w-lg-75">
                <div className="col-4 d-flex flex-column align-items-center   ">
                  <img
                    src={brand?.images?.url}
                    alt="coupon"
                    className="bd-placeholder-img img-fluid rounded "
                    width="100"
                    height="100"
                  />
                  <h5 className="card-title mt-4">{brand?.name}</h5>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <p className="card-text   ">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ">
            {products ? (
              products?.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  brandId={brand?._id}
                />
              ))
            ) : (
              <Loader />
            )}
          </section>
        </>
      )}
      {isOpenModal && (
        <CouponPopUp
          modalData={modalData}
          isOpenModal={isOpenModal}
          modalToggle={modalToggle}
        />
      )}
    </>
  );
}

export default ProductDetails;
