const express = require("express")
const { adminAuth } = require("../middleware/adminAuth")
const brandsImageUpload = require("../middleware/brandImageUpload")
const { addBrands, getAllBrands, getSingleBrand, updateBrandDetials } = require("../controllers/Brands.controller")
const router = express.Router()

router.post("/createBrand", adminAuth, brandsImageUpload.single("brandImage"), addBrands)
router.get("/getAllBrands", getAllBrands)
router.get("/getSingleBrand/:brandId", getSingleBrand)
router.put("/updateBrand/:brandId", adminAuth, brandsImageUpload.single("brandImage"), updateBrandDetials)

// router.put("/updateBlogStatus/:blogId", adminAuth, updateBlogStatus)
// router.delete("/deleteBlog/:blogId", adminAuth, deleteBlog)

module.exports = router