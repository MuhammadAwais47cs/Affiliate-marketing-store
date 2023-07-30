import axios from "axios";
import { baseurl } from "../../../baseurl";

//  making a dinamic function to delete a row from the table  and  also return response from the server

export const deleteRow = async (row, type) => {
  const { id } = row;
  const link = `${baseurl}/api/v1/${type}/${id}`;
  const { data } = await axios.delete(link);
  return data;
};
