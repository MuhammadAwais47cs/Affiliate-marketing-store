import React, { useState, useEffect, useMemo } from "react";
import CouponPopUp from "../../Home/components/CouponPopUp";
import moment from "moment";
import useScrollTo from "../../../hooks/useScrollTo";

function ProductCard({ product , brandId }) {
  const [modalData, setModalData] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalToggle = (product) => {
    setModalData(product);
    setIsOpenModal(!isOpenModal);
  };

  const scrollPosition = useMemo(() => window.scrollY, []);
  const queryParameters = new URLSearchParams(window.location.search);
  const scrollPositionFromQueryParameter =
    queryParameters.get("scrollPosition");

  useScrollTo(scrollPositionFromQueryParameter || scrollPosition);
  const handleClick = (link, history, product) => {
    // Get the URL for the first new tab from an anchor tag
    // const firstTabURL = document.getElementById(link).href;

    // Store scroll position and other relevant state information
    const scrollPosition = window.scrollY;
    // Add more state variables as needed
    // Close the current tab
    window.close();
    // Use window.open to open the first new tab with the specified URL
    window.open(link, "_blank");

    // Open the second new tab and pass state information as query parameters
    const secondTabURL = `/brand/${brandId}?scrollPosition=${scrollPosition}`;
    window.open(secondTabURL, "_blank");
    // window.onload = function () {
    //   modalToggle(product);
    // };
  };

  // const handleClick = (link, history, product) => {
  //   // modalToggle(product);
  //   // Close the current tab
  //   window.close();
  //   // Open the first new tab with the specified URL
  //   window.open(link, "_blank");

  //   // Open the second new tab and pass state information as query parameters
  //   const secondTabURL = `${history}?scrollPosition=${scrollPosition}`;
  //   window.open(secondTabURL, "_blank");
  // };
 

  const { images, brand, description, expireDate, link } = product;

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-8 card border-0 mb-3 shadow">
        <div className="row  g-0 ">
          <div className="col-3 d-flex flex-column align-items-center p-3  ">
            <img
              src={images?.url}
              alt="coupon"
              className="bd-placeholder-img img-fluid rounded "
              width="100"
              height="100"
            />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title ">{brand?.name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated : {moment(expireDate).format("DD-MM-YYYY")}
                </small>
              </p>
            </div>
          </div>
          <div className="col-3 d-flex flex-column justify-content-center align-items-center  ">
            <button
              className="btn btn-success w-75"
              onClick={() => handleClick(link, window.location.href, product)}
            >
              Get Deal
            </button>
            {isOpenModal && (
              <CouponPopUp modalData={modalData} modalToggle={modalToggle} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// import React, { useState } from "react";
// import CouponPopUp from "../../Home/components/CouponPopUp";
// import moment from "moment";
// import useScrollTo from "../../../hooks/useScrollTo";

// function ProductCard({ product }) {
//   const [modalData, setmodalData] = useState("");
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   const handleClick = (link, history, product) => {
//     // Get the URL for the first new tab from an anchor tag
//     // const firstTabURL = document.getElementById(link).href;

//     // Store scroll position and other relevant state information
//     const scrollPosition = window.scrollY;
//     // Add more state variables as needed

//     // Use window.open to open the first new tab with the specified URL
//     window.open(link, "_blank");

//     // Open the second new tab and pass state information as query parameters
//     const secondTabURL = `${history}?scrollPosition=${scrollPosition}`;
//     window.open(secondTabURL, "_blank");
//     // window.onload = function () {
//     //   modalToggle(product);
//     // };
//     // Close the current tab
//     window.close();
//   };
//   const modalToggle = (product) => {
//     setTimeout(() => {
//       alert("Second tab");
//       setmodalData(product);
//       setIsOpenModal(!isOpenModal);
//     }, 3000); // Adjust the delay as needed
//   };
//   const scrollPosition = window.scrollY;
//   const queryParameters = new URLSearchParams(window.location.search);
//   const scrollPositionFromQueryParameter =
//     queryParameters.get("scrollPosition");

//   useScrollTo(scrollPositionFromQueryParameter || scrollPosition);

//   console.log("product :>> ", product);
//   const { images, brand, description, expireDate, link } = product;
//   return (
//     <div className="d-flex justify-content-center">
//       <div className="col-md-8 card border-0       mb-3 shadow">
//         <div className="row  g-0 ">
//           <div className="col-3 d-flex flex-column align-items-center p-3  ">
//             <img
//               src={images?.url}
//               alt="coupon"
//               className="bd-placeholder-img img-fluid rounded "
//               width="100"
//               height="100"
//             />
//           </div>
//           <div className="col-6">
//             <div className="card-body">
//               <h5 className="card-title ">{brand?.name}</h5>
//               <p className="card-text   ">{description}</p>
//               <p className="card-text">
//                 <small className="text-body-secondary">
//                   Last updated : {moment(expireDate).format("DD-MM-YYYY")}{" "}
//                 </small>
//               </p>
//             </div>
//           </div>
//           <div className="col-3 d-flex flex-column justify-content-center align-items-center  ">
//             <button
//               className="btn btn-success w-75"
//               onClick={(e) => handleClick(link, window.location.href, product)}
//               // onClick={() => modalToggle(product)}
//             >
//               Get Deal
//             </button>
//             {
//               <CouponPopUp
//                 modalData={modalData}
//                 isOpenModal={isOpenModal}
//                 modalToggle={modalToggle}
//               />
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
