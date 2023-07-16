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
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Slider Created Successfully");
      dispatch({ type: NEW_SLIDER_RESET });
    }
  }, [dispatch, alert, error, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createSlider(images));
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
      <MetaData title="Create Slider" />
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
