const { createOrder } = require("../../api/buyer");

const router = require("express").Router();

// POST
router.post("/api/buyer/seller-catalog/:sellerId", createOrder);

module.exports = router;
