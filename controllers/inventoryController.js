const Inventory = require("../models/inventoryModel");
const catchSync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.createInventory = factory.createOne(Inventory);
exports.getInventory = factory.getOne(Inventory);
exports.getAllInventory = factory.getAll(Inventory);
exports.updateInventory = factory.updateOne(Inventory);
exports.deleteInventory = factory.deleteOne(Inventory);
