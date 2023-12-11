const {
  createOrder,
  getAllSellers,
  getSellerCatalogs,
} = require("../../api/buyer");

const router = require("express").Router();

// GET
router.get("/api/buyer/list-of-sellers", getAllSellers);
router.get("/api/buyer/seller-catalog/:sellerId", getSellerCatalogs);

// POST
router.post("/api/buyer/seller-catalog/:sellerId", createOrder);

module.exports = router;
