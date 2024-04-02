const path = require("path");
const express = require("express");
const cors = require("cors");

const AppError = require("./utils/appError");
// const globalErrorHandler = require("./controllers/errorController"); TODO: will be implemented later
const userRouter = require("./routes/userRoute");
const staffRouter = require("./routes/staffRoute");
const inventoryRouter = require("./routes/inventoryRoute");
const authRouter = require("./routes/authRoute"); 
const globalErrorHandler = require('./controllers/errorController');
const bookingRouter = require("./routes/bookingRoute")




const app = express();

// Enable CORS
app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalErrorHandler);
// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/staff", staffRouter);
app.use("/api/v1/inventory", inventoryRouter);
app.use("/api/v1/auth", authRouter); // Use the auth routes
app.use("/api/v1/bookings", bookingRouter);

// Catch-all route for unhandled routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;

