import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header/header.js";
import Footer from "./components/layout/footer/Footer.js";
// import Features from "./components/layout/Feature/Feature";
import Blogs from "./components/Blogs/Blogs.jsx";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products.jsx";
import Brands from "./components/Brand/Brands";
import BrandDetails from "./components/Brand/BrandDetails";
import AddBrand from "./components/Admin/AddBrand";
import AddProduct from "./components/Admin/AddProduct";
import AddCategory from "./components/Admin/AddCategory";
import Search from "./components/layout/search/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import store from "./store";
import Dashboard from "./components/Admin/Dashboard";
import Sidebar from "./components/Admin/Sidebar";
import Categories from "./components/Categories/Categories";

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const currentPath = window.location.pathname;
  useEffect(() => {
    // store.dispatch(loadUser());
  }, []);
  const user = localStorage.getItem("name");
  return (
    <>
      <Router>
        <ScrollToTop />
        {user === "admin" && currentPath === "/admin" ? "" : <Header />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/brands" element={<Brands />} />
          <Route
            exact
            path="/categories/brands/:id"
            element={<Brands withCate={true} />}
          />
          <Route exact path="/brand/:id" element={<BrandDetails />} />
          <Route
            exact
            path="/categories"
            element={<Categories withId={false} />}
          />
          <Route
            exact
            path="/categories/:id"
            element={<Categories withId={true} />}
          />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/brands/:keyword" element={<Brands />} />

          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Blogs" element={<Blogs />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Privacy" element={<Privacy />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/login" element={<LoginSignUp />} />
          <Route exact path="/addBrand" element={<AddBrand />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/addCategory" element={<AddCategory />} />
          <Route exact path="/admins" element={<Sidebar />} />
          <Route
            path="/admin"
            element={
              user === "admin" ? (
                <Dashboard />
              ) : (
                <h1 className="my-5 py-5">404: Not Found</h1>
              )
            }
          />
        </Routes>
        {/*user === "admin" && currentPath === "/admin" ? "" : <Features />*/}
        {user === "admin" && currentPath === "/admin" ? "" : <Footer />}
      </Router>
    </>
  );
}

export default App;
