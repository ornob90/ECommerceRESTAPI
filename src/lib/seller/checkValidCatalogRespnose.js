const checkValidCatalogResponse = (items, sellerID) => {
  try {
    if (!items || !sellerID || !Array.isArray(items) || items.length === 0) {
      return false;
    }

    // checking if each object has name and price field
    return items.every(
      (item) => typeof item === "object" && "name" in item && "price" in item
    );
  } catch (error) {
    return error;
  }
};

module.exports = checkValidCatalogResponse;
