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
const NewCategory = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, success } = useSelector((state) => state?.newBrand);
  console.log(
    "useSelector((state)=>state) :>> ",
    useSelector((state) => state)
  );

  const [data, setData] = useState({
    category: "",
    icon: "",
  });
  const [loading, setloading] = useState(false);

  // const categories = ["Nike", "Adidas", "Dell", "Hp"];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Brand Created Successfully");
      dispatch({ type: NEW_BRAND_RESET });
    }
  }, [dispatch, alert, error, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    const formdata = {
      label: data.category,
      icon: data.icon,
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const res = await axios.post(
      `${baseurl}/api/v1/category/new`,
      { data: formdata },
      config
    );
    console.log("data :>> ", res.data);
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
              <div className="col-md-2"> </div>
              <div className="col-md-8 border rounded-4 shadow">
                <form
                  className="m-4"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        category
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="category"
                        onChange={(e) =>
                          setData({ ...data, category: e.target.value })
                        }
                        required
                        name="category"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Icon
                      </label>
                      <i className="fas fa-camera" />
                      <input
                        type="file"
                        className="form-control"
                        id="icon"
                        onChange={(e) =>
                          setData({ ...data, icon: e.target.value })
                        }
                        required
                        name="icon"
                      />
                    </div>

                    {/* add one more filed to upload svg's  */}
                    <div></div>
                    <div className="row">
                      <button
                        className="w-50 mx-auto  mt-4  "
                        id="createProductBtn"
                        type="submit"
                        disabled={loading}
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

export default NewCategory;
