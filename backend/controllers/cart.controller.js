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

// Get all product of cart using productId
exports.getAllCartData = async (req, res) => {
    try {
        const cartData = await cartModel.aggregate([
            {
                $match: {
                    userId: new mongoose.Types.ObjectId(req.userId)
                }
            },
            // {
            //     $lookup: {
            //         from: "brands",
            //         localField: "productBrand",
            //         foreignField: "_id",
            //         as: "brandDetail",
            //     }
            // },
            // {
            //     $unwind: {
            //         path: "$brandDetail"
            //     }
            // },
            // {
            //     $project: {
            //         "brandDetail.totalItems": 0,
            //         "brandDetail.brandImage": 0,
            //         "brandDetail.brandStatus": 0,
            //         "brandDetail.createdAt": 0,
            //         "brandDetail.updatedAt": 0,
            //         "brandDetail.__v": 0,
            //         __v: 0,
            //         productBrand: 0,
            //     }
            // }
        ])
        if (cartData.length > 0) {
            // var row = ""
            // Object.keys(productData).forEach((key) => {
            //     row = productData[key];
            //     row.productImage = `${process.env.IMAGE_URL}/products/` + row.productImage;
            // });
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                cartData
            })
        }
        return res.status(responseStatusCode.NOT_FOUND).json({
            status: responseStatusText.ERROR,
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

// Update product details by Admin using productId
// exports.updateProduct = async (req, res) => {
//     try {
//         const { productId } = req.params
//         const { productName, productBrand, productPrice, productMeasurement, productDescription, productWeight, productStyle, productProperties, productStatus } = req.body
//         if (req.file) {
//             const { filename } = req.file
//             const updateProductDetail = {
//                 productName: productName,
//                 productBrand: productBrand,
//                 productPrice: productPrice,
//                 productMeasurement: productMeasurement,
//                 productDescription: productDescription,
//                 productWeight: productWeight,
//                 productStyle: productStyle,
//                 productProperties: productProperties,
//                 productStatus: productStatus,
//                 productImage: filename,
//             }
//             await cartModel.updateOne({ _id: new mongoose.Types.ObjectId(productId) }, { $set: updateProductDetail }, { new: true })
//             return res.status(responseStatusCode.SUCCESS).json({
//                 status: responseStatusText.SUCCESS,
//                 message: "Your product details is updated successfully...!",
//             })
//         }
//         const updateProductDetail = {
//             productName: productName,
//             productBrand: productBrand,
//             productPrice: productPrice,
//             productMeasurement: productMeasurement,
//             productDescription: productDescription,
//             productWeight: productWeight,
//             productStyle: productStyle,
//             productProperties: productProperties,
//             productStatus: productStatus,
//         }
//         await cartModel.updateOne({ _id: new mongoose.Types.ObjectId(productId) }, { $set: updateProductDetail }, { new: true })
//         return res.status(responseStatusCode.SUCCESS).json({
//             status: responseStatusText.SUCCESS,
//             message: "Your product details is updated successfully...!",
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.updateProduct= ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }

// Update product status by Admin using productId (if status false then don't show in Frontend)
// exports.updateProductStatus = async (req, res) => {
//     try {
//         const { productId } = req.params
//         const { status } = req.body
//         await cartModel.updateOne({ _id: new mongoose.Types.ObjectId(productId) }, { $set: { isDeleted: status } }, { new: true })
//         return res.status(responseStatusCode.SUCCESS).json({
//             status: responseStatusText.SUCCESS,
//             message: "Your product status is updated successfully...!",
//         })
//     } catch (error) {
//         console.log("🚀 ~ exports.updateProductStatus= ~ error:", error)
//         return res.status(responseStatusCode.INTERNAL_SERVER).json({
//             status: responseStatusText.ERROR,
//             message: error.message
//         })
//     }
// }
