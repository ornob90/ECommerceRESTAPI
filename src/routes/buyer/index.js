const {
  createOrder,
  getAllSellers,
  getSellerCatalogs,
  cancelOrder,
} = require("../../api/buyer");
const updateProfile = require("../../api/user/updateProfile");
const verifyBuyer = require("../../middlewares/verifyBuyer");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// GET
router.get(
  "/api/buyer/list-of-sellers",
  verifyToken,
  verifyBuyer,
  getAllSellers
);
router.get(
  "/api/buyer/seller-catalog/:sellerId",
  verifyToken,
  verifyBuyer,
  getSellerCatalogs
);

// POST
router.post(
  "/api/buyer/seller-catalog/:sellerId",
  verifyToken,
  verifyBuyer,
  createOrder
);

// DELETE
router.delete(
  "/api/buyer/cancel-order/:orderId",
  verifyToken,
  verifyBuyer,
  cancelOrder
);

module.exports = router;
