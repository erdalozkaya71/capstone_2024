const path = require("path");
const express = require("express");

const AppError = require("./utils/appError");
const userRouter = require("./routes/userRoute");
const staffRouter = require("./routes/staffRoute");
const inventoryRouter = require("./routes/inventoryRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/staff", staffRouter);
app.use("/api/v1/inventory", inventoryRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.original} on this server!`));
});

module.exports = app;
