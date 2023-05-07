import React, { useState, Fragment } from "react";
import MetaData from "../MetaData";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      // navigate(`/products?search=${keyword}`);
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;

// import React, { useState, Fragment } from "react";
// import MetaData from "../MetaData";
// // import "./Search.css";

// export  const Search = ({history}) => {

// const [keyword, setKeyword] = useState("");

// const searchSubmitHandler = (e) => {
//   e.preventDefault();
//   alert(keyword)
//   if (keyword.trim()) {
//     // history.push(`/products/${keyword}`);
//   } else {
//     // history.push("/products");
//   }
// };

//      return (
//         <>
//         //  Button trigger modal

// //  Modal
// <MetaData title="Search A Product -- ECOMMERCE" />

// <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div className="modal-dialog">
//   <div className="modal-content">

//     <div className="modal-body">
//     <form className="searchBox" onSubmit={searchSubmitHandler}>
//     <input
//       type="text"
//       placeholder="Search a Product ..."
//       onChange={(e) => setKeyword(e.target.value)}
//     />
//     <input type="submit" value="Search" />
//   </form>
//     </div>

//   </div>
// </div>
// </div>
//         </>
//     )
// }
