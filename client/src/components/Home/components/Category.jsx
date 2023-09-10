import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";

const Category = ({ category }) => {
  const navigate = useNavigate();
  const { id, label, icon } = category;
  return (
    <div className="col-md-3 py-2" key={id}>
      <div
        onClick={() => navigate(`/categories/brands/${id}`)}
        style={{ cursor: "pointer" }}
        // to={}
        className="card border-0 shadow rounded-2 py-2   mb-1"
      >
        <div className="row  g-0">
          <div className="col-4 my-auto d-flex justify-content-center text-secondary text-opacity-75 fs-5  ">
            {/* <FaPlaneDeparture /> */}
            <i class={`fa ${icon} fa-lg text-theame  `} aria-hidden="true" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h6 className=" ">{label} </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
