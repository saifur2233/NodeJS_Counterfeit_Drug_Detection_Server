const router = require("express").Router();
const menufacturerController = require("../controllers/menufacturerController");

router.post("/menufacturer/addDrug", menufacturerController.addDrug);

module.exports = router;
