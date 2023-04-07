const router = require("express").Router();
const userAuthController = require("../controllers/userAuthController");

router.post("/user-signup", userAuthController.registerUser);
router.get("/user/:address", userAuthController.getUser);

module.exports = router;
