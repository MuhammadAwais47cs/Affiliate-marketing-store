import React from "react";
import { Link } from "react-router-dom";

const Coupon = ({ goFromHomePage, product, callBack, goToBrandDetailPage }) => {
  const handleClick = (link) => {
    // Store scroll position and other relevant state information
    const scrollPosition = window.scrollY;
    const secondTabURL = `/brand/${product?.relatedBrand}?popId=${product?._id}&scrollPosition=${scrollPosition}`;
    window.open(secondTabURL, "_blank");
    window.location.href = link;
    // window.location.href = secondTabURL;
  };

  const { images, description, name, link, _id } = product;
  // if it comes from gofromhomepage then it go brand details page and then open new tab and change the current tab link to brand link
  return (
    <>
      {goFromHomePage ? (
        <div
          className="productCard position-relative col-md-3"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(product?.link)}
        >
          <img src={images?.url} alt={description} />
          <p className="text-truncate py-1 w-100 fw-bold text-center">{name}</p>
          <span className="text-truncate  w-100 text-theame text-center">
            {description}
          </span>
        </div>
      ) : (
        <Link
          // onClick={goToBrandDetailPage ? handleLinkClick : callBack}
          // onClick={(e) => {
          //   handleLinkClick(e, link);
          //   callBack();
          // }}
          // onClick={(e) => handleClick(link, window.location.href)}
          className="productCard position-relative col-md-3"
          to={`${goToBrandDetailPage ? `/brand/${_id}` : link}`}
          // to={`${modalData?.couponType === "Code" ? "" : modalData?.link}`}
          // target={`${!goToBrandDetailPage && "_blank"}`}
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
        </Link>
      )}
    </>

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
