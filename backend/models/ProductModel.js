import mongoose from 'mongoose';
import review from './ReviewSchema.js';

const productSize = mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
});
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    size: [productSize],
    category: {
      type: String,
      required: true,
    },
    reviews: [review],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
