const express = require("express")
const { userRegister, userLogin, getUserProfileDetails } = require("../controllers/user.controller")
const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/profile", getUserProfileDetails)

module.exports = router