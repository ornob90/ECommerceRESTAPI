const { ObjectId } = require("mongodb");
const Order = require("../../models/order");

const getSellerOrders = async (req, res, next) => {
  try {
    const { sellerId } = req.params;

    if (sellerId.length < 24) {
      res.status(400).send({
        error: "Bad Request",
        message: "Invalid Seller ID",
      });
    } else {
      const orders = await Order.find({ seller: new ObjectId(sellerId) })
        .select("products")
        .populate("products");

      res.send(orders);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getSellerOrders;
