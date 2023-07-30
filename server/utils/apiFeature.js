// query is a buildin function like this: product.find , product.create
// queryStr is the query string to be executed against the buildin function and
// The ApiFeatures class provides utility methods for handling API query features.
/**
 * Constructor for the ApiFeatures class.
 * @param {Object} query - The MongoDB query object.
 * @param {Object} queryStr - The query string parameters.
 */
class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    console.log("this :>> ", keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  // get brands whose name start with alphabet ( capital or small both r possible) )
  alphabet() {
    const alphabet = this.queryStr.alphabet
      ? {
          name: {
            $regex: `^${this.queryStr.alphabet}`,
            $options: "i",
          },
        }
      : {};
    console.log("this :>> ", alphabet);
    this.query = this.query.find({ ...alphabet });
    return this;
  }

  // filter() {
  //   const queryCopy = { ...this.queryStr };
  //   //   Removing some fields for category
  //   const removeFields = ["keyword", "page", "limit"];

  //   removeFields.forEach((key) => delete queryCopy[key]);

  //   // Filter For Price and Rating

  //   let queryStr = JSON.stringify(queryCopy);
  //   queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

  //   this.query = this.query.find(JSON.parse(queryStr));

  //   return this;
  // }
  // filter() {
  //   const queryCopy = { ...this.queryStr };
  //   const regex = new RegExp("[\\d,]+");
  //   const removeFields = ["keyword", "page", "limit"];
  //   removeFields.forEach((key) => delete queryCopy[key]);
  //   console.log("queryCopy", queryCopy);
  //   // Filter For Price and Rating

  //   // let queryStr = JSON.stringify(queryCopy);
  //   // queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
  //   // queryStr = JSON.parse(queryStr);
  //   // console.log("queryStr :>> ", { ...queryStr });

  //   this.query = this.query.find(queryStr);
  //   // console.log(queryStr.price, queryStr.price.$gte);
  //   // this.range = [queryStr.price.$gte, queryStr.price.$lte];
  //   //console.log(this, "this----");
  //   // this.query = this.query.find({
  //   //   ...queryStr,
  //   //   price: {
  //   //     ...queryStr.price,
  //   //     $regex: regex,
  //   //   },
  //   // });
  //   return this;
  // }
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}
module.exports = ApiFeatures;
