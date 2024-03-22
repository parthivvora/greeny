const express = require("express");
const { adminAuth } = require("../middleware/adminAuth");
const { userAuth } = require("../middleware/userAuth");
const { checkout, orderAdd, getAllOrder } = require("../controllers/checkout.controller");
const router = express.Router();

router.post("/checkout", userAuth, checkout);
router.get("/success", orderAdd);
router.get("/getAllOrder", adminAuth, getAllOrder);

module.exports = router;
