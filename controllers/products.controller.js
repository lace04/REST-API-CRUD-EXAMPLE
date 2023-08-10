import Product from "../models/products.model.js";
import {uploadImage, removeImage} from "../utils/cloudinary.js"
import fs from 'fs-extra'


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json({
        message: "Product does not exists",
      });
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = new Product({ name, description, price });
    
    if (req.files?.image){
      const result = await uploadImage(req.files.image.tempFilePath)
      newProduct.image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      //console.log(result)
      await fs.unlink(req.files.image.tempFilePath)
    }
    
    const productSaved = await newProduct.save();
    res.json(productSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json({
        message: "Product does not exists",
      });

    if (product.image?.public_id){
      await removeImage(product.image.public_id)
    }
  
    return res.send(product);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json(productUpdated);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};