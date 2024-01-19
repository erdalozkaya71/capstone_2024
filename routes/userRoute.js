const express = require("express");
const userController = require("../controllers/userController");
//const authController = require('../controlllers/authController');

const router = express.Router();

//router.use(authController.restrictTo('admin'));

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
