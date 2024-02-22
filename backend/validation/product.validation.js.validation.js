const Joi = require("joi")
const joi = require("joi")

exports.addProductValidation = joi.object({
    productName: joi.string().required(),
    productBrand: joi.string().required(),
    productPrice: joi.number().required(),
    productMeasurement: joi.string().required(),
    productDescription: joi.string().required(),
    productWeight: joi.array().required(),
    productStyle: joi.string().required(),
    productProperties: joi.string().required(),
    productStatus: joi.string().required(),
    productTags: joi.array().required(),
    categoryId: joi.string().required(),
})