const express = require("express")
const { userAuth } = require("../middleware/userAuth")
const { addCart, getAllCartData, updateCart, deleteCart } = require("../controllers/cart.controller")
const router = express.Router()

router.post("/addCart", userAuth, addCart)
router.get("/getCartData", userAuth, getAllCartData)
router.put("/updateCart/:cartId", userAuth, updateCart)
router.delete("/deleteCart/:cartId", userAuth, deleteCart)

module.exports = router