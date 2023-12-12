const { signup } = require("../../api/auth");

const router = require("express").Router();

// POST
router.post("/api/auth/register", signup);

module.exports = router;
