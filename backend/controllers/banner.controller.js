const { default: mongoose } = require("mongoose")
const { responseStatusText, responseStatusCode } = require("../helper/responseHelper")
const bannerModel = require("../models/banner")
const fs = require("fs")
const { addBannerValidation } = require("../validation/banner.validation")

// Add banners by Admin
exports.addBanners = async (req, res) => {
    try {
        const { error, value } = addBannerValidation.validate(req.body)
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
                message: "Please, upload banner...!"
            })
        }
        const newBannerData = {
            bannerTitle: value.bannerTitle,
            bannerDescription: value.bannerDescription,
            bannerImage: req.file.filename,
        }
        bannerModel.create(newBannerData)
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Banner data add successfully...!"
        })
    } catch (error) {
        console.log("🚀 ~ exports.addBanners= ~ error:", error)
        fs.unlinkSync(req.file.path)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// // Get all brands for users
// exports.getAllBrands = async (req, res) => {
//     try {
//         const brandsData = await bannerModel.find()
//         if (brandsData.length > 0) {
//             return res.status(responseStatusCode.SUCCESS).json({
//                 status: responseStatusText.SUCCESS,
//                 brandsData
//             })
//         }
//         return res.status(responseStatusCode.NOT_FOUND).json({
//             status: responseStatusText.ERROR,
//             message: "No brands data here...!"
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.getAllBrands= ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }

// // Get single brand details using brandId
// exports.getSingleBrand = async (req, res) => {
//     try {
//         const { brandId } = req.params
//         const brandsData = await bannerModel.findOne({ _id: new mongoose.Types.ObjectId(brandId) })
//         if (brandsData) {
//             return res.status(responseStatusCode.SUCCESS).json({
//                 status: responseStatusText.SUCCESS,
//                 brandsData
//             })
//         }
//         return res.status(responseStatusCode.FORBIDDEN).json({
//             status: responseStatusText.ERROR,
//             message: "No brand data found of your choice...!"
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.getSingleBrand= ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }

// // Update blog details by Admin using blogId
// exports.updateBlog = async (req, res) => {
//     try {
//         const { blogId } = req.params
//         const { blogTitle, blogDescription } = req.body
//         if (req.file) {
//             const { filename } = req.file
//             const updateBlogDetail = {
//                 blogTitle: blogTitle,
//                 blogDescription: blogDescription,
//                 blogDate: Date.now(),
//                 blogImage: filename,
//             }
//             await bannerModel.updateOne({ _id: new mongoose.Types.ObjectId(blogId) }, { $set: updateBlogDetail }, { new: true })
//             return res.status(responseStatusCode.SUCCESS).json({
//                 status: responseStatusText.SUCCESS,
//                 message: "Your blog details is updated successfully...!",
//             })
//         }
//         const updateBlogDetail = {
//             blogTitle: blogTitle,
//             blogDescription: blogDescription,
//             blogDate: Date.now(),
//         }
//         await bannerModel.updateOne({ _id: new mongoose.Types.ObjectId(blogId) }, { $set: updateBlogDetail }, { new: true })
//         return res.status(responseStatusCode.SUCCESS).json({
//             status: responseStatusText.SUCCESS,
//             message: "Your blog details is updated successfully...!",
//         })
//     } catch (error) {
//         console.log("🚀 ~ file: blog.controller.js:123 ~ exports.updateBlog= ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }

// // Update blog status by Admin using blogId (if status false then don't show in Frontend)
// exports.updateBlogStatus = async (req, res) => {
//     try {
//         const { blogId } = req.params
//         const { status } = req.body
//         await bannerModel.updateOne({ _id: new mongoose.Types.ObjectId(blogId) }, { $set: { blogStatus: status } }, { new: true })
//         return res.status(responseStatusCode.SUCCESS).json({
//             status: responseStatusText.SUCCESS,
//             message: "Your blog status is updated successfully...!",
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.updateBlogStatus= ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }

// // Delete blog by Admin using blogId
// exports.deleteBlog = async (req, res) => {
//     try {
//         const { blogId } = req.params
//         const isBlogAvailable = await bannerModel.findOne({ _id: new mongoose.Types.ObjectId(blogId) })
//         if (isBlogAvailable) {
//             await bannerModel.deleteOne({ _id: new mongoose.Types.ObjectId(blogId) })
//             return res.status(responseStatusCode.SUCCESS).json({
//                 status: responseStatusText.SUCCESS,
//                 message: "Your blog is deleted successfully...!",
//             })
//         }
//         return res.status(responseStatusCode.NOT_FOUND).json({
//             status: responseStatusText.ERROR,
//             message: "No blog found of your choice for delete...!",
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.deleteBlog ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }