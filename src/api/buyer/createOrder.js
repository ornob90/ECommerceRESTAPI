const checkValidBuyerResponse = require("../../lib/buyer/checkValidBuyerResponse");
const Order = require("../../models/order");

const createOrder = async (req, res, next) => {
  try {
    const items = req.body;
    const { sellerId } = req.params || {};

    const valid = checkValidBuyerResponse(items);

    if (!valid) {
      res.status(400).send({
        error: "Bad Request",
        message:
          "Valid Items are required in the request payload with id field in item",
      });
    } else {
      const order = new Order({
        seller: sellerId,
        products: items,
      });

      const response = await order.save();

      res.send({ status: response ? true : false });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createOrder;
