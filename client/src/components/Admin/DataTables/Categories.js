import React, { Fragment, useEffect, useState } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./index.css";
import { baseurl } from "../../../baseurl.js";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Loader from "../../layout/Loader/Loader";
import { useAlert } from "react-alert";
function Categories() {
  const alert = useAlert();
  const [Categories, setCategories] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    getAllCategories();
  }, []);
  const getAllCategories = async () => {
    const link = `${baseurl}/api/v1/Categories`;
    const { data } = await axios.get(link);

    let Categories = data?.categories;
    setCategories(Categories);
  };
  const actions = (cell, row) => {
    // console.log("row :>> ", row);
    return (
      <>
        <button
          className="btn btn-sm btn-danger rounded-pill fs-6 mx-3 "
          disabled={isLoading}
          onClick={(cell) => deleteRow(row, "Category")}
        >
          Delete
        </button>
      </>
    );
  };
  const deleteRow = async (row, type) => {
    // confirm from the user first before deleting
    const isDelete = window.confirm(`Are you sure to delete this ${type}?`);
    if (!isDelete) return;
    // delete the row
    setisLoading(true);
    const { _id: id } = row;
    const link = `${baseurl}/api/v1/category/${id}`;
    axios
      .delete(link)
      .then(({ data }) => {
        data?.success &&
          setCategories(Categories.filter((category) => category._id !== id));
        setisLoading(false);
      })
      .catch((error) => {
        alert.error(error);
        setisLoading(false);
      });
  };

  const options = {
    paginationShowsTotal: true,
    page: 1,
    sizePerPage: 20,
    pageStartIndex: 1,
    paginationSize: 20,
    prePage: "Prev",
    nextPage: "Next",
    firstPage: "First",
    lastPage: "Last",
    prePageTitle: "Go to previous",
    nextPageTitle: "Go to next",
    firstPageTitle: "Go to first",
    lastPageTitle: "Go to Last",
    paginationPosition: "top",
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "30",
        value: 30,
      },
      {
        text: "All",
        value: Categories?.length,
      },
    ],
  };
  const cellEditProp = {
    mode: "click",
    blurToSave: true,
    // beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
    // afterSaveCell: onAfterSaveCell  // a hook for after saving cell
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BootstrapTable
          data={Categories}
          striped
          pagination
          hover
          // cellEdit={cellEditProp}
          search
          tableHeaderClass="rpr_header"
          tableBodyClass="rpr_body"
          containerClass="rpr_container"
          options={options}
        >
          <TableHeaderColumn width="60%" isKey={true} dataField="label">
            Name
          </TableHeaderColumn>

          <TableHeaderColumn
            width="40%"
            dataAlign="right"
            dataFormat={actions}
            dataField="COUNTRY"
          >
            Actions
          </TableHeaderColumn>
        </BootstrapTable>
      )}
    </>
  );
}

export default Categories;
