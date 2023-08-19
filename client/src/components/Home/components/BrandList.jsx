// Making a component for the brand list and importing it in the home page
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product";

const BrandList = ({ brand }) => {
  const [showAll, setShowAll] = useState(false);
  const [brands, setBrands] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    brand && setBrands(brand.filter((brand) => brand.popular));
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [brand]);

  return (
    <>
      <div className="row justify-content-center ">
        {brands &&
          brands.map(
            (brand, index) =>
              brand.published &&
              brand.popular &&
              (index < 6 || showAll || isDesktop) && (
                <Product key={brand._id} product={brand} />
              )
          )}
      </div>
    </>
  );
};
export default BrandList;
