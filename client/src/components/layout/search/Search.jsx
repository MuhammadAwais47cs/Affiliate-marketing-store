import React, { useState, Fragment } from "react";
import MetaData from "../MetaData";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      // navigate(`/products?search=${keyword}`);
      navigate(`/brands/${keyword}`);
    } else {
      navigate("/brands");
      // navigate("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      {/* <form className="searchBox" onSubmit={searchSubmitHandler}>
        <div className=" rounded-pill"></div>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form> */}
      <form
        className="d-flex mt-2 flex-end "
        onSubmit={searchSubmitHandler}
        role="search"
      >
        <input
          className="form-control   rounded-pill "
          type="search"
          onChange={(e) => setKeyword(e.target.value)}
          // placeholder="Search . . ."
          aria-label="Search"
        />
        <button
          type="submit"
          className="btn text-color me-3 "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          // onClick={() => searchToggle()}
        >
          <FaSearch />
        </button>
      </form>
    </Fragment>
  );
};

export default Search;
