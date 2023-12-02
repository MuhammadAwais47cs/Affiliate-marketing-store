import axios from "axios";
import { baseurl } from "../baseurl";


export const getAllTopBrands =   () => {
  const link = `${baseurl}/api/v1/brands`;
 const brand =   axios.get(link).then(({data})=>{

      const brands = data?.brands?.filter((brand) => {
          return brand.popular  ; 
        });
        return brands?.slice(0, 20);
    }).catch((err)=>{return err});
    return brand;
};

export const getXnumOfCategories = (num , top) => {
  const link = `${baseurl}/api/v1/categories`;
  const brand = axios
    .get(link)
    .then(({ data }) => {
      const categories = top
        ? data?.categories?.filter((brand) => {
            return brand.top;
          })
        : data?.categories;
      return categories?.slice(0, num);
    })
    .catch((err) => {
      return err;
    });
  return brand;
};
