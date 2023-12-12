const {
  createOrder,
  getAllSellers,
  getSellerCatalogs,
  cancelOrder,
} = require("../../api/buyer");
const updateProfile = require("../../api/user/updateProfile");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// GET
router.get("/api/buyer/list-of-sellers", getAllSellers);
router.get("/api/buyer/seller-catalog/:sellerId", getSellerCatalogs);

// POST
router.post("/api/buyer/seller-catalog/:sellerId", createOrder);

// DELETE
router.delete("/api/buyer/cancel-order/:orderId", verifyToken, cancelOrder);

module.exports = router;
