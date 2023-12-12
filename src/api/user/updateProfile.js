const User = require("../../models/user");

const updateProfile = async (req, res, next) => {
  try {
    const { userName } = req.user;

    const { userName: curUser } = req.params;

    if (curUser !== userName) {
      return res.status(401).send({
        message: "unauthorized access",
      });
    }

    const { password, ...dataToUpdate } = req.body || {};

    if (!dataToUpdate || Object.keys(dataToUpdate).length === 0) {
      return res.status(400).send({
        message: "Bad Request: No data provided for update.",
      });
    }

    const response = await User.updateOne(
      { userName: curUser },
      {
        $set: {
          ...dataToUpdate,
        },
      }
    );

    res.send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = updateProfile;
