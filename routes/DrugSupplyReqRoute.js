const router = require("express").Router();
const DrugSupplyReqController = require("../controllers/DrugSupplyReqController");

router.post("/drugsupplyreq", DrugSupplyReqController.DrugSupplyReq);
router.get("/drugsupplyreq", DrugSupplyReqController.getAllSendReqInfo);

module.exports = router;
