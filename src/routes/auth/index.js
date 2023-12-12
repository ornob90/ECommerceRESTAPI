const { signup, login } = require("../../api/auth");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// POST
router.post("/api/auth/register", signup);
router.post("/api/auth/login", login);

module.exports = router;
