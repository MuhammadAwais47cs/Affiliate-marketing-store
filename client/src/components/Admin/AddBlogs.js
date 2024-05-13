import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import Select from "react-select";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../actions/brandAction";
import { useAlert } from "react-alert";
import { NEW_BRAND_RESET } from "../../constant/brandConstant";
import { baseurl } from "../../baseurl";
import Editor from "../RichEditor/Editor";

const NewBlog = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, success } = useSelector((state) => state?.newBrand);
  
  const [relatedBrands, setRelatedBrands] = useState([]);

  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Top", isChecked: false },
    { id: 2, label: "Published", isChecked: false },
    { id: 3, label: "Other", isChecked: false },
  ]);

  const [data, setData] = useState({
    label: "",
    icon: "",
    relatedBrand: [],
  });
  const [loading, setloading] = useState(false);

  useEffect(() => {
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

  const getAllBrands = async () => {
    const link = `${baseurl}/api/v1/brands`;
    const { data } = await axios.get(link);
    let brands = data?.brands?.map(({ _id, name }) => {
      return { id: _id, label: name, value: _id };
    });
    setRelatedBrands(brands);
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

  const handleSubmit = async (data) => {
    // e.preventDefault();

    return;
    setloading(true);

    const formdata = {
      label: data.label,
      top: checkboxes[0].isChecked,
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const res = await axios.post(
      `${baseurl}/api/v1/blogs/new`,
      { data: formdata },
      config
    );
    alert.success(res.data.message);

    setloading(false);
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
              <div className="col-md-1"> </div>
              <div className="col-md-10 border rounded-4 shadow">
                <form
                  className="m-4"
                  encType="multipart/form-data"
                  // onSubmit={handleSubmit}
                >
                  <div className="row">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Post
                    </label>
                    <Editor submitBlog={handleSubmit} />
                  </div>
                  <div className="row pt-5 mt-5">
                    {/* <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        blog
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="blog"
                        onChange={(e) =>
                          setData({ ...data, blog: e.target.value })
                        }
                        required
                        name="blog"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Icon
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="icon"
                        name="icon"
                        // onChange={iconHandleChange}
                        onChange={(e) =>
                          setData({ ...data, icon: e.target.value })
                        }
                        // required
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
                        onChange={(e) => setData({ ...data, relatedBrand: e })}
                        isClearable
                        name="color"
                        options={relatedBrands}
                      />
                    </div> */}
                    <div className="d-flex   mt-3 pt-1">
                      {checkboxes.map((checkbox, index) => (
                        <div className="d-flex  mx-1 w-50" key={checkbox.id}>
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

                    {/* add one more filed to upload svg's  */}
                    <div></div>
                    {/* <div className="row pt-5">
                      <button
                        className="w-50 mx-auto mt-4"
                        id="createProductBtn"
                        type="submit"
                        disabled={loading}
                      >
                        Create
                      </button>
                    </div> */}
                  </div>
                </form>
              </div>
              <div className="col-md-1"></div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default NewBlog;
