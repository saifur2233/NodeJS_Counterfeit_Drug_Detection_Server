const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/adminsignup", authController.adminSignup);

router.post("/adminsignin", authController.adminSignIn);

module.exports = router;
