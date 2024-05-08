# Wallet Management API with Postman Documentation

This project is an API for managing expenses and categories in a wallet application. It provides endpoints for user authentication, expense categories management, and expense management. The API is documented using Postman, detailing all endpoints, request formats, response formats, and authentication requirements.

## Features

1. **User Authentication**:
   - `/api/auth/signup`: Endpoint for user registration.
   - `/api/auth/login`: Endpoint for user login and JWT token generation.

2. **Expense Categories Management**:
   - `/api/categories`: Retrieve all expense categories.
   - `/api/categories`: Add a new expense category.
   - `/api/categories/{categoryId}`: Delete an existing expense category.

3. **Expense Management**:
   - `/api/expenses`: Add a new expense.
   - `/api/expenses`: Retrieve a paginated list of user's expenses.
   - `/api/expenses/grouped`: Group user expenses by category, optionally filtered by month.
   - `/api/expenses/category/{categoryId}/monthly`: Retrieve monthly expense data for a specific category.

4. **Validation**:
   - Validation for input data to ensure data integrity and security.
   - Validation for adding expenses to ensure required fields are provided and the amount is a valid number.

5. **Authentication Middleware**:
   - Middleware to validate JWT tokens for authenticated routes.

6. **Pagination**:
   - Pagination for listing user's expenses.

7. **Documentation**:
   - Postman collection documenting all API endpoints, request formats, response formats, and authentication requirements.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and set the following environment variables:

    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/wallet_management
    JWT_SECRET=your_jwt_secret_key
    ```

5. Start the server:

    ```bash
    npm start
    ```

6. Access the API endpoints using Postman or any HTTP client.

## Postman Documentation

The API endpoints are documented using Postman. Import the provided Postman collection (`Wallet-Management-API.postman_collection.json`) to access detailed documentation for each endpoint.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
