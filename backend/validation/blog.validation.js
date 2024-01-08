const joi = require("joi")

exports.createBlogValidation = joi.object({
    blogTitle: joi.string().required(),
    blogDescription: joi.string().required(),
})

exports.userLoginValidation = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().alphanum().required(),
})