const router = require("express").Router();
const userAuthController = require("../controllers/userAuthController");

router.post("/user-signup", userAuthController.registerUser);

module.exports = router;
