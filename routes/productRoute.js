const express = require('express');
const {
  getProductValidator,
  createProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require('../utils/validators/productValidator');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage,
  saveProductImage,
} = require('../services/productService');
const authService = require('../services/authService');

const reviewRoute = require('./reviewRoute');

const router = express.Router();

// Nested route
// POST /products/66d891d67eff340be2917e46/reviews --> go to reviewRoute
// GET /products/66d891d67eff340be2917e46/reviews --> go to reviewRoute
// GET /products/products:id/reviews/reviews:id

router.use('/:productId/reviews', reviewRoute);

router
  .route('/')
  .get(getProducts)
  .post(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    uploadProductImage,
    saveProductImage,
    createProductValidator,
    createProduct
  );
router
  .route('/:id')
  .get(getProductValidator, getProduct)
  .put(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    uploadProductImage,
    saveProductImage,
    updateProductValidator,
    updateProduct
  )
  .delete(
    authService.protect,
    authService.allowedTo('admin'),
    deleteProductValidator,
    deleteProduct
  );

module.exports = router;
