import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction.js";
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
import { addProductCheckBox, addProductFields, checkBox } from "./data";

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
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

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    // dispatch(createProduct(myForm));
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

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <div className="my-5 pt-5">
          <form
            className="createProductForm mt-4"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h3>Add Product</h3>
            {addProductFields.map(({ label, type, id, name, className }) => (
              <div className={``}>
                <input
                  placeholder={label}
                  type={type}
                  id={id}
                  name={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            ))}

            <div>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value=""> Related Product</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value=""> languages</option>
                {categories.map((cate) => (
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
              {addProductCheckBox.map((inputField, index) => (
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
