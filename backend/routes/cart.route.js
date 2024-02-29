const express = require("express")
const { userAuth } = require("../middleware/userAuth")
const { addCart, getAllCartData } = require("../controllers/cart.controller")
const router = express.Router()

router.post("/addCart", userAuth, addCart)
router.get("/getCartData", userAuth, getAllCartData)
// router.get("/getSingleBlog/:blogId", getSingleBlog)
// router.put("/updateBlog/:blogId", adminAuth, blogImageUpload.single("blogImage"), updateBlog)
// router.put("/updateBlogStatus/:blogId", adminAuth, updateBlogStatus)
// router.delete("/deleteBlog/:blogId", adminAuth, deleteBlog)

module.exports = router