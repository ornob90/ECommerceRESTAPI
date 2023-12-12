const login = async (req, res, next) => {
  const { userName } = req.user;

  const user = await User.findOne({ userName });

  if (!user) {
    return res.status(401).send("unauthorized access");
  }
};

module.exports = login;
