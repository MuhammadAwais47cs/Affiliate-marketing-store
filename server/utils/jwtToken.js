// Create Token and saving in cookie
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  // res.status(statusCode).json({
  res.status(statusCode).cookie().json({
    success: true,
    user,
    token,
  });
  // return res.status(200).json({
  //   success: true,
  //   product,
  // });
};

module.exports = sendToken;
