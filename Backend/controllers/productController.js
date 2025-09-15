// adding product function
import {v2 as cloudinary} from 'cloudinary';
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const { name, openingBid, currentBid, image, category, subCategory, details, datePosted, highestBid } = req.body;

    const image1=req.files.image1 && req.files.image1[0];
    const images=[image1].filter((stock)=>stock!==undefined);

    let imagesUrl=await Promise.all(images.map(async (stock)=>{
      let result=await cloudinary.uploader.upload(stock.path,{resource_type:"image"});
      return result.secure_url;
    }));

    const productData={name, openingBid:Number(openingBid), currentBid:Number(currentBid), image:imagesUrl, category, subCategory, details, datePosted: Date.now(datePosted), highestBid:highestBid==="true"?true:false}

    console.log(productData);

    const product=new productModel(productData);
    await product.save();
    res.json({success:true, message:"Product Added"});

    res.json({});
  }catch (error) {
    console.log(error);
    res.json({success: false,message:error.message});
  }
}

// listing product function
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({success:true, products});
  }catch (error) {
    console.log(error);
    res.json({success: false,message:error.message});
  }
}

// removing product function
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({success:true, message:"Product Removed"});
  }catch (error) {
    console.log(error);
    res.json({success: false,message:error.message});
  }
}

// single product info function
const singleProduct = async (req, res) => {
  try {
    const {productId} = req.body;
    const product = await productModel.findById(productId);
    res.json({success:true, product});
  }catch (error) {
    console.log(error);
    res.json({success: false, message:error.message});
  }
}

// updateBid controller
const updateBid = async (req, res) => {
  try {
    const { productId, newBid } = req.body;
    const product = await productModel.findById(productId);

    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    if (newBid <= product.currentBid) {
      return res.status(400).json({ success: false, message: "Bid must be higher than current bid" });
    }

    product.currentBid = newBid;
    await product.save();

    res.json({ success: true, message: "Bid updated", updatedProduct: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {listProduct, addProduct, removeProduct, singleProduct, updateBid};