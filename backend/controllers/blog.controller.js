const { default: mongoose } = require("mongoose")
const { responseStatusText, responseStatusCode } = require("../helper/responseHelper")
const blogModel = require("../models/blog")
const { createBlogValidation } = require("../validation/blog.validation")
const fs = require("fs")

// Create blog by Admin
exports.createBlog = async (req, res) => {
    try {
        const { error, value } = createBlogValidation.validate(req.body)
        if (error) {
            fs.unlinkSync(req.file.path)
            return res.status(responseStatusCode.FORBIDDEN).json({
                status: responseStatusText.ERROR,
                message: error.details[0].message
            })
        }
        if (!req.file) {
            return res.status(responseStatusCode.FORBIDDEN).json({
                status: responseStatusText.ERROR,
                message: "Please, upload blog image...!"
            })
        }
        const newBlogDate = {
            blogTitle: value.blogTitle,
            blogDescription: value.blogDescription,
            blogImage: req.file.filename,
        }
        blogModel.create(newBlogDate)
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Your blog is add successfully...!"
        })
    } catch (error) {
        console.log("🚀 ~ file: blog.controller.js:34 ~ exports.createBlog= ~ error:", error)
        fs.unlinkSync(req.file.path)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Get all blogs using for users
exports.getAllBlogs = async (req, res) => {
    try {
        const blogData = await blogModel.find()
        if (blogData.length > 0) {
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                blogData
            })
        }
        return res.status(responseStatusCode.FORBIDDEN).json({
            status: responseStatusText.ERROR,
            message: "No blog data here...!"
        })
    } catch (error) {
        console.log("🚀 ~ file: blog.controller.js:58 ~ exports.getAllBlog= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Get single blog details using blogId
exports.getSingleBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        const blogData = await blogModel.findOne({ _id: new mongoose.Types.ObjectId(blogId) })
        if (blogData) {
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                blogData
            })
        }
        return res.status(responseStatusCode.FORBIDDEN).json({
            status: responseStatusText.ERROR,
            message: "No blog data here...!"
        })
    } catch (error) {
        console.log("🚀 ~ file: blog.controller.js:83 ~ exports.getSingleBlog= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Update blog details by Admin using blogId
exports.updateBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        const { blogTitle, blogDescription } = req.body
        if (req.file) {
            const { filename } = req.file
            const updateBlogDetail = {
                blogTitle: blogTitle,
                blogDescription: blogDescription,
                blogDate: Date.now(),
                blogImage: filename,
            }
            await blogModel.updateOne({ _id: new mongoose.Types.ObjectId(blogId) }, { $set: updateBlogDetail }, { new: true })
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                message: "Your blog details is updated successfully...!",
            })
        }
        const updateBlogDetail = {
            blogTitle: blogTitle,
            blogDescription: blogDescription,
            blogDate: Date.now(),
        }
        await blogModel.updateOne({ _id: new mongoose.Types.ObjectId(blogId) }, { $set: updateBlogDetail }, { new: true })
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Your blog details is updated successfully...!",
        })
    } catch (error) {
        console.log("🚀 ~ file: blog.controller.js:123 ~ exports.updateBlog= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}