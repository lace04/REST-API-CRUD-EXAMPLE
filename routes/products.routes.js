import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.controller.js";
import fileUpload from "express-fileupload";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.post("/products", fileUpload({useTempFiles: true, tempFileDir: "./uploads"}),createProduct);
router.delete("/products/:id", deleteProduct);
router.patch("/products/:id", updateProduct);

export default router;