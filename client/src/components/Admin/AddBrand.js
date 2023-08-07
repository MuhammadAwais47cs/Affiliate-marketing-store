import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createBrand } from "../../actions/brandAction";
import { useAlert } from "react-alert";
import Select from "react-select";
import MetaData from "../layout/MetaData";
import { NEW_BRAND_RESET } from "../../constant/brandConstant";
import { addBrandCheckBox, addBrandFields, languages } from "./data";
import Loader from "../layout/Loader/Loader";
import axios from "axios";
import { baseurl } from "../../baseurl";
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
    relatedBrand: [],
    category: "",
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
  const [category, setCategory] = useState([]);
  const [relatedBrands, setRelatedBrands] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  // const categories = ["Nike", "Adidas", "Dell", "Hp"];

  useEffect(() => {
    getAllCategories();
    getAllBrands();
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Brand Created Successfully");
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
    const { name, sName, link, relatedBrand, category, language, description } =
      brand;
    console.log("brand :>> ", brand);
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("sName", sName);
    myForm.set("link", link);
    myForm.set("relatedBrand", relatedBrand);
    myForm.set("language", language);
    myForm.set("description", description);
    // only push the ids of related brands to the array
    const relatedBrandIds = relatedBrand?.map((brand) => brand?.id);
    const data = {
      name,
      sName,
      link,
      category: category?.id,
      relatedBrand: relatedBrandIds,
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
  const getAllCategories = async () => {
    const link = `${baseurl}/api/v1/categories`;
    const { data } = await axios.get(link);
    let categories = data.categories.map(({ _id, label }) => {
      return { id: _id, label };
    });
    setCategory(categories);
  };
  const getAllBrands = async () => {
    const link = `${baseurl}/api/v1/brands`;
    const { data } = await axios.get(link);
    let brands = data?.brands?.map(({ _id, name }) => {
      return { id: _id, label: name, value: _id };
    });
    setRelatedBrands(brands);
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
            <div className="row ">
              <div className="col-md-2"> </div>
              <div className="col-md-8 border rounded-4 shadow">
                <form
                  className="m-4"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                >
                  <h1 className="px-auto">Add Brand</h1>
                  <div className="row">
                    {addBrandFields.map(
                      ({ label, type, id, name, className }) => (
                        <div class="mb-3 col-md-6">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            {label}
                          </label>
                          <input
                            type={type}
                            class="form-control"
                            id={id}
                            placeholder={label}
                            onChange={handleChange}
                            required
                            name={name}
                          />
                        </div>
                      )
                    )}

                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Categories
                      </label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        onChange={(e) => setBrand({ ...brand, category: e })}
                        isClearable
                        name="color"
                        options={category}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Related Brands
                      </label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isMulti
                        onChange={(e) =>
                          setBrand({ ...brand, relatedBrand: e })
                        }
                        isClearable
                        name="color"
                        options={relatedBrands}
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <select
                        onChange={handleChange}
                        name="language"
                        class="form-select"
                      >
                        <option value={language}> languages</option>
                        {languages.map((cate) => (
                          <option key={cate} value={cate}>
                            {cate}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="file"
                        placeholder="Add Images"
                        name="avatar"
                        required
                        accept="image/*"
                        class="form-control"
                        onChange={createProductImagesChange}
                      />
                    </div>
                    <div className="col-md-6 h-50 w-50">
                      {imagesPreview.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          style={{ maxWidth: "40px" }}
                          className=""
                          alt="Product Preview"
                        />
                      ))}
                    </div>
                    <div className="d-flex   mt-3 pt-1">
                      {checkboxes.map((checkbox, index) => (
                        <div className="d-flex  mx-1 w-50" key={index}>
                          <label className=" font-bold mx-2">
                            <input
                              type="checkbox"
                              className="mx-2"
                              key={checkbox.id}
                              checked={checkbox.isChecked}
                              onChange={() => handleCheckboxChange(checkbox.id)}
                            />
                            {checkbox.label}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      <button
                        className="w-50 mx-auto  mt-4  "
                        id="createProductBtn"
                        type="submit"
                        disabled={loading ? true : false}
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2"></div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
