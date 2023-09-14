import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Brands.css";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { getBrand } from "../../actions/brandAction";
import Product from "../Home/Product";
import { useLocation } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { alphabets } from "./data";
import Coupon from "../Home/components/Coupon";
function Brands({ withCate }) {
  const params = useParams();
  const location = useLocation();
  const { keyword, id } = params;
  const { state } = location;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [alphabet, setAlphabet] = useState(null);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(500000);

  const noProduct = { name: "No Product Found" };
  const { loading, error, brands, resultPerPage, brandsCount } = useSelector(
    (state) => state.brands
  );

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const getBrandByAlphabet = (e, name) => {
    e.preventDefault();
    setAlphabet(name);
    dispatch(getBrand("", "", "", "", name, ""));
  };

  useEffect(() => {
    if (error) return alert.error(error);
    withCate
      ? dispatch(getBrand("", "", "", "", "", id))
      : dispatch(getBrand());
  }, [dispatch, keyword, currentPage, id, withCate, state, error]);
  return (
    <>
      <>
        <div className="  pt-5 bg-light  ">
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <div className=" d-flex flex-row flex-wrap justify-content-center rounded-4 bg-white shadow mx-5 px-auto py-2 ">
            {alphabets.map((name) => (
              <button
                className={`btn btn-sm btn-outline-warning btn-opacity-25 rounded-pill mx-1 ${
                  alphabet === name && "active"
                }`}
                onClick={(e) => getBrandByAlphabet(e, name)}
              >
                {name}
              </button>
            ))}
          </div>
          {}
          <h2 className="productsHeading fs-3 fw-3">All Brands</h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="row justify-content-center ">
              {brands &&
                brands.map(
                  (brand) =>
                    brand.published && (
                      <>
                        <Coupon
                          key={brand._id}
                          product={brand}
                          // callBack={() => modalToggle(brand)}
                          hitFromBrandPage
                        />
                        {/* <Product key={brand._id} product={brand} /> */}
                      </>
                    )
                )}

              {brands[0] === undefined && (
                <div className="col-md-6 border rounded-5 shadow py-5 my-5 error-container ">
                  <h2 className="text-center">No Brand Found</h2>
                  <p className="px-4 text-center text-secondary my-3">
                    Sorry, we couldn't find any Brand matching your search
                    criteria. Please try again with a different search term or
                    refine your filters.
                  </p>
                </div>
              )}
            </div>
          )}

          {resultPerPage < brandsCount && brands.lenght > 0 && (
            <>
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={brandsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            </>
          )}
        </div>
      </>
    </>
  );
}

export default Brands;
