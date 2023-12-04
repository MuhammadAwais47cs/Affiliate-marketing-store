import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Brands.css";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { getBrand } from "../../actions/brandAction";
import Product from "../Home/Product";
import { useLocation } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { alphabets } from "./data";
import Coupon from "../Home/components/Coupon";
import { getAllTopBrands, getXnumOfCategories } from "../../utils/callsReturnData";
function Brands({ withCate }) {
  const params = useParams();
  const location = useLocation();
  const { keyword, id } = params;
  console.log('params :>> ', params);
  const { state } = location;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [alphabet, setAlphabet] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [topBrands, setTopBrands] = useState([]);
  const [allCategories , setAllCategories] = useState([]);
  const [price, setPrice] = useState(500000);

  const noProduct = { name: "No Product Found" };
  const { loading, error, brands, cateName, resultPerPage, brandsCount } = useSelector(
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
    getXnumOfCategories(20 , false).then((cat) => {setAllCategories(cat);}).catch((error) => console.log(error))
    getAllTopBrands().then((brands) => {setTopBrands(brands);}).catch((error) => console.log(error))

    if (error) return alert.error(error);
    withCate
      ? dispatch(getBrand("", "", "", "", "", id))
      : keyword ? dispatch(getBrand(keyword, "", "", "", "", ""))

        : dispatch(getBrand("", "", "", "", "", false, true)); // true means withAlphabet
  }, [dispatch, keyword, currentPage, id, withCate, state, error]);
  return (
    <>
      <>
        <div className="  pt-5 bg-light  ">
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          {(!withCate && !keyword) &&
            <div className=" d-flex flex-row flex-wrap justify-content-center rounded-4 bg-white shadow mx-5 px-auto py-2 ">
              {alphabets.map((name, i) => (
                <a key={i}
                  className={`btn btn-sm btn-outline-warning btn-opacity-25 rounded-pill mx-1 ${alphabet === name && "active"
                    }`}
                  href={`#${name}`}
                // onClick={(e) => getBrandByAlphabet(e, name)}

                // onClick={() =>setAlphabet(name) }
                >
                  {name}
                </a>
              ))}
            </div>}
          {console.log('cateName >> ', cateName)}
          <h2 className="productsHeading fs-3 fw-3">{withCate ? cateName?.label : ' All Brands'}</h2>
          {loading ? (
            <Loader />
          ) : (
            <>
              {withCate || keyword ? (
                <div className="row" >
                  <div className="col-md-9" >

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
                                  goToBrandDetailPage={true}
                                />
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
                  </div>
                  <div className="col-md-3" >
                    <div className=" mt-2 bg-white rounded-3  py-2 shadow-sm">
                      <h5 className="text-danger text-center">All Categories</h5>
                      <ul className="categoryBox row justify-content-center">
                        {allCategories?.map(({ _id, label }) => (
                          <Link to={`/categories/brands/${_id}`}
                            className="category-link bg-light shadow-sm rounded col-5 "
                            key={_id}
                          >
                            {label}
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div className=" mt-2 bg-white rounded-3  py-2 shadow-sm">
                      <h5 className="text-danger text-center">Related Brands</h5>
                      <ul className="categoryBox row justify-content-center">
                        {/* { cateName?.relatedBrand?.map(({ _id, name }) => ( */}
                        { topBrands?.map(({ _id, name }) => (
                  <Link to={`/brand/${_id}`}
                            className="category-link bg-light shadow-sm rounded col-5 "
                            key={_id}
                          >
                            {name}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              ) : (
                <div
                  className="row justify-content-center mx-auto "
                  style={{ width: "90%" }}
                >
                  {brands &&
                    brands.map((brand, index) => (
                      <>
                        <div
                          className="stores-cat panel row justify-content-center bg-white shadow my-5  "
                          key={index}
                          id={brand.alpabets}
                          style={{ scrollMarginTop: "130px" }}
                        >
                          <h3 className="stores-cat-header text-center">
                            <span className="bg-warning bg-opacity-100 border rounded-circle px-4 py-3 shadow-lg">
                              {brand.alpabets}
                            </span>
                          </h3>
                          {brand?.filterBrands?.slice(0, 4)?.map((item) => (
                            <Coupon
                              key={item._id}
                              product={item}
                              // callBack={() => modalToggle(brand)}
                              goToBrandDetailPage={true}
                            />
                          ))}
                          <div className="row justify-content-center my-1 pb-2 ">
                            {!showAll || brand.alpabets !== alphabet ? (
                              <button
                                className="col-4 col-lg-2 show-all-button btn btn-warning rounded-pill "
                                onClick={() => {
                                  setShowAll(true);
                                  setAlphabet(brand.alpabets);
                                  // setCoupons(Coupons.slice(0, 40));
                                }}
                              >
                                Show More
                              </button>
                            ) : (
                              <></>
                            )}
                            {showAll &&
                              brand.alpabets === alphabet &&
                              brand?.filterBrands
                                ?.slice(4)
                                ?.map(({ _id, name }) => (
                                  <Link
                                    className="productCard position-relative col-md-3 pt-1"
                                    to={`/brand/${_id}`}
                                    key={_id}
                                  >
                                    <p className="text-truncate py-1 w-100 fw-bold text-center">
                                      {name}
                                    </p>
                                  </Link>
                                ))}
                          </div>
                        </div>
                      </>
                    ))}

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


            </>
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
