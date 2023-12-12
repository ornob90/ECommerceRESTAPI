const { ObjectId } = require("mongodb");
const Order = require("../../models/order");

const cancelOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    const response = await Order.deleteOne({ _id: new ObjectId(orderId) });

    res.send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = cancelOrder;
