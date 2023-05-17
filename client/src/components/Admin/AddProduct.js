import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction.js";
import { useAlert } from "react-alert";
import { FaSpellCheck, FaPowerOff, FaUserCircle } from "react-icons/fa";
import MetaData from "../layout/MetaData";
import { NEW_PRODUCT_RESET } from "../../constant/productConstant";
import { addProductCheckBox, addProductFields, languages } from "./data";
import Loader from "../layout/Loader/Loader";

const NewProduct = ({}) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [product, setProduct] = useState({
    name: "",
    code: "",
    sName: "",
    link: "",
    category: "",
    description: "",
    relatedProduct: "",
    language: "",
    Published: "",
    Popular: "",
    other: "",
    image: "",
  });
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Published", isChecked: false },
    { id: 2, label: "Popular", isChecked: false },
    { id: 3, label: "Other", isChecked: false },
  ]);
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
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      // history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, success]);
  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return {
          ...checkbox,
          isChecked: !checkbox.isChecked,
        };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
  };
  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      name,
      code,
      sName,
      link,
      category,
      description,
      relatedProduct,
      language,
      Published,
      Popular,
      other,
      image,
    } = product;

    const data = {
      name,
      category,
      code,
      sName,
      link,
      relatedProduct,
      language,
      description,
      published: checkboxes[0].isChecked,
      popular: checkboxes[1].isChecked,
      other: checkboxes[2].isChecked,
      checkboxes,
      images,
    };

    console.log("product :>> ", product, images);
    // console.log("myForm :>> ", myForm);
    // return;
    dispatch(createProduct(data, images));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((previces) => ({
      ...previces,
      [name]: value,
    }));
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
  const { name, sName, link, category, language, relatedProduct, description } =
    product;

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <div className=" ">
          {loading ? (
            <Loader />
          ) : (
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
                    required
                    name={name}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div>
                <select onChange={handleChange} name="category">
                  <option value={category}> Category </option>
                  {categories.map((cate) => (
                    <option key={cate} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select onChange={handleChange} name="relatedProduct">
                  <option value={relatedProduct}> Related Product</option>
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
                {checkboxes.map((inputField, index) => (
                  <div className="d-flex  mx-4 w-50" key={index}>
                    <input
                      type="checkbox"
                      name="types"
                      key={inputField?.id}
                      checked={inputField.isChecked}
                      onChange={() => handleCheckboxChange(inputField.id)}
                    />
                    <label className=" font-bold mx-2">
                      {inputField.label}
                    </label>
                  </div>
                ))}
              </div>

              <button
                id="createProductBtn"
                type="submit"
                // disabled={loading ? true : false}
              >
                Create
              </button>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
