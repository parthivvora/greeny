const express = require("express")
const { adminAuth } = require("../middleware/adminAuth")
const bannerImageUpload = require("../middleware/bannerImageUpload")
const { addBanners, getAllBannerData } = require("../controllers/banner.controller")
const router = express.Router()

router.post("/addBanner", adminAuth, bannerImageUpload.single("bannerImage"), addBanners)
router.get("/getAllBanners", getAllBannerData)

// router.get("/getSingleBlog/:blogId", getSingleBlog)
// router.put("/updateBlog/:blogId", adminAuth, blogImageUpload.single("blogImage"), updateBlog)
// router.put("/updateBlogStatus/:blogId", adminAuth, updateBlogStatus)
// router.delete("/deleteBlog/:blogId", adminAuth, deleteBlog)

module.exports = router