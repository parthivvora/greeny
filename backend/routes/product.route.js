const express = require("express")
const { addProducts } = require("../controllers/product.controller")
const { adminAuth } = require("../middleware/adminAuth")
const productImageUpload = require("../middleware/productImageUpload")
const router = express.Router()

router.post("/addProduct", adminAuth, productImageUpload.single("productImage"), addProducts)

// router.post("/login", userLogin)
// router.get("/profile", adminAuth, getUserProfileDetails)
// router.put("/profile/edit", adminAuth, uploadUserProfile.single("userProfile"), editUserProfileDetails)
// router.put("/changePassword", adminAuth, changePassword)

module.exports = router