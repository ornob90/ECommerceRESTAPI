const { createOrder, getAllSellers } = require("../../api/buyer");

const router = require("express").Router();

// GET
router.get("/api/buyer/list-of-sellers", getAllSellers);

// POST
router.post("/api/buyer/seller-catalog/:sellerId", createOrder);

module.exports = router;
