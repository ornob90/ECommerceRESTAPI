const { createCatalog, getSellerOrders } = require("../../api/seller");
const verifySeller = require("../../middlewares/verifySeller");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// GET
router.get(
  "/api/seller/orders/:sellerId",
  verifyToken,
  verifySeller,
  getSellerOrders
);

// POST
router.post(
  "/api/seller/create-catalog",
  verifyToken,
  verifySeller,
  createCatalog
);

module.exports = router;
