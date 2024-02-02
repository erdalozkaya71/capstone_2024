const Staff = require("../models/staffModel");
const catchSync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.createStaff = factory.createOne(Staff);
exports.getStaff = factory.getOne(Staff);
exports.getAllStaff = factory.getAll(Staff);
exports.updateStaff = factory.updateOne(Staff);
exports.deleteStaff = factory.deleteOne(Staff);
