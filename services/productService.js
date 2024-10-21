const multer = require('multer');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const { uploadSingleImage } = require('../middlewares/uploadImageMiddleware');

const factory = require('./handlersFactory');
const Product = require('../models/productModel');

// Upload single image
exports.uploadProductImage = uploadSingleImage('image');

// Image processing
exports.saveProductImage = asyncHandler(async (req, res, next) => {
  const filename = `product-${uuidv4()}-${Date.now()}.jpeg`;
  console.log(req.file);

  if (req.file) {
    await sharp(req.file.buffer)
      // .resize(600, 600)
      // .toFormat('jpeg')
      // .jpeg({ quality: 95 })
      .toFile(`uploads/products/${filename}`);
    // Save image into our db
    req.body.image = filename;
    console.log(req.body.image);
  }

  next();
});

// @desc     Get list of Product
// @route   GET  /api/v1/products
// @acces   Public
exports.getProducts = factory.getAll(Product, 'Products');

// @desc     Get specific product by id
// @route   GET  /api/v1/products:id
// @acces   Public
exports.getProduct = factory.getOne(Product);

// @desc    Create product
// @route   POST  /api/v1/products
// @acces   Private
exports.createProduct = factory.createOne(Product);

// @desc     Update specific product by id
// @route   PUT  /api/v1/products/:id
// @acces   Private
exports.updateProduct = factory.updateOne(Product);

// @desc     Delete specific product by id
// @route   DELETE  /api/v1/products/:id
// @acces   Private
exports.deleteProduct = factory.deleteOne(Product);
