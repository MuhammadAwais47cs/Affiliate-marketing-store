import React, { Fragment, useEffect, useState } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./index.css";
import { baseurl } from "../../../baseurl.js";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Loader from "../../layout/Loader/Loader";
import { useAlert } from "react-alert";

function Blogs() {
  const alert = useAlert();
  const [Blogs, setBlogs] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    getAllBlogs();
  }, []);
  const getAllBlogs = async () => {
    setisLoading(true);
    const link = `${baseurl}/api/v1/Blogs`;
    const { data } = await axios.get(link);
    let Blogs = data?.Blogs;
    setBlogs(Blogs);
    setisLoading(false);
  };
  const deleteRow = async (row, type) => {
    // first ask for confirmation from the user
    const isDelete = window.confirm("Are you sure to delete this blog?");
    if (!isDelete) return;

    setisLoading(true);
    const { _id: id } = row;
    const link = `${baseurl}/api/v1/blog/${id}`;
    axios
      .delete(link)
      .then(({ data }) => {
        data?.success && setBlogs(Blogs.filter((blog) => blog._id !== id));
        setisLoading(false);
      })
      .catch((error) => {
        console.log("error :>> ", error);
        alert.error(error);

        setisLoading(false);
      });
  };
  const actions = (cell, row) => {
    return (
      <>
        <button
          className="btn btn-sm btn-danger rounded-pill fs-6 mx-3 "
          onClick={(cell) => deleteRow(row)}
        >
          Delete
        </button>
      </>
    );
  };

  const options = {
    paginationShowsTotal: true,
    page: 1,
    sizePerPage: 10,
    pageStartIndex: 1,
    paginationSize: 10,
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
        value: Blogs?.length,
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
        <>
          <BootstrapTable
            data={Blogs}
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
            <TableHeaderColumn width="20%" isKey={true} dataField="name">
              Name
            </TableHeaderColumn>

            <TableHeaderColumn width="10%" dataField="published">
              Published
            </TableHeaderColumn>

            <TableHeaderColumn dataField="popular" width="10%">
              Popular
            </TableHeaderColumn>
            <TableHeaderColumn
              width="20%"
              dataAlign="right"
              dataFormat={actions}
              dataField="COUNTRY"
            >
              Actions
            </TableHeaderColumn>
          </BootstrapTable>
        </>
      )}
    </>
  );
}

export default Blogs;
