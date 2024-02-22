const express = require("express")
const { userRegister, userLogin, getUserProfileDetails, editUserProfileDetails, changePassword } = require("../controllers/user.controller")
const { userAuth } = require("../middleware/userAuth")
const uploadUserProfile = require("../middleware/userProfileUpload")
const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/profile", userAuth, getUserProfileDetails)
router.put("/profile/edit", userAuth, uploadUserProfile.single("userProfile"), editUserProfileDetails)
router.put("/changePassword", userAuth, changePassword)

module.exports = router