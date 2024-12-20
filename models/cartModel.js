const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    // cartItems
    products: [
      {
        product: { type: mongoose.Schema.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 },
        price: Number,
      },
    ],
    totalCartPrice: Number,
    totalAfterDiscount: Number,
    cartOwner: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    coupon: String,
  },
  { timestamps: true }
);

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'products.product',
    populate: { path: 'category', select: 'name', model: 'Category' },
  });
  next();
});

module.exports = mongoose.model('Cart', cartSchema);
