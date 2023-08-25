// Making a component for the data list and importing it in the home page
import React, { useEffect, useMemo, useState } from "react";
import Category from "./Category.jsx";
import { calculateVisibleBrands } from "../../../utils/functions";

const CategoriesList = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useMemo(() => {
    const categoriesList = calculateVisibleBrands(data, isDesktop, 10, 4);
    console.log("data...........", data);
    console.log("categoriesList...........", categoriesList);
    setCategories(categoriesList);
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
        {console.log("categories", categories)}
        {categories &&
          categories.map((category, index) => (
            <Category key={category._id} category={category} />
          ))}
      </div>
      <div className="row justify-content-center my-1">
        {!showAll && (
          <button
            className="col-4 col-lg-1 show-all-button btn btn-outline-warning rounded-pill "
            onClick={() => {
              setShowAll(true);
              setCategories(data.slice(0, 40));
            }}
          >
            Show All
          </button>
        )}
      </div>
    </>
  );
};
export default CategoriesList;
