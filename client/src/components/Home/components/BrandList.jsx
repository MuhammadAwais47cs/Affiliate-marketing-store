// Making a component for the data list and importing it in the home page
import React, { useEffect, useMemo, useState } from "react";
import Product from "../Product";
import { calculateVisibleBrands } from "../../../utils/functions";

const BrandList = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const [brands, setBrands] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useMemo(() => {
    const brandsList = calculateVisibleBrands(data, isDesktop, 10, 6);
    setBrands(brandsList);
  }, [data, isDesktop]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data]);

  return (
    <>
      <div className="row justify-content-center ">
        {brands &&
          brands.map((brand, index) => (
            <Product key={brand._id} product={brand} />
          ))}
      </div>
      <div className="row justify-content-center my-1">
        {!showAll && (
          <button
            className="col-4 col-lg-1 show-all-button btn btn-outline-warning rounded-pill "
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
