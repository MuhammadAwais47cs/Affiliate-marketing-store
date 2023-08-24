import React, { useEffect, useMemo, useState } from "react";
import "../index.css";
import Offers from "./Offers.jsx";
import CouponPopUp from "./CouponPopUp";
import { calculateVisibleBrands } from "../../../utils/functions";
const CouponList = ({ Coupons }) => {
  const [showAll, setShowAll] = useState(false);
  const [modalData, setmodalData] = useState({});
  const [coupons, setCoupons] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useMemo(() => {
    const list = calculateVisibleBrands(Coupons, isDesktop, 9, 3);
    setCoupons(list);
  }, [Coupons, isDesktop]);
  // make a fun in useeffect to check if the screen is mobile or not and then set the showall to false
  useEffect(() => {
    // Coupons && setCoupons(Coupons.filter((coupon) => coupon.popular));
    const handleResize = () => {
      setIsDesktop(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [Coupons]);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const modalToggle = (product) => {
    setmodalData(product);
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <div className="product-list row justify-content-center">
        {/* here map the coupons on mobile view first 6  only then show all button when on click show all button show all coupons
         */}

        {coupons.map(
          (product, index) => (
            // product.popular &&
            // (index < 6 || showAll || isDesktop) && (
            <Offers
              key={product._id}
              product={product}
              callBack={() => modalToggle(product)}
            />
          )
          // )
        )}
      </div>

      <div className="row justify-content-center my-1">
        {!showAll && (
          <button
            className="col-4 col-lg-1 show-all-button btn btn-outline-warning rounded-pill "
            // onClick={toggleShowAll}
            onClick={() => {
              setShowAll(true);
              setCoupons(Coupons.slice(0, 40));
            }}
          >
            Show All
          </button>
        )}
      </div>

      {
        <CouponPopUp
          modalData={modalData}
          isOpenModal={isOpenModal}
          modalToggle={modalToggle}
        />
      }
    </>
  );
};

export default CouponList;
