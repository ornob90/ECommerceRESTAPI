const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (userInfo) => {
  const token = jwt.sign(userInfo, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  return token;
};

module.exports = generateToken;

// const token = jwt.sign(user, process.env.SECRET_KEY, {
//     expiresIn: "1h",
//   });
