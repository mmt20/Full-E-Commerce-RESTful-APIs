# E-commerce Backend

This is the backend for a full-stack e-commerce application built using **Node.js**, **Express.js**, **MongoDB**, **JWT**, **Multer**, **Sharp**, and more. The API provides all necessary functionality for handling user authentication, product management, order processing, and payment integration.

## Features

- **User Authentication**: Sign up, login, and JWT-based session management.
- **Product Management**: CRUD operations for managing products, categories, and brands.
- **Order Management**: Manage orders, handle payment status, and review order history.
- **Image Handling**: Upload, resize, and process images for product listings using **Multer** and **Sharp**.
- **Security Best Practices**: Secure password storage with hashing, JWT authentication, and input validation with **express-validator**.
- **Payment Integration**: Integration with **Stripe** for handling online payments.

## Technologies

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for handling API routes and middleware.
- **JWT**: JSON Web Token for secure user authentication.
- **Mongoose**: MongoDB object modeling tool for working with databases.
- **Multer**: Middleware for handling file uploads.
- **Sharp**: Image processing library for resizing and optimizing uploaded images.
- **Stripe**: Payment gateway for processing online transactions.
- **express-validator**: Middleware for validating and sanitizing incoming requests.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe Account](https://stripe.com/)
- [Gmail Account](https://mail.google.com/) (For sending emails)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root of the project with the following variables (replace with your actual values):

   ```
   NODE_ENV=development
   PORT=8000
   BASE_URL=http://127.0.0.1:8000

   DB_URL=mongodb+srv://your-db-connection-string
   JWT_SECRET_KEY=your-jwt-secret-key
   JWT_EXPIRE_TIME=90d

   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=465
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password

   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   ```

4. **Start the Server**:
   Once the dependencies are installed and the `.env` file is configured, start the server:

   ```bash
   npm start
   ```

   The server will run at `http://127.0.0.1:8000`.

## API Endpoints

For full details on API routes, request bodies, and responses, refer to the
[Ecommerce Api.postman_collection](https://drive.google.com/file/d/1bdHiXN1F44D3X2B5lonyvPnWXbkMGpfM/view?usp=sharing) file. You can import this collection into Postman to explore, test, and interact with the API endpoints.

## Contact

Mostafa Mohamed - [@MMTAHA22](https://x.com/MMTAHA22) - mmt202002@gmail.com

