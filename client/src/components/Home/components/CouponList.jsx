import React, { useEffect, useState } from "react";
import "../index.css";
import Coupon from "./Coupon";
import CouponPopUp from "./CouponPopUp";
const CouponList = ({ Coupons }) => {
  const [showAll, setShowAll] = useState(false);
  const [modalData, setmodalData] = useState({});
  const [coupons, setCoupons] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // make a fun in useeffect to check if the screen is mobile or not and then set the showall to false
  useEffect(() => {
    Coupons && setCoupons(Coupons.filter((coupon) => coupon.popular));
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
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
    <div className="product-list row justify-content-center">
      {/* here map the coupons on mobile view first 6  only then show all button when on click show all button show all coupons
       */}

      {coupons.map(
        (product, index) =>
          product.popular &&
          (index < 6 || showAll || isDesktop) && (
            <Coupon
              key={product.id}
              product={product}
              callBack={() => modalToggle(product)}
            />
          )
      )}
      {console.log(
        "!isDesktop && Coupons.length > 6 && !showAll",
        isDesktop,
        !isDesktop,
        Coupons.length > 6,
        showAll,
        !showAll
      )}
      {!isDesktop && Coupons.length > 6 && !showAll && (
        <button
          className="show-all-button btn btn-outline-warning rounded-pill w-50  "
          onClick={toggleShowAll}
        >
          Show All
        </button>
      )}
      {
        <CouponPopUp
          modalData={modalData}
          isOpenModal={isOpenModal}
          modalToggle={modalToggle}
        />
      }
    </div>
  );
};

export default CouponList;
