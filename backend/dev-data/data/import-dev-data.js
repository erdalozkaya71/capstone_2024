const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Staff = require("../../models/staffModel");
const User = require("../../models/userModel");
const Inventory = require("../../models/inventoryModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.error(`DB connection error: ${err.message}`));

//READ JSON FILE
const staffs = JSON.parse(fs.readFileSync(`${__dirname}/staffs.json`, "utf-8"));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const inventories = JSON.parse(
  fs.readFileSync(`${__dirname}/inventories.json`, "utf-8")
);

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Staff.create(staffs);
    await User.create(users, { validateBeforeSave: false });
    await Inventory.create(inventories);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Staff.deleteMany();
    await User.deleteMany();
    await Inventory.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
