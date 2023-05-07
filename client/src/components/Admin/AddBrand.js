import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createBrand } from "../../actions/brandAction";
import { useAlert } from "react-alert";
import { FaSpellCheck, FaPowerOff, FaUserCircle } from "react-icons/fa";
// import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
// import AccountTreeIcon from "@material-ui/icons/AccountTree";
// import DescriptionIcon from "@material-ui/icons/Description";
// import StorageIcon from "@material-ui/icons/Storage";
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import SideBar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constant/productConstant";
import { addBrandCheckBox, addBrandFields, checkBox } from "./data";
import { baseurl } from "../../baseurl";
import axios from "axios";

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [brand, setBrand] = useState({
    name: "",
    sName: "",
    link: "",
    description: "",
    relatedBrand: "",
    language: "",
  });
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];
  const languages = ["English", "Urdu"];

  useEffect(() => {
    if (error) {
      alert.error(error);
      //   dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      // history.push("/admin/dashboard");
      //   dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBrand((previces) => ({
      ...previces,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, sName, link, relatedBrand, language, description } = brand;
    console.log("brand :>> ", name, images);
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("sName", sName);
    myForm.set("link", link);
    myForm.set("relatedBrand", relatedBrand);
    myForm.set("language", language);
    myForm.set("description", description);
    const data = {
      name,
      sName,
      link,
      relatedBrand,
      language,
      description,
      // images,
    };
    // images.forEach((image) => {
    //   console.log("image :>> ", image);
    //   myForm.append("images", image);
    // });
    // console.log(data, myForm, "data");
    // return;
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { res } = axios.post(`${baseurl}/api/v1/brand/new`, data, config);

    // console.log("myForm :>> ", data);
    // dispatch(createBrand(data));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  const { name, sName, link, relatedBrand, language, description } = brand;

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <h1>Add Brand</h1>
            {addBrandFields.map(({ label, type, id, name, className }) => (
              <div className={``}>
                <input
                  placeholder={label}
                  type={type}
                  id={id}
                  name={name}
                  required
                  onChange={handleChange}
                />
              </div>
            ))}

            <div>
              <select onChange={handleChange} name="relatedBrand">
                <option value={relatedBrand}> Related Brand</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select onChange={handleChange} name="language">
                <option value={language}> languages</option>
                {languages.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                placeholder="Add Images"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>
            <div className="d-flex   mt-3 pt-1">
              {addBrandCheckBox.map((inputField, index) => (
                <div className="d-flex  mx-4 w-50" key={index}>
                  <input
                    type="checkbox"
                    name="types"
                    value={inputField.label}
                  />
                  <label className=" font-bold mx-2">{inputField.label}</label>
                </div>
              ))}
            </div>

            <button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
