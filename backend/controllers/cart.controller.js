const { default: mongoose } = require("mongoose")
const { responseStatusText, responseStatusCode } = require("../helper/responseHelper")
const cartModel = require("../models/cart")
const fs = require("fs")
const { cartValidation } = require("../validation/cart.validation")

// Add add to cart by User
exports.addCart = async (req, res) => {
    try {
        const { error, value } = cartValidation.validate(req.body)
        if (error) {
            return res.status(responseStatusCode.FORBIDDEN).json({
                status: responseStatusText.ERROR,
                message: error.details[0].message
            })
        }
        const newObj = {
            userId: req.userId,
            productId: value.productId,
            quantity: value.quantity
        }
        await cartModel.create(newObj)
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Your product is add successfully into cart...!"
        })
    } catch (error) {
        console.log("🚀 ~ exports.addCart= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Get all product of cart using userId
exports.getAllCartData = async (req, res) => {
    try {
        const cartData = await cartModel.aggregate([
            {
                $match: {
                    userId: new mongoose.Types.ObjectId(req.userId)
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "productDetails",
                }
            },
            {
                $unwind: {
                    path: "$productDetails"
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "productDetails.categoryId",
                    foreignField: "_id",
                    as: "categoryDetails",
                }
            },
            {
                $unwind: {
                    path: "$categoryDetails"
                }
            },
            {
                $lookup: {
                    from: "brands",
                    localField: "productDetails.productBrand",
                    foreignField: "_id",
                    as: "brandDetails",
                }
            },
            {
                $unwind: {
                    path: "$brandDetails"
                }
            },
            {
                $match: {
                    isDeleted: false
                }
            },
            {
                $project: {
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0,
                    productBrand: 0,
                    "productDetails._id": 0,
                    "productDetails.productWeight": 0,
                    "productDetails.productStyle": 0,
                    "productDetails.productProperties": 0,
                    "productDetails.productStatus": 0,
                    "productDetails.isDeleted": 0,
                    "productDetails.__v": 0,
                    "categoryDetails._id": 0,
                    "categoryDetails.__v": 0,
                    "categoryDetails.createdAt": 0,
                    "categoryDetails.updatedAt": 0,
                    "categoryDetails.isDeleted": 0,
                    "brandDetails._id": 0,
                    "brandDetails.totalItems": 0,
                    "brandDetails.brandImage": 0,
                    "brandDetails.brandStatus": 0,
                    "brandDetails.createdAt": 0,
                    "brandDetails.updatedAt": 0,
                    "brandDetails.__v": 0,
                }
            }
        ])
        if (cartData.length > 0) {
            var row = ""
            Object.keys(cartData).forEach((key) => {
                row = cartData[key];
                row.productDetails.productImage = `${process.env.IMAGE_URL}/products/` + row.productDetails.productImage;
            });
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                cartData
            })
        }
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "No product into your cart...!"
        })
    } catch (error) {
        console.log("🚀 ~ exports.getAllCartData= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Update cart using cartId and userId
exports.updateCart = async (req, res) => {
    try {
        const { userId } = req
        const { cartId } = req.params
        const { quantity } = req.body
        await cartModel.updateOne({ $and: [{ _id: new mongoose.Types.ObjectId(cartId) }, { userId: new mongoose.Types.ObjectId(userId) }] }, { $set: { quantity: quantity } }, { new: true })
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Your cart is updated successfully...!",
        })
    } catch (error) {
        console.log("🚀 ~ exports.updateProduct= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Delete cart item using productId and userId (if status false then don't show in Frontend)
exports.deleteCart = async (req, res) => {
    try {
        const { userId } = req
        const { cartId } = req.params
        await cartModel.updateOne({ $and: [{ _id: new mongoose.Types.ObjectId(cartId) }, { userId: new mongoose.Types.ObjectId(userId) }] }, { $set: { isDeleted: true } }, { new: true })
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "Your product is deleted successfully from your cart...!",
        })
    } catch (error) {
        console.log("🚀 ~ exports.updateCartStatus= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}
