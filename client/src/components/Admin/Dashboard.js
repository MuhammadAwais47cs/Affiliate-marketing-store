import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { FaAlignJustify } from "react-icons/fa";
// import { Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import { Doughnut, Line } from "react-chartjs-2";
// import { useSelector, useDispatch } from "react-redux";
// import { getAdminProduct } from "../../actions/productAction";
// import { getAllOrders } from "../../actions/orderAction.js";
// import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";
import { navigationItems } from "./data.js";
// import { CiMenuBurger } from "react-icons/ci";
const Dashboard = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const handleMouseOver = (e) => {
    const list = document.querySelectorAll(".navigation li");
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    e.target.classList.add("hovered");
  };

  const handleToggle = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <div class="dashboardRow ">
      <div class="navigation bg-danger ">
        <ul>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span class="title">Admin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span class="title">Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span class="title">Customers</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span class="title">Messages</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span class="title">Help</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span class="title">Settings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span class="title">Password</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span class="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>

      {/*  <!-- ========================= Main ==================== --> */}
      <div class="main">
        <div class="topbar">
          <div
            className={`toggle ${isMenuActive ? "active" : ""}`}
            onClick={handleToggle}
          >
            <FaAlignJustify />
          </div>

          <div class="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="search-outline"></ion-icon>
            </label>
          </div>

          <div class="user">
            <img src="assets/imgs/customer01.jpg" alt="" />
          </div>
        </div>

        {/*            <!-- ======================= Cards ================== --> */}
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

        {/* 

  <!-- ================ Order Details List ================= -->
*/}
        <div class="details">
          <div class="recentOrders">
            <div class="cardHeader">
              <h2>Recent Orders</h2>
              <a href="#" class="btn">
                View All
              </a>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>
                    <span class="status delivered">Delivered</span>
                  </td>
                </tr>

                <tr>
                  <td>Dell Laptop</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>
                    <span class="status pending">Pending</span>
                  </td>
                </tr>

                <tr>
                  <td>Apple Watch</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>
                    <span class="status return">Return</span>
                  </td>
                </tr>

                <tr>
                  <td>Addidas Shoes</td>
                  <td>$620</td>
                  <td>Due</td>
                  <td>
                    <span class="status inProgress">In Progress</span>
                  </td>
                </tr>

                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>
                    <span class="status delivered">Delivered</span>
                  </td>
                </tr>

                <tr>
                  <td>Dell Laptop</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>
                    <span class="status pending">Pending</span>
                  </td>
                </tr>

                <tr>
                  <td>Apple Watch</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>
                    <span class="status return">Return</span>
                  </td>
                </tr>

                <tr>
                  <td>Addidas Shoes</td>
                  <td>$620</td>
                  <td>Due</td>
                  <td>
                    <span class="status inProgress">In Progress</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*
<!-- ================= New Customers ================ -->
*/}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
