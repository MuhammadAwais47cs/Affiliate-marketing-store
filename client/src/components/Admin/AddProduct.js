import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction.js";
import Select from "react-select";
import { baseurl } from "../../baseurl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAlert } from "react-alert";
import axios from "axios";

import MetaData from "../layout/MetaData";
import { NEW_PRODUCT_RESET } from "../../constant/productConstant";
import {
  addProductFields,
  couponTypes,
  languages,
} from "./data";
import Loader from "../layout/Loader/Loader";

const NewProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [relatedBrands, setRelatedBrands] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    code: "",
    sName: "",
    badge: "",
    link: "",
    category: "",
    description: "",
    relatedProduct: [],
    relatedBrand: '',
    similarBrand: [],
    language: "",
    expireDate: new Date(),
    couponType: "",
    Published: "",
    Popular: "",
    other: "",
    image: "",
  });
  const [images, setImages] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Published", isChecked: false },
    { id: 2, label: "Popular", isChecked: false },
    { id: 3, label: "Other", isChecked: false },
  ]);

  useEffect(() => {
    getAllCategories();
    getAllProducts();
    getAllBrands();
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      setImagesPreview([]);
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
  const getAllCategories = async () => {
    const link = `${baseurl}/api/v1/categories`;
    const { data } = await axios.get(link);
    let categories = data.categories.map(({ _id, label }) => {
      return { id: _id, label };
    });
    setCategories(categories);
  };
  const getAllBrands = async () => {
    const link = `${baseurl}/api/v1/brands`;
    const { data } = await axios.get(link);
    let brands = data?.brands?.map(({ _id, name }) => {
      return { id: _id, label: name, value: _id };
    });
    setRelatedBrands(brands);
  };
  const getAllProducts = async () => {
    const link = `${baseurl}/api/v1/products`;
    const { data } = await axios.get(link);
    let products = data?.products?.map(({ _id, name }) => {
      return { id: _id, label: name , value : _id };
    });
    setRelatedProducts(products);
  };
  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      name,
      code, 
      sName,
      badge,
      link,
      category,
      description,
      relatedProduct,
      similarBrand,
      relatedBrand,
      language,
      expireDate,
      couponType,
    } = product;
    const similarBrandIds = similarBrand?.map((brand) => brand?.id);
    const relatedProductIds = relatedProducts?.map((product) => product?.id);

    const data = {
      name,
      category: category?.id,
      code,
      sName,
      badge,
      link,
      // relatedProduct: relatedProduct?.id,
      relatedBrand: relatedBrand?.id,
      relatedProduct: relatedProductIds,
      similarBrand: similarBrandIds,
      language,
      expireDate,
      description,
      couponType: couponType?.label,
      published: checkboxes[0].isChecked,
      popular: checkboxes[1].isChecked,
      other: checkboxes[2].isChecked,
      checkboxes,
      images,
    };

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
  const { language, expireDate } = product;

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <div className=" ">
          {loading ? (
            <Loader />
          ) : (
            <div className="row ">
              <div className="col-md-2"> </div>
              <div className="col-md-8 border rounded-4 shadow">
                <form
                  className=" m-4"
                  encType="multipart/form-data"
                  onSubmit={createProductSubmitHandler}
                >
                  <div className="row">
                    {addProductFields.map(
                      ({ label, type, id, name, className }) => (
                        <div className="mb-3 col-md-6">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            {label}
                          </label>
                          <input
                            placeholder={label}
                            type={type}
                            id={id}
                            required
                            className="form-control"
                            name={name}
                            onChange={handleChange}
                          />
                        </div>
                      )
                    )}
                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Expire Date
                      </label>
                      <DatePicker
                        wrapperClassName="datePicker"
                        className="form-control"
                        selected={expireDate}
                        onChange={(date) =>
                          setProduct({ ...product, expireDate: date })
                        }
                      />
                    </div>
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
                        onChange={(e) =>
                          setProduct({ ...product, category: e })
                        }
                        isClearable
                        name="color"
                        options={Categories}
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
                        onChange={(e) =>
                          setProduct({ ...product, relatedBrand: e })
                        }
                        isClearable
                        name="color"
                        options={relatedBrands}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Similar Brands
                      </label>
                      <Select
                        className="basic-single"
                        isMulti
                        classNamePrefix="select"
                        onChange={(e) =>
                          setProduct({ ...product, similarBrand: e })
                        }
                        isClearable
                        name="color"
                        options={relatedBrands}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Coupon Type
                      </label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        onChange={(e) =>
                          setProduct({ ...product, couponType: e })
                        }
                        isClearable
                        name="color"
                        options={couponTypes}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Related Products
                      </label>
                      <Select
                        className="basic-single"
                        isMulti
                        classNamePrefix="select"
                        onChange={(e) =>
                          setProduct({ ...product, relatedProduct: e })
                        }
                        isClearable
                        name="color"
                        options={relatedProducts}
                      />
                    </div>

                    <div className="mb-3 col-md-6">
                      <select
                        onChange={handleChange}
                        name="language"
                        className="form-select"
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
                        className="form-control"
                        name="avatar"
                        required
                        accept="image/*"
                        onChange={createProductImagesChange}
                      />
                    </div>

                    <div className="col-md-6 h-50 w-50">
                      {imagesPreview.map((image, index) => (
                        <img
                          key={image}
                          src={image}
                          style={{ maxWidth: "40px" }}
                          alt="Product Preview"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="d-flex   mt-3 pt-1">
                    {checkboxes.map((inputField, index) => (
                      <div className="d-flex  mx-4 w-50" key={inputField?.id}>
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
                  <div className="row">
                    <button
                      id="createProductBtn"
                      type="submit"
                      className="w-50 mx-auto  mt-4 "
                      disabled={loading ? true : false}
                    >
                      Create
                    </button>
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
