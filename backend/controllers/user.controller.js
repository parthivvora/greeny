const jwt = require("jsonwebtoken")
const { responseStatusCode, responseStatusText } = require("../helper/responseHelper")
const userModel = require("../models/user")
const { userRegisterValidation, userLoginValidation } = require("../validation/user.validation")
const { default: mongoose } = require("mongoose")

// User register
exports.userRegister = async (req, res) => {
    try {
        const { error, value } = userRegisterValidation.validate(req.body)
        if (error) {
            return res.status(responseStatusCode.FORBIDDEN).json({
                status: responseStatusText.ERROR,
                message: error.details[0].message
            })
        }
        await userModel.create(value)
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            message: "You are successfully register...!",
        })
    } catch (error) {
        console.log("🚀 ~ file: user.controller.js:20 ~ exports.userRegister= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// User login
exports.userLogin = async (req, res) => {
    try {
        const { error, value } = userLoginValidation.validate(req.body)
        if (error) {
            return res.status(responseStatusCode.FORBIDDEN).json({
                status: responseStatusText.ERROR,
                message: error.details[0].message
            })
        }
        const isUser = await userModel.findOne({
            $and: [
                {
                    email: value.email
                },
                {
                    password: value.password
                }
            ]
        })
        if (isUser) {
            const userToken = await jwt.sign({ userId: isUser._id }, process.env.JWT_SECRET)
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                message: "You are successfully login1...!",
                userData: { userId: isUser._id, userName: isUser.name, userToken }
            })
        }
        return res.status(responseStatusCode.UNAUTHORIZED).json({
            status: responseStatusText.ERROR,
            message: "Invalid email or password...!",
        })
    } catch (error) {
        console.log("🚀 ~ file: user.controller.js:63 ~ exports.userLogin= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}

// Get user own profile information
exports.getUserProfileDetails = async (req, res) => {
    try {
        const userData = await userModel.findOne({ _id: { $eq: new mongoose.Types.ObjectId(req.userId) } })
        return res.status(responseStatusCode.SUCCESS).json({
            status: responseStatusText.SUCCESS,
            userData
        })
    } catch (error) {
        console.log("🚀 ~ file: user.controller.js:80 ~ exports.getUserProfileDetails= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}