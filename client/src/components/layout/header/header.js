import React, { useState, useEffect } from "react";
import logo from "../assets/2.png";
import { FaSearch, FaPowerOff, FaUserCircle } from "react-icons/fa";
import { Link, redirect, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import Search from "../search/Search";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./header.css";
let bootstrap;
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
function Header() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");

  const navigate = useNavigate();
  const [openModel, setOpenModel] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState(false);
  const catogary = [
    {
      name: "Home",
      value: "Mobiles",
      icon: "cui-dollar",
      link: "/",
    },
    {
      name: "All Brands",
      value: "allStores",
      link: "/brands",
    },
    {
      name: "Categories",
      value: "categories",
      icon: "cui-dollar",
      link: "/categories",

      children: [
        { id: 1, label: "Mobile" },
        { id: 2, label: "Clothing" },
        { id: 3, label: "Pharmacy & Health" },
        { id: 4, label: "Vehicles" },
        { id: 5, label: "Flowers and Decor" },
        { id: 6, label: "Glasses & Contact lenses" },
        { id: 7, label: "Movies, Music & Games" },
        { id: 8, label: "Stationary" },
        { id: 9, label: "Home & Garden" },
        { id: 10, label: "Skincare & Cosmetics" },
        { id: 11, label: "Books & Magazines" },
        { id: 12, label: "Sports" },
        { id: 13, label: "Internet & Cellular" },
        { id: 14, label: "Fashion" },
        { id: 15, label: "Travel & Tour" },
        { id: 16, label: "Jewelry" },
        { id: 17, label: "Watches" },
        { id: 18, label: "Office" },
        { id: 19, label: "Eat & Drink" },
        { id: 20, label: "Shoes" },
        { id: 21, label: "Shopping" },
        { id: 22, label: "Toys and Babies" },
        { id: 23, label: "Kitchen" },
        { id: 24, label: "Entertainment" },
        { id: 25, label: "Hotel" },
        { id: 26, label: "Electronics" },
      ],
    },
  ];
  const redirectToAdmin = () => {
    navigate("/admin");
    window.location.reload();

    // setOpen(true); // for  rerender page
  };
  const searchToggle = () => {
    setOpenModel(!openModel);
  };
  const handleLogout = () => {
    localStorage.clear(); // clear the localStorage
    // perform other logout tasks, such as redirecting to the login page
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    // if (cat)   navigate(`/products/${cat}`, { state:  });
  }, [cat]);

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-white shadow text-white  fixed-top">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">
            <img
              src={""}
              className="text-warning fs-3 fw-4"
              alt="Fatcoupon"
              width="180vmax"
              style={{ color: "#37ee1b" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav  justify-content-center flex-grow-1 pe-3">
              {catogary?.map(({ name, value, children, link }) => (
                <>
                  <li className="nav-item   ms-3" key={name}>
                    <Link to={`${link}`} className="nav-link  " key={name}>
                      {name}
                    </Link>
                    {/* {children && (
                      <ul className="dropdown-menu ">
                        {children?.map(({ label: childrenName }) => (
                          <li>
                            <p
                              className="dropdown-item"
                              onClick={() =>
                                navigate(`/products/${childrenName}`, {
                                  state: { category: value },
                                })
                              }
                              key={childrenName}
                            >
                              {childrenName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                            */}{" "}
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        {/* <form className="d-flex mt-2 flex-end " role="search">
            <input
              className="form-control me-2 px-5 rounded-pill "
              type="search"
              placeholder="Search . . ."
              aria-label="Search"
            />
              </form>
              onClick={()=>searchToggle()}
           
        <button
          type="button"
          className="btn text-white "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Link to="/search" className="text-warning">
            <FaSearch />
          </Link>
        </button>
         */}
        {token ? (
          <NavDropdown
            className="btn  "
            title={<FaUserCircle />}
            id="nav-dropdown"
          >
            <p className="text-dark pe-none" eventKey="4.4">
              Profile
            </p>
            <NavDropdown.Divider />

            {userName === "admin" && (
              <NavDropdown.Item eventKey="4.1">
                <p className="text-dark" onClick={redirectToAdmin}>
                  {" "}
                  Admin{" "}
                </p>
              </NavDropdown.Item>
            )}
            <NavDropdown.Item eventKey="4.2" onClick={handleLogout}>
              <p className="text-dark"> LogOut</p>
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          ""
        )}
      </nav>
      {openModel && <Search />}
    </>
  );
}

export default Header;
