const { signup, login } = require("../../api/auth");

const router = require("express").Router();

// POST
router.post("/api/auth/register", signup);
router.post("/api/auth/login", login);

module.exports = router;
