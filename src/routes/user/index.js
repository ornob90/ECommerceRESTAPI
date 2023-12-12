const updateProfile = require("../../api/user/updateProfile");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// PUT
router.put("/api/user/update-profile/:userName", verifyToken, updateProfile);

module.exports = router;
