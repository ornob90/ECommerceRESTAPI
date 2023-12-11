const { ObjectId } = require("mongodb");
const Catalog = require("../../models/catalog");

const getSellerCatalogs = async (req, res, next) => {
  try {
    const { sellerId } = req.params || {};

    if (sellerId.length < 24) {
      res.status(400).send({
        error: "Bad Request",
        message: "Invalid Seller ID",
      });
    }

    const catalogs = await Catalog.find({ seller: new ObjectId(sellerId) })
      .select("products")
      .populate("products");

    res.send(catalogs);
  } catch (error) {
    next(error);
  }
};

module.exports = getSellerCatalogs;
