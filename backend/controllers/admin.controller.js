const jwt = require("jsonwebtoken")
const { responseStatusCode, responseStatusText } = require("../helper/responseHelper")
const adminModel = require("../models/admin")
const { adminLoginValidation } = require("../validation/admin.validation")

// Admin login
exports.adminLogin = async (req, res) => {
    try {
        const { error, value } = adminLoginValidation.validate(req.body)
        if (error) {
            return res.status(responseStatusCode.FORBIDDEN).json({
                status: responseStatusText.ERROR,
                message: error.details[0].message
            })
        }
        const isAdmin = await adminModel.findOne({
            $and: [
                {
                    email: value.email
                },
                {
                    password: value.password
                }
            ]
        })
        if (isAdmin) {
            const adminToken = await jwt.sign({ adminId: isAdmin._id }, process.env.JWT_SECRET)
            return res.status(responseStatusCode.SUCCESS).json({
                status: responseStatusText.SUCCESS,
                message: "You are successfully login...!",
                adminToken
            })
        }
        return res.status(responseStatusCode.FORBIDDEN).json({
            status: responseStatusText.ERROR,
            message: "Invalid email or password...!",
        })
    } catch (error) {
        console.log("🚀 ~ file: admin.controller.js:39 ~ exports.userLogin= ~ error:", error)
        return res.status(responseStatusCode.INTERNAL_SERVER).json({
            status: responseStatusText.ERROR,
            message: error.message
        })
    }
}
