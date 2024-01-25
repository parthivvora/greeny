const { default: mongoose } = require("mongoose")
const { responseStatusText, responseStatusCode } = require("../helper/responseHelper")
const productModel = require("../models/product")
const fs = require("fs")
const { addProductValidation } = require("../validation/product.validation.js.validation")

// Add banners by Admin
exports.addProducts = async (req, res) => {
    try {
        const { error, value } = addProductValidation.validate(req.body)
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
                message: "Please, upload product image...!"
            })
        }
        const newProductData = {
            productName: value.productName,
            productBrand: value.productBrand,
            productPrice: value.productPrice,
            productMeasurement: value.productMeasurement,
            productDescription: value.productDescription,
            productWeight: value.productWeight,
            productStyle: value.productStyle,
            productProperties: value.productProperties,
            productImage: req.file.filename,
            productTags: value.productTags,
            productStatus: value.productStatus
        }
        const productData = await productModel.create(newProductData)
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Product data add successfully...!",
            productData
        })
    } catch (error) {
        console.log("🚀 ~ exports.addProducts= ~ error:", error)
        fs.unlinkSync(req.file.path)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Get all banners data
// exports.getAllBannerData = async (req, res) => {
//     try {
//         const bannerData = await productModel.find()
//         if (bannerData.length > 0) {
//             return res.status(responseStatusCode.SUCCESS).json({
//                 status: responseStatusText.SUCCESS,
//                 bannerData
//             })
//         }
//         return res.status(responseStatusCode.NOT_FOUND).json({
//             status: responseStatusText.ERROR,
//             message: "No banner data here...!"
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.getAllBannerData= ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }

// Update banners details by Admin using bannerId
// exports.updateBanner = async (req, res) => {
//     try {
//         const { bannerId } = req.params
//         const { bannerTitle, bannerDescription } = req.body
//         if (req.file) {
//             const { filename } = req.file
//             const updateBannersDetail = {
//                 bannerTitle: bannerTitle,
//                 bannerDescription: bannerDescription,
//                 blogDate: Date.now(),
//                 bannerImage: filename,
//             }
//             await productModel.updateOne({ _id: new mongoose.Types.ObjectId(bannerId) }, { $set: updateBannersDetail }, { new: true })
//             return res.status(responseStatusCode.SUCCESS).json({
//                 status: responseStatusText.SUCCESS,
//                 message: "Your banners details is updated successfully...!",
//             })
//         }
//         const updateBannersDetail = {
//             bannerTitle: bannerTitle,
//             bannerDescription: bannerDescription,
//             blogDate: Date.now(),
//         }
//         await productModel.updateOne({ _id: new mongoose.Types.ObjectId(bannerId) }, { $set: updateBannersDetail }, { new: true })
//         return res.status(responseStatusCode.SUCCESS).json({
//             status: responseStatusText.SUCCESS,
//             message: "Your banners details is updated successfully...!",
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.updateBanner= ~ error:", error)
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
//         await productModel.updateOne({ _id: new mongoose.Types.ObjectId(blogId) }, { $set: { blogStatus: status } }, { new: true })
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
// exports.deleteBanner = async (req, res) => {
//     try {
//         const { bannerId } = req.params
//         const isBannerAvailable = await productModel.findOne({ _id: new mongoose.Types.ObjectId(bannerId) })
//         if (isBannerAvailable) {
//             await productModel.deleteOne({ _id: new mongoose.Types.ObjectId(bannerId) })
//             return res.status(responseStatusCode.SUCCESS).json({
//                 status: responseStatusText.SUCCESS,
//                 message: "Your banner is deleted successfully...!",
//             })
//         }
//         return res.status(responseStatusCode.NOT_FOUND).json({
//             status: responseStatusText.ERROR,
//             message: "No banner found of your choice for delete...!",
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.deleteBanner ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }