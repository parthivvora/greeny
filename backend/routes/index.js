const express = require("express")
const router = express.Router()

router.use("/user", require("./user.route"))
router.use("/admin", require("./admin.route"), require("./blog.route"), require("./brands.route"), require("./banner.route"), require("./product.route"))

module.exports = router