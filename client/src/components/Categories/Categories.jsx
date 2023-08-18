import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Categories.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faMusic,
  faBottleWater,
  faCheck,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import MetaData from "../layout/MetaData";
import axios from "axios";
import { baseurl } from "../../baseurl";
import Loader from "../layout/Loader/Loader";
function Categories({ withId }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const noProduct = { name: "No Product Found" };

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandOrCate, setBrandOrCate] = useState("categories");
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
  const getAllBrands = async () => {
    const link = `${baseurl}/api/v1/brands/${id}`;
    const { data } = await axios.get(link);
    let brands = data?.brands?.map(({ _id, name }) => {
      return { id: _id, label: name };
    });
    setBrands(brands);
  };

  useEffect(() => {
    withId ? getAllBrands() : getAllCategories();
  }, []);
  return (
    <>
      <>
        <div className="productsPage pt-5 mt-5">
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          {}
          <h2 className="productsHeading fs-3 fw-3">
            {brandOrCate === "brand" ? "names" : "All Category"}
          </h2>
          {isloading ? (
            <Loader />
          ) : (
            <div className="products ms-3 ">
              {categories &&
                categories.map(({ id, label, icon }) => (
                  <div className="col-md-4" key={id}>
                    <Link
                      to={`/categories/brands/${id}`}
                      class="card border-0 shadow rounded-4 mb-3 w-75"
                    >
                      <div class="row  g-0">
                        <div class="col-4 my-auto d-flex justify-content-center   ">
                          <FontAwesomeIcon
                            icon={`${icon ? icon : faMobileScreenButton}}`}
                            style={{ color: "#f0cb14" }}
                            size="lg"
                          />
                        </div>
                        <div class="col-8">
                          <div class="card-body">
                            <h6 class="card-title text-warning">{label} </h6>
                          </div>
                        </div>
                      </div>
                    </Link>
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

          {/*  {resultPerPage < brandsCount && brands.lenght > 0 && (
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
      */}
        </div>
      </>
    </>
  );
}

export default Categories;
