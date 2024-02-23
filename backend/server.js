require('dotenv').config(); 
console.log('JWT Secret after dotenv config:', process.env.JWT_SECRET); // for debugging purposes

const mongoose = require("mongoose");
const app = require("./app");

// Import Routers
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute'); 

// Use Routers
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Database Connection
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.error(`DB connection error: ${err.message}`));

// Server Setup
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});

// Global Error Handling for Unhandled Rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
