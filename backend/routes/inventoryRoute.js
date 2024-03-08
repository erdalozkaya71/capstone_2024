const express = require("express");
const inventoryController = require("../controllers/inventoryController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.protect);
router.use(authController.restrictTo("admin", "secretary"));

router
  .route("/")
  .get(inventoryController.getAllInventory)
  .post(inventoryController.createInventory);

router
  .route("/:id")
  .get(inventoryController.getInventory)
  .patch(inventoryController.updateInventory)
  .delete(inventoryController.deleteInventory);

module.exports = router;
