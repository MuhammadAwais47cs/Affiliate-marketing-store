import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Products.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductDetails, getProduct } from "../../actions/productAction";
import Pagination from "react-js-pagination";
import Product from "../Home/Product";
import { useLocation } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { keyword } = params;
  const { state } = location;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(500000);
  const categories = [
    { name: "Mobiles", value: "Mobiles" },
    { name: "Tablets", value: "Tablets" },
    { name: "Smart Watches", value: "Smart-Watches" },
    { name: "Wireless Earbuds", value: "Wireless-Earbuds" },
    { name: "Mobiles Accessories", value: "Mobiles-Accessories" },
    { name: "Laptops", value: "Laptops" },
    { name: "TV & Home Appliances", value: "TV-&-Home-Appliances" },
    { name: "Motorcycle", value: "Motorcycle" },
  ];
  const noProduct = { name: "No Product Found" };
  const Brands = [
    "Apple",
    "Samsung",
    "Realme",
    "Infinix",
    "Oppo",
    "Xiaomi",
    "Vivo",
    "Tecno",
    "Nokia",
  ];

  const { loading, error, products, resultPerPage, productsCount } =
    useSelector((state) => state.products);
  //  console.log(' useSelector(state=>state.products) :>> ',  useSelector(state=>state.products));

  //  const keyword
  const setCurrentPageNo = (e) => {
    // console.log('e :>> ', e);
    setCurrentPage(e);
  };
  const priceHandler = (e, newPrice) => {
    console.log("newPrice :>> ", newPrice, e.target.value);
    setPrice(e.target.value);
  };
  useEffect(() => {
    if (error) return alert.error(error);
    dispatch(getProduct(keyword, currentPage, price, state));
  }, [dispatch, keyword, currentPage, price, state, error]);
  return (
    <>
      <>
        <div className="productsPage pt-5 mt-5">
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          {}
          <h2 className="productsHeading">
            {state?.category ? state?.category : state?.brand}
          </h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="products ms-3 ">
              {products &&
                products?.map((product) => (
                  <Product key={product._id} product={product} />
                ))}

              {products[0] === undefined && (
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

          <div className="filterBox  ">
            <p className="text-danger">Price</p>
            <p className="text-muted"> Rs :{price}</p>
            <input
              type="range"
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={500000}
              step={20}
            />
            <div className="bg-light rounded-3 ps-3 py-2 shadow-sm">
              <p className="text-danger">Categories</p>

              <ul className="categoryBox">
                {categories.map(({ name, value }) => (
                  <li
                    className="category-link"
                    key={name}
                    // onClick={() => setCategory(value)}
                    onClick={() =>
                      navigate(`/products`, { state: { category: value } })
                    }
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" mt-4 bg-light rounded-3 ps-3 py-2 shadow-sm">
              <p className="text-danger">Shop By Brand</p>

              <ul className="categoryBox">
                {Brands.map((brand) => (
                  <li
                    className="category-link"
                    key={brand}
                    // onClick={() => setBrand(category)}
                    onClick={() => navigate(`/products`, { state: { brand } })}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {resultPerPage < productsCount && products.lenght > 0 && (
            <>
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
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

export default ProductDetails;
