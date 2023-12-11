const checkValidBuyerResponse = (items) => {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return false;
  }

  // checking if each object has name and price field
  return items.every((item) => typeof item === "string");
};

module.exports = checkValidBuyerResponse;
