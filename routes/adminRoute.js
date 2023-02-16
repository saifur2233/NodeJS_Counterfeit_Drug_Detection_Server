const router = require("express").Router();
const adminController = require("../controllers/adminController");

router.get("/admin/allmenufacturer", adminController.getAllMenufacturer);
router.get("/admin/alldistributor", adminController.getAllDistributor);
router.get("/admin/allretailer", adminController.getAllRetailer);
router.get("/admin/alltransportagency", adminController.getAllTransportAgency);
router.delete("/admin/user/:userid", adminController.deleteUser);

module.exports = router;
