const router = require("express").Router();
const menufacturerController = require("../controllers/menufacturerController");

router.post("/menufacturer/addDrug", menufacturerController.addDrug);
router.get("/menufacturer/drugs", menufacturerController.getAllDrugs);

module.exports = router;
