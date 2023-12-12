# Ecommerse REST API

This project comprises several APIs organized into different modules for authentication, buyer-related operations, seller-related operations, and user-related operations. Additionally, middleware functions have been implemented to ensure secure access to certain routes.

## Models

### Users
- **Description**: Represents the individuals interacting with the system.
- **Attributes**: 
  - User Type: Indicates whether the user is a buyer or a seller.

### Catalogs
- **Description**: Represents the collection of products offered by a seller.
- **Attributes**:
  - Seller: The user to whom the catalog belongs.
  - Products: The list of products included in the catalog.

### Products
- **Description**: Represents individual items that can be part of a catalog.
- **Attributes**:
  - Name: The name of the product.
  - Price: The price of the product.

### Orders
- **Description**: Represents a buyer's request to purchase items from a seller's catalog.
- **Attributes**:
  - Products: The list of products included in the order.



## Authentication APIs

### Register a new user
- **Endpoint**: `POST /api/auth/register`
- **Description**: Allows users to register a new account. Generate a token after successfull signup

### User login
- **Endpoint**: `POST /api/auth/login`
- **Description**: Authenticates users and generates a token for subsequent requests.

## Buyer-related APIs

### Get a list of sellers
- **Endpoint**: `GET /api/buyer/list-of-sellers`
- **Middlewares**: `verifyToken`, `verifyBuyer`
- **Description**: Retrieves a list of sellers available for buyers. With proper token and role authentication using middlewares.

### Get a seller's catalogs
- **Endpoint**: `GET /api/buyer/seller-catalog/:sellerId`
- **Middlewares**: `verifyToken`, `verifyBuyer`
- **Description**: Retrieves the catalogs of a specific seller.

### Create an order for a seller's catalog
- **Endpoint**: `POST /api/buyer/seller-catalog/:sellerId`
- **Middlewares**: `verifyToken`, `verifyBuyer`
- **Description**: Allows buyers to create an order for a seller's catalog.

### Cancel an order
- **Endpoint**: `DELETE /api/buyer/cancel-order/:orderId`

- **Middlewares**: `verifyToken`, `verifyBuyer`
- **Description**: Allows buyers to cancel an existing order.

## Seller-related APIs

### Get seller's orders
- **Endpoint**: `GET /api/seller/orders/:sellerId`
- **Middlewares**: `verifyToken`, `verifySeller`
- **Description**: Retrieves the orders associated with a specific seller.

### Create a catalog
- **Endpoint**: `POST /api/seller/create-catalog`
- **Middlewares**: `verifyToken`, `verifySeller`
- **Description**: Allows sellers to create a new catalog of products.

## User-related APIs

### Update user profile
- **Endpoint**: `PUT /api/user/update-profile/:userName`
- **Middleware**: `verifyToken`
- **Middlewares**: `verifyToken`
- **Description**: Allows users to update their profile information.

---

## How to Run the Project

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a `.env` file with the required environment variables.
4. Run the project using `npm start`.

Feel free to explore and extend the project as needed. If you encounter any issues or have questions, please refer to the documentation or contact the project maintainers.

Happy coding!
 
