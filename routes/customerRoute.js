const router = require("express").Router();
const customerController = require("../controllers/customerController");

router.get("/customer/:drugCode", customerController.searchDrugByDrugCode);

module.exports = router;
