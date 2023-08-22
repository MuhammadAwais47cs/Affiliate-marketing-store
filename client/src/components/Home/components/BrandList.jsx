// Making a component for the data list and importing it in the home page
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product";
import { calculateVisibleBrands } from "../../../utils/functions";

const BrandList = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const [brands, setBrands] = useState([]);
  // const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useMemo(() => {
    const brandsList = calculateVisibleBrands(data, isDesktop, 10, 6);
    setBrands(brandsList);
  }, [data, isDesktop]);

  useEffect(() => {
    // data && setBrands(data.filter((data) => data.popular));
    // here we are filtering the data and setting the brands that is isdesktop then show first 20 brands and if less than desktop then show first 6 brands
    // const brandsList = isDesktop >= 1024 ? data.slice(0, 10) : data.slice(0, 6);
    const handleResize = () => {
      setIsDesktop(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data]);
  console.log("data", data);

  return (
    <>
      <div className="row justify-content-center ">
        {brands &&
          brands.map(
            (brand, index) => (
              // brand.published &&
              // (index < 6 || showAll || isDesktop) && (
              <Product key={brand._id} product={brand} />
            )
            // )
          )}
      </div>
      <div className="row justify-content-center ">
        {!showAll && (
          <button
            className="col-3 show-all-button btn btn-outline-warning rounded-pill w-50  "
            onClick={() => {
              setShowAll(true);
              setBrands(data.slice(0, 40));
            }}
          >
            Show All
          </button>
        )}
      </div>
    </>
  );
};
export default BrandList;
