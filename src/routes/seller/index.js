const { createCatalog } = require("../../api/seller");

const router = require("express").Router();

// POST
router.post("/api/seller/create-catalog", createCatalog);

module.exports = router;
