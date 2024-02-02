const express = require("express");
const staffController = require("../controllers/staffController");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "secretary"),
    staffController.getAllStaff
  )
  .post(authController.restrictTo("admin"), staffController.createStaff);

router
  .route("/:id")
  .get(
    authController.restrictTo("admin", "secretary"),
    staffController.getStaff
  )
  .patch(authController.restrictTo("admin"), staffController.updateStaff)
  .delete(authController.restrictTo("admin"), staffController.deleteStaff);

module.exports = router;
