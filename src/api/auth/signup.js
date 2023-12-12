const checkValidUserResponse = require("../../lib/auth/checkValidUserResponse");
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const generateToken = require("../../utils/auth/generateToken");

const signup = async (req, res, next) => {
  try {
    const userInfo = req.body;

    const valid = checkValidUserResponse(userInfo);

    if (!valid) {
      res.status(400).send({
        error: "Bad Request",
        message: "Invalid User Info",
      });
    } else {
      const { userName, password, userType } = userInfo;

      const hashedPass = await bcrypt.hash(password, 10);

      const user = new User({
        userName,
        userType,
        password: hashedPass,
      });

      const response = await user.save();

      const token = await generateToken();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
