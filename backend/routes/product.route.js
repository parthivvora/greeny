const express = require("express")
const { addProducts, updateProduct, getAllProductData, updateProductStatus } = require("../controllers/product.controller")
const { adminAuth } = require("../middleware/adminAuth")
const productImageUpload = require("../middleware/productImageUpload")
const router = express.Router()

router.post("/addProduct", adminAuth, productImageUpload.single("productImage"), addProducts)
router.put("/editProduct/:productId", adminAuth, productImageUpload.single("productImage"), updateProduct)
router.get("/getAllProducts", getAllProductData)
router.put("/updateProductStatus/:productId", adminAuth, updateProductStatus)

module.exports = router