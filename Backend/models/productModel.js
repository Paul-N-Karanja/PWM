import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  openingBid: {type: Number, required: true},
  currentBid: {type: Number, required: true},
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  details: { type: String, required: true },
  datePosted: { type: Number, required: true },
  highestBid: { type: Boolean, required: true }
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;