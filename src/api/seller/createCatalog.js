const checkValidCatalogResponse = require("../../lib/seller/checkValidCatalogRespnose");
const Catalog = require("../../models/catalog");
const Product = require("../../models/product");

const createCatalog = async (req, res, next) => {
  try {
    const items = req.body;
    const { sellerID } = req.query || {};

    const valid = checkValidCatalogResponse(items, sellerID);

    if (!valid) {
      res.status(400).send({
        error: "Bad Request",
        message: "Valid Items or SellerID are required in the request payload.",
      });
    } else {
      const products = await Product.insertMany(items);

      const productIds = products.map((product) => product._id);

      const newCatalog = new Catalog({
        seller: sellerID,
        products: productIds,
      });

      const response = await newCatalog.save();

      res.send({
        ...response,
        status: response ? true : false,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createCatalog;
