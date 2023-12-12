const User = require("../models/user");

const verifySeller = async (req, res, next) => {
  try {
    const { userName } = req.user;

    const { userType } = (await User.findOne({ userName })) || {};

    if (!userType || userType !== "seller") {
      res.status(403).send({ message: "unauthorized access" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = verifySeller;
