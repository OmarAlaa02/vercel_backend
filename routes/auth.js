const express = require("express");

const authController = require("../controllers");

const router = express.Router();

router.get("/getToken", authController.getToken);
router.post("/checkToken", authController.checkToken);

module.exports = router;
