import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, label, icon } = category;
  return (
    <div className="col-md-3 py-2" key={id}>
      <Link
        to={`/categories/brands/${id}`}
        className="card border-0 shadow rounded-2 py-2 bg-success bg-opacity-25 mb-1"
      >
        <div className="row  g-0">
          <div className="col-4 my-auto d-flex justify-content-center text-secondary text-opacity-75 fs-5  ">
            {/* <FaPlaneDeparture /> */}
            <i
              class={`fa ${icon} fa-lg text-danger text-decoration-none`}
              aria-hidden="true"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h6 className=" text-secondary text-decoration-none">{label} </h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
