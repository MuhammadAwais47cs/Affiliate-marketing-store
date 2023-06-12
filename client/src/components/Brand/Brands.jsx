import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Brands.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductDetails, getProduct } from "../../actions/productAction";
import Pagination from "react-js-pagination";
import { getBrand } from "../../actions/brandAction";
import Product from "../Home/Product";
import { useLocation } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
function Brands() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { keyword } = params;
  const { state } = location;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(500000);

  const noProduct = { name: "No Product Found" };

  // const { loading, error, products, resultPerPage, productsCount } =
  // useSelector((state) => state.products);
  const { loading, error, brands, resultPerPage, brandsCount } = useSelector(
    (state) => state.brands
  );

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) return alert.error(error);
    // dispatch(getProduct(keyword, currentPage, price, state));
    dispatch(getBrand());
  }, [dispatch, keyword, currentPage, price, state, error]);
  return (
    <>
      <>
        <div className="productsPage pt-5 mt-5">
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          {}
          <h2 className="productsHeading fs-3 fw-3">All Brands</h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="products ms-3 ">
              {brands &&
                brands.map(
                  (brand) =>
                    brand.published && (
                      <Product key={brand._id} product={brand} />
                    )
                )}

              {brands[0] === undefined && (
                <div className="col-md-6 border rounded-5 shadow py-5 my-5 error-container ">
                  <h2 className="text-center">No Product Found</h2>
                  <p className="px-4 text-center text-secondary my-3">
                    Sorry, we couldn't find any products matching your search
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
