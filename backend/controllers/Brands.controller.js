const { default: mongoose } = require("mongoose")
const { responseStatusText, responseStatusCode } = require("../helper/responseHelper")
const brandsModel = require("../models/brands")
const fs = require("fs")
const { createBrandValidation } = require("../validation/brand.validation")

// Add brands by Admin
exports.addBrands = async (req, res) => {
    try {
        const { error, value } = createBrandValidation.validate(req.body)
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
                message: "Please, upload brand logo...!"
            })
        }
        const newBrandData = {
            brandName: value.brandName,
            totalItems: value.totalItems,
            brandImage: req.file.filename,
        }
        brandsModel.create(newBrandData)
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Your brand data add successfully...!"
        })
    } catch (error) {
        console.log("🚀 ~ exports.addBrands= ~ error:", error)
        fs.unlinkSync(req.file.path)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Get all brands for users
exports.getAllBrands = async (req, res) => {
    try {
        const brandsData = await brandsModel.find()
        if (brandsData.length > 0) {
            var row = ""
            Object.keys(brandsData).forEach((key) => {
                row = brandsData[key];
                row.brandImage = `${process.env.IMAGE_URL}/brands/` + row.brandImage;
            });
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                brandsData
            })
        }
        return res.status(responseStatusCode.NOT_FOUND).json({
            status: responseStatusText.ERROR,
            message: "No brands data here...!"
        })
    } catch (error) {
        console.log("🚀 ~ exports.getAllBrands= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Get single brand details using brandId
exports.getSingleBrand = async (req, res) => {
    try {
        const { brandId } = req.params
        const brandsData = await brandsModel.findOne({ _id: new mongoose.Types.ObjectId(brandId) })
        if (brandsData) {
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                brandsData
            })
        }
        return res.status(responseStatusCode.FORBIDDEN).json({
            status: responseStatusText.ERROR,
            message: "No brand data found of your choice...!"
        })
    } catch (error) {
        console.log("🚀 ~ exports.getSingleBrand= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}


// Update blog details by Admin using brandId
exports.updateBrandDetials = async (req, res) => {
    try {
        const { brandId } = req.params
        const { brandName, totalItems, brandStatus } = req.body
        if (req.file) {
            const { filename } = req.file
            const updateBrandDetials = {
                brandName: brandName,
                totalItems: totalItems,
                brandStatus: brandStatus,
                brandImage: filename,
            }
            await brandsModel.updateOne({ _id: new mongoose.Types.ObjectId(brandId) }, { $set: updateBrandDetials }, { new: true })
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                message: "Your brand details is updated successfully...!",
            })
        }
        const updateBrandDetials = {
            brandName: brandName,
            totalItems: totalItems,
            brandStatus: brandStatus,
        }
        await brandsModel.updateOne({ _id: new mongoose.Types.ObjectId(brandId) }, { $set: updateBrandDetials }, { new: true })
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Your brand details is updated successfully...!",
        })
    } catch (error) {
        console.log("🚀 ~ file: blog.controller.js:123 ~ exports.updateBlog= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}