const Booking = require("../models/bookingModel");
const catchSync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);

exports.createBooking = (req, res) => {
    // Logic to handle booking creation
    res.status(201).json({
      status: 'success',
      data: {
        // Data related to the created booking
      },
    });
  };
  