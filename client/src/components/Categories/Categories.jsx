import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Categories.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductDetails, getProduct } from "../../actions/productAction";
import Pagination from "react-js-pagination";
import { getBrand } from "../../actions/brandAction";
import Product from "../Home/Product";
import { useLocation } from "react-router-dom";
import MetaData from "../layout/MetaData";
import axios from "axios";
import { baseurl } from "../../baseurl";

import Loader from "../layout/Loader/Loader";
function Categories() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { keyword } = params;
  const { state } = location;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const noProduct = { name: "No Product Found" };

  // const { loading, error, products, resultPerPage, productsCount } =
  // useSelector((state) => state.products);
  const { loading, error, brands, resultPerPage, brandsCount } = useSelector(
    (state) => state.brands
  );
  const [categories, setCategories] = useState([]);
  const [isloading, setLoading] = useState(true);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const getAllCategories = async () => {
    const link = `${baseurl}/api/v1/categories`;
    const { data } = await axios.get(link);
    let categories = data.categories.map(({ _id, label }) => {
      return { id: _id, label };
    });
    setCategories(categories);
    setLoading(false);
  };

  useEffect(() => {
    if (error) return alert.error(error);
    // dispatch(getProduct(keyword, currentPage, price, state));
    getAllCategories();
  }, []);
  return (
    <>
      <>
        <div className="productsPage pt-5 mt-5">
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          {}
          <h2 className="productsHeading fs-3 fw-3">All Category</h2>
          {isloading ? (
            <Loader />
          ) : (
            <div className="products ms-3 ">
              {categories &&
                categories.map(({ id, label }) => (
                  <div className="col-md-4" key={id}>
                    <div class="card border-0 shadow rounded-4 mb-3 w-75">
                      <div class="row  g-0">
                        <div class="col-4 my-auto d-flex justify-content-center   ">
                          <svg
                            class="bd-placeholder-img img-fluid rounded "
                            width="40%"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: Image"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                          >
                            <title>Placeholder</title>
                            <rect
                              width="100%"
                              height="100%"
                              fill="#868e96"
                            ></rect>
                            <text x="20%" y="50%" fill="#dee2e6" dy=".2em">
                              Image
                            </text>
                          </svg>
                        </div>
                        <div class="col-8">
                          <div class="card-body">
                            <h6 class="card-title text-warning">{label} </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {categories[0] === undefined && (
                <div className="col-md-6 border rounded-5 shadow py-5 my-5 error-container ">
                  <h2 className="text-center">No Category Found</h2>
                  <p className="px-4 text-center text-secondary my-3">
                    Sorry, we couldn't find any Category matching your search
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

export default Categories;
