import React, { useState, useEffect, useMemo } from "react";
import RightArrow from "../Asset/angleRight.png";
import "../../../App.css";
// import { Link } from "react-router-dom";

function CountdownTimer({ expirationDate }) {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const expiration = expirationDate ? new Date(expirationDate) : new Date();

      // Calculate the time difference in milliseconds
      const timeDifference = expiration - now;

      if (timeDifference <= 0) {
        // The expiration date has passed
        clearInterval(intervalId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
      } else {
        // Calculate days, hours, and minutes
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeRemaining({ days, hours, minutes });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [expirationDate]);

  const scrollPosition = useMemo(() => window.scrollY, []);
  const queryParameters = new URLSearchParams(window.location.search);
  const scrollPositionFromQueryParameter =
    queryParameters.get("scrollPosition");
  useEffect(() => {
    if (scrollPositionFromQueryParameter || scrollPosition) {
      window.scrollTo(0, scrollPositionFromQueryParameter || scrollPosition);
    }
  }, [scrollPositionFromQueryParameter, scrollPosition]);

  return (
    <p className="card-text PromoCode text-truncate text-body-secondary my-0 ">
      {timeRemaining?.days} days {timeRemaining?.hours} hours{" "}
      {timeRemaining?.minutes} minutes
    </p>
  );
}
const Offers = ({ product, callBack }) => {
  const handleClick = (link) => {
    // Store scroll position and other relevant state information
    const scrollPosition = window.scrollY;
    const secondTabURL = `/?popId=${product?._id}&scrollPosition=${scrollPosition}`;
    window.open(secondTabURL, "_blank");
    window.location.href = link;
  };

  return (
    <>
      <div
        className="col-md-4"
        style={{ cursor: "pointer" }}
        onClick={() => handleClick(product?.link)}
      >
        <div className="card border-0 shadow rounded-3 mb-3">
          <div className="row  g-0 py-1">
            <div
              className="col-4 my-auto d-flex justify-content-center   "
              // style={{ borderRight: "1px dashed gray" }}
            >
              <div className="mx-auto ">
                <img
                  src={product.images.url}
                  alt="coupon"
                  className="bd-placeholder-img img-fluid rounded-pill  "
                  width="50"
                  height="75"
                />
                {/* <h5
                  className="    text-center text-truncate  py-1"
                  style={{ maxWidth: "5rem" }}
                  title={product?.name}
                >
                  {product?.name}
                </h5> */}
              </div>
            </div>
            <div className="col-7">
              <div className="card-body">
                <CountdownTimer expirationDate={product?.expireDate} />
                {/* <p className="card-text PromoCode text-truncate text-body-secondary my-0 ">
              </p> */}
                <h6 className="w-100 text-truncate  text-break my-1 text-theame ">
                  {" "}
                  {product?.description}
                </h6>
                <p className="card-text PromoCode text-truncate  text-body-secondary ">
                  {/* {moment(product?.expireDate).format("DD-MM-YYYY")}{" "} */}
                  {/* {`${product.name} Voucher`} */}
                  {product?.badge}
                  {/* <span className=" rounded-pill  px-3 py-1 text-danger">
                  </span> */}
                </p>
              </div>
            </div>
            <div
              className="col-1 my-auto d-flex justify-content-center   "
              // style={{ borderRight: "1px dashed gray" }}
            >
              <div className="me-2 ">
                <img
                  src={RightArrow}
                  alt="Right Arrow"
                  height="40px"
                  width="25px"
                  className=" shareIcon   text-danger "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to="" className="col-md-4" onClick={callBack}>
        <div className="card border-0 shadow rounded-3 mb-3">
          <div className="row  g-0 py-3">
            <div
              className="col-4 my-auto d-flex justify-content-center   "
              style={{ borderRight: "1px dashed gray" }}
            >
              <div className="mx-auto ">
                <img
                  src={product.images.url}
                  alt="coupon"
                  className="bd-placeholder-img img-fluid rounded-pill  "
                  width="50"
                  height="75"
                />
                <h5
                  className="    text-center text-truncate  py-1"
                  style={{ maxWidth: "5rem" }}
                  title={product?.name}
                >
                  {product?.name}
                </h5>
              </div>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="w-100 overflow-x-auto text-break my-1 ">
                  {" "}
                  {product?.description}
                </h5>
                <p className="card-text PromoCode text-truncate text-body-secondary text-end">
                  Promo code:{" "}
                  <span className=" rounded-pill  px-3 py-1 text-danger">
                    {moment(product?.expireDate).format("DD-MM-YYYY")}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link> */}
    </>
  );
};

// export default CountdownTimer;

export default Offers;
