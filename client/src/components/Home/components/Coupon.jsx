import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from "../../../baseurl";

const Coupon = ({ product, callBack, hitFromBrandPage }) => {
  const navigate = useNavigate();
  // const handleLinkClick = (e, link) => {
  //   console.log("handleLinkClick-------");
  //   if (e.ctrlKey || e.metaKey) {
  //     // If Ctrl (or Cmd on Mac) is held while clicking the link, open in a new tab
  //     return;
  //   }
  //   e.preventDefault();

  //   // Open the URL in a new tab
  //   // window.open(link, "_blank");
  //   // window.focus();
  //   // Handle the navigation in your own way, for example using history.push
  //   // history.push('');
  //   // navigate(link);
  // };
  const handleClick = (link, history) => {
    console.log("history ", history);
    // Close the current tab
    window.close();
    console.log("history ", history);

    // Open a new tab with a specific link
    const linkTab = window.open(link, "_blank");

    // Open a new tab with the previous page from the browser's history
    const historyTab = window.open("/", "_blank");
    historyTab.focus();
    // historyTab.document.write("<html><body>Going back...</body></html>");
    // setTimeout(() => {
    // historyTab.history.back();
    // }, 1000); // Adjust the delay as needed
  };

  const { images, description, badge, name, link, _id } = product;
  return (
    <div
      // onClick={hitFromBrandPage ? handleLinkClick : callBack}
      // onClick={(e) => {
      //   handleLinkClick(e, link);
      //   callBack();
      // }}
      onClick={(e) => handleClick(link, window.history)}
      className="productCard position-relative col-md-3"
      // to={`${hitFromBrandPage ? `/brand/${_id}` : link}`}
      // to={`${modalData?.couponType === "Code" ? "" : modalData?.link}`}
      // target={`${!hitFromBrandPage && "_blank"}`}
    >
      <img src={images?.url} alt={description} />
      <p className="text-truncate py-1 w-100 fw-bold text-center">{name}</p>
      <span className="text-truncate  w-100 text-theame text-center">
        {description}
      </span>
      <div>
        {/*
     <Rating {...options} />{" "}
     <span className="productCardSpan">
     {" "}
     ({product?.numOfReviews} Reviews)
     </span>
    */}
      </div>

      {/* <p className="shareIcon position-absolute top-0 end-0 me-md-2 me-lg-4 text-danger ">
      <FaRegShareSquare />
    </p> */}
    </div>
    // <Link to="" className="Coupon col-sm-2 col-lg-3 position-relative pe-auto ">
    //   <div
    //     className="my-2 p-2 rounded-2 shadow d-flex flex-column align-items-center "
    //     onClick={callBack}
    //   >
    //     <img src={images.url} alt="" height="60" width="80" />
    //     <p className="text-truncate py-1 w-100 text-center"> {description}</p>

    //     <span
    //       className=" mt-3 w-100 border border-top border-success border-dash "
    //       style={{ borderTop: "2px green dashed " }}
    //     />
    //     <button className="btn btn-sm mt-2 fs-6 btn-outline-success rounded-pill ">
    //       Show
    //     </button>
    //     <span
    //       className="  position-absolute top-0 end-0 mt-3 px-2  text-white bg-danger rounded-pill "
    //       style={{ fontSize: "12px", marginRight: "1.2rem" }}
    //     >
    //       {badge}
    //     </span>
    //   </div>
    // </Link>
  );
};

export default Coupon;
