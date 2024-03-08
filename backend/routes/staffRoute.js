const express = require("express");
const staffController = require("../controllers/staffController");
const authController = require("../controllers/authController");

const router = express.Router();
//router.use(authController.protect);

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "secretary"),
    staffController.getAllStaff
  )
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    staffController.createStaff
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "secretary"),
    staffController.getStaff
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    staffController.updateStaff
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    staffController.deleteStaff
  );

module.exports = router;
