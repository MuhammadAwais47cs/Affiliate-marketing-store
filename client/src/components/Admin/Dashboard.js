import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import AddBrand from "./AddBrand.js";
import AddProduct from "./AddProduct.js";
import AddCategory from "./AddCategory.js";
import "./dashboard.css";
import { FaAlignJustify } from "react-icons/fa";

import MetaData from "../layout/MetaData";
import { navigationItems } from "./data.js";
import Products from "./DataTables/Products.js";
import Brands from "./DataTables/Brands.js";
import Categories from "./DataTables/Categories.js";
import AddSlider from "./AddSlider.js";
// import { CiMenuBurger } from "react-icons/ci";
const Dashboard = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [switchComponent, setSwitchComponent] = useState("");
  const [whichComponent, setWhichComponent] = useState("Dashboard");
  const navigate = useNavigate();
  const handleMouseOver = (e) => {
    const list = document.querySelectorAll(".navigation li");
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    e.target.classList.add("hovered");
  };
  const handleLogout = (isLogOut) => {
    isLogOut === "logOut" && localStorage.clear(); // clear the localStorage
    // perform other logout tasks, such as redirecting to the login page
    navigate("/");
    window.location.reload();
  };

  const showOverview = (title) => {
    setWhichComponent(title);
    setSwitchComponent("");
  };

  const handleToggle = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <div class="dashboardRow ">
      <div className="navigation">
        <ul>
          {navigationItems.map(({ id, link, icon, title }) => (
            <li key={id} onClick={() => showOverview(title)}>
              <Link to={"/admin"}>
                <span className="icon">
                  <span name={icon} />
                </span>
                <span className="title">{title}</span>
              </Link>
            </li>
          ))}
          <li onClick={() => handleLogout("logOut")}>
            <Link to={"/"}>
              <span className="icon">
                <span />
              </span>
              <span className="title"> Sign Out</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link to={"/"}>
              <span className="icon">
                <span />
              </span>
              <span className="title"> Go Home</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- ========================= Main ==================== --> */}
      <div class="main">
        {/*   
      // <Sidebar callback={(e) => console.log("e :>> ", e)} />

          <div class="topbar">
            <div className={`toggle ${isMenuActive ? "active" : ""}`}>
           <FaAlignJustify onClick={handleToggle}
          </div> /> 

          <div class="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <div class="user">
            <img src="assets/imgs/customer01.jpg" alt="" />
          </div>
        </div>*/}

        {/*        <!-- ======================= Cards ================== --> */}
        {whichComponent === "Dashboard" && (
          <div class="cardBox">
            <div class="card">
              <div>
                <div class="numbers">1,504</div>
                <div class="cardName">Daily Views</div>
              </div>

              <div class="iconBx">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
            </div>

            <div class="card">
              <div>
                <div class="numbers">80</div>
                <div class="cardName">Sales</div>
              </div>

              <div class="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
            </div>

            <div class="card">
              <div>
                <div class="numbers">284</div>
                <div class="cardName">Comments</div>
              </div>

              <div class="iconBx">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
            </div>

            <div class="card">
              <div>
                <div class="numbers">$7,842</div>
                <div class="cardName">Earning</div>
              </div>

              <div class="iconBx">
                <ion-icon name="cash-outline"></ion-icon>
              </div>
            </div>
          </div>
        )}

        {/* 

  <!-- ================ Order Details List ================= -->
*/}
        <div class="details">
          <div class="recentOrders">
            <div class="cardHeader">
              <h2> {whichComponent.replace("Add", "")}</h2>
              <button
                class="btn btn-danger rounded-pill"
                onClick={() =>
                  setWhichComponent(whichComponent.replace("Add", ""))
                }
              >
                {whichComponent}
              </button>
            </div>
            {whichComponent &&
              (() => {
                switch (whichComponent) {
                  case "Add Brand":
                    return <Brands />;
                  case "Add Product":
                    return <Products />;
                  case "Add Slider":
                    return <AddSlider />;
                  case "Add Category":
                    return <Categories />;
                  case " Brand":
                    return <AddBrand />;
                  case " Product":
                    return <AddProduct />;
                  case " Category":
                    return <AddCategory />;

                  default:
                    return null;
                }
              })()}
            {switchComponent &&
              (() => {
                switch (switchComponent) {
                  case "Add Brand":
                    return <AddBrand />;
                  case " Brand":
                    return <AddBrand />;
                  case "Add Product":
                    return <AddProduct />;
                  case "Add Category":
                    return <AddCategory />;

                  default:
                    return null;
                }
              })()}
          </div>
          {/*
<!-- ================= New Customers ================ -->

          <div class="recentCustomers">
            <div class="cardHeader">
              <h2>Recent Customers</h2>
            </div>

            <table>
              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer02.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br /> <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br /> <span>India</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer02.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br /> <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br /> <span>India</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer02.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br /> <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br /> <span>India</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer01.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br /> <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="assets/imgs/customer02.jpg" alt="" />
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br /> <span>India</span>
                  </h4>
                </td>
              </tr>
            </table>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
