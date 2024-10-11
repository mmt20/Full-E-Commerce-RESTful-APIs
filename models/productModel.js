const mongoose = require('mongoose');

// 1- Create Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Too short Product name'],
      maxlength: [100, 'Too long Product name'],
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      lowercase: [true, 'Product descrption is required'],
      minlength: [20, 'Too short product descrption '],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required '],
    },
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Image  is required'],
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Product  must be belong to category'],
    },
  },
  {
    timestamps: true,
  }
);

//Mongoose query midlleware
productSchema.pre(/^find/, function (next) {
  this.populate({ path: 'category', select: 'name _id' });
  next();
});

const setImageUrl = (doc) => {
  // return image baseUrl + image name
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}/products/${doc.image.split('/').pop()}`;
    doc.image = imageUrl;
  }
};

// findOne , findAll and update
productSchema.post('init', (doc) => {
  setImageUrl(doc);
});

// create
productSchema.post('save', (doc) => {
  setImageUrl(doc);
});

//2- Create model
module.exports = mongoose.model('Product', productSchema);
