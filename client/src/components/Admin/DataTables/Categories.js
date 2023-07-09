import React, { Fragment, useEffect, useState } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./index.css";
import { baseurl } from "../../../baseurl.js";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
function Categories() {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories();
  }, []);
  const getAllCategories = async () => {
    const link = `${baseurl}/api/v1/Categories`;
    const { data } = await axios.get(link);
    console.log("data :>> ", data, data.categories);
    let Categories = data?.categories;
    setCategories(Categories);
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

        {/*  <TableHeaderColumn width="15%" dataField="category">
          Category
        </TableHeaderColumn>

        <TableHeaderColumn width="15%" dataField="relatedProduct">
          Related Product
        </TableHeaderColumn>
        <TableHeaderColumn width="20%" dataField="link">
          Link
          </TableHeaderColumn>
        */}

        <TableHeaderColumn width="40%" dataField="COUNTRY">
          Actions
        </TableHeaderColumn>
      </BootstrapTable>
    </>
  );
}

export default Categories;
