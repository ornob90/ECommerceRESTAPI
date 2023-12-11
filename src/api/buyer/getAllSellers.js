const User = require("../../models/user");

const getAllSellers = async (req, res, next) => {
  try {
    const sellers = await User.find({ userType: "seller" });

    res.send(sellers);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllSellers;
