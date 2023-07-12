import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createSlider } from "../../actions/sliderAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { NEW_SLIDER_RESET } from "../../constant/sliderConstant";
import Loader from "../layout/Loader/Loader";
const AddSlider = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state?.newSlider);
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
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Brand Created Successfully");
      dispatch({ type: NEW_SLIDER_RESET });
    }
  }, [dispatch, alert, error, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, sName, link, relatedBrand, category, language, description } =
      brand;

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("sName", sName);
    myForm.set("link", link);
    myForm.set("relatedBrand", relatedBrand);
    myForm.set("language", language);
    myForm.set("description", description);

    dispatch(createSlider(images));
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
                  <h1 className="px-auto">Add Slider</h1>
                  <div className="row">
                    <div className="col-md-6 my-4">
                      <input
                        type="file"
                        placeholder="Add Images"
                        name="avatar"
                        required
                        multiple
                        accept="image/*"
                        class="form-control"
                        onChange={createProductImagesChange}
                      />
                    </div>
                    <div className="d-flex flex-row flex-wrap mt-4 ">
                      {imagesPreview.map((image, index) => (
                        <div className="col-md-3 ">
                          <img
                            key={index}
                            src={image}
                            className="h75 w-75  mx-1"
                            alt="Product Preview"
                          />
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

export default AddSlider;
