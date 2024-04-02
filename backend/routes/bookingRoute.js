const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

// Optionally, if all routes require protection and you want to restrict certain operations to admins:
// router.use(authController.protect);

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
