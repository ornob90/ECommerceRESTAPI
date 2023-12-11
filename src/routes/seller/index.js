const { createCatalog, getSellerOrders } = require("../../api/seller");

const router = require("express").Router();

// GET
router.get("/api/seller/orders/:sellerId", getSellerOrders);

// POST
router.post("/api/seller/create-catalog", createCatalog);

module.exports = router;
