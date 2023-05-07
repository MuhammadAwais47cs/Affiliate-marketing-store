import React, { useState, useEffect } from "react";
import logo from "../assets/2.png";
import { FaSearch, FaPowerOff, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
      children: [
        {
          name: "Apple",
          // url: "/OverviewMoneyOut",
          // icon: "cui-bookmark",
        },
        {
          name: "Infinix",
          // url: "/WhatType",
          // icon: "cui-pencil",
        },

        {
          name: "Nokia",
          // url: "/CreateSubsistence",
          // icon: "cui-pencil",
        },
        {
          name: "Oppo",
          // url: "/CreatePurchaseCreditNote",
          // icon: "cui-credit-card",
        },

        {
          name: "Realme ",
          // url: "/PurchaseRefundOverview",
          // icon: "cui-file",
        },

        {
          name: "Samsung",
          // url: "/OverviewInvoice33",
          // icon: "cui-envelope-open",
          // attributes: { disabled: true },
        },
        {
          name: "Vivo",
          // url: "/OverviewInvoice33",
          // icon: "cui-graph",
          // attributes: { disabled: true },
        },
        {
          name: "Xiaomi",
          // url: "/OverviewInvoice33",
          // icon: "cui-graph",
          // attributes: { disabled: true },
        },
      ],
    },
    {
      name: "All Store",
      value: "Tablets",
      // icon: "cui-dollar",
      children: [
        {
          name: "Apple ",
          // url: "/OverviewMoneyOut",
          // icon: "cui-bookmark",
        },
        {
          name: "Dany",
          // url: "/WhatType",
          // icon: "cui-pencil",
        },

        {
          name: "Huawei",
          // url: "/Mileage",
          // icon: "cui-pencil",
        },
        {
          name: "Samsung",
          // url: "/CreateSubsistence",
          // icon: "cui-pencil",
        },
      ],
    },
    {
      name: "Categories",
      value: "Smart-Watches",
      icon: "cui-dollar",
      children: [
        {
          name: "Apple",
          url: "/OverviewMoneyOut",
          icon: "cui-bookmark",
        },
        {
          name: "Huawei",
          url: "/WhatType",
          icon: "cui-pencil",
        },

        {
          name: "Samsung",
          url: "/Mileage",
          icon: "cui-pencil",
        },
        {
          name: "Xiaomi",
          url: "/CreateSubsistence",
          icon: "cui-pencil",
        },
      ],
    },
  ];
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
      <nav className="navbar navbar-expand-lg bg-danger text-white  fixed-top">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Bootstrap" width="180vmax" />
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
            <ul className="navbar-nav mx-auto justify-content-center flex-grow-1 pe-3">
              {catogary.map(({ name, value, children }) => (
                <>
                  <li className="nav-item dropdown ms-3" key={name}>
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      key={name}
                    >
                      {name}
                    </a>
                    <ul className="dropdown-menu">
                      {children.map(({ name: childrenName }) => (
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
            */}
        <button
          type="button"
          className="btn text-white "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Link to="/search" className="text-white">
            <FaSearch />
          </Link>
        </button>
        {token ? (
          <NavDropdown
            className="btn text-white"
            title={<FaUserCircle />}
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.4">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1">{userName}</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" onClick={handleLogout}>
              LogOut
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <button className="btn  text-white" type="submit">
            <Link to="/login" className="text-white">
              <FaPowerOff />
            </Link>
          </button>
        )}
      </nav>
      {openModel && <Search />}
    </>
  );
}

export default Header;
