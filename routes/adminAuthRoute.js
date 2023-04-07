const router = require("express").Router();
const adminAuthController = require("../controllers/adminAuthController");

router.post("/adminsignup", adminAuthController.adminSignup);

module.exports = router;
