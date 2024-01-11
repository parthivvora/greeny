const express = require("express")
const { adminAuth } = require("../middleware/adminAuth")
const brandsImageUpload = require("../middleware/brandImageUpload")
const { addBrands, getAllBrands, getSingleBrand } = require("../controllers/Brands.controller")
const router = express.Router()

router.post("/createBrand", adminAuth, brandsImageUpload.single("brandImage"), addBrands)
router.get("/getAllBrands", getAllBrands)
router.get("/getSingleBrand/:brandId", getSingleBrand)

// router.put("/updateBlog/:blogId", adminAuth, blogImageUpload.single("blogImage"), updateBlog)
// router.put("/updateBlogStatus/:blogId", adminAuth, updateBlogStatus)
// router.delete("/deleteBlog/:blogId", adminAuth, deleteBlog)

module.exports = router