import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createBrand } from "../../actions/brandAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { NEW_BRAND_RESET } from "../../constant/brandConstant";
import { addBrandCheckBox, addBrandFields, languages } from "./data";
import Loader from "../layout/Loader/Loader";
const NewProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state?.newBrand);
  console.log(
    "useSelector((state)=>state) :>> ",
    useSelector((state) => state)
  );
  const [brand, setBrand] = useState({
    name: "",
    sName: "",
    link: "",
    description: "",
    relatedBrand: "",
    language: "",
    Published: "",
    Popular: "",
    other: "",
  });
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Published", isChecked: false },
    { id: 2, label: "Popular", isChecked: false },
    { id: 3, label: "Other", isChecked: false },
  ]);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = ["Nike", "Adidas", "Dell", "Hp"];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      dispatch({ type: NEW_BRAND_RESET });
    }
  }, [dispatch, alert, error, success]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBrand((previces) => ({
      ...previces,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, sName, link, relatedBrand, language, description } = brand;
    console.log("brand :>> ", brand);
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
      published: checkboxes[0].isChecked,
      popular: checkboxes[1].isChecked,
      other: checkboxes[2].isChecked,
      checkboxes,
    };

    console.log("myForm :>> ", data);
    dispatch(createBrand(data, images));
  };
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
      <MetaData title="Create Brand" />
      <div className="dashboard">
        <div className=" ">
          {loading ? (
            <Loader />
          ) : (
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
                {checkboxes.map((checkbox, index) => (
                  <div className="d-flex  mx-1 w-50" key={index}>
                    <label className=" font-bold mx-2">
                      <input
                        type="checkbox"
                        key={checkbox.id}
                        checked={checkbox.isChecked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                      />
                      {checkbox.label}
                    </label>
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
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
