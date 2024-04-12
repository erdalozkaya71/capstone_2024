const mongoose = require("mongoose");
const validator = require("validator");

const staffSchema = new mongoose.Schema({
  staffInformation: {
    name: {
      type: String,
      required: [true, "Please enter staff's name"],
      trim: true,
    },
    surname: {
      type: String,
      required: [true, "Please enter staff's lastname"],
      trim: true,
    },
    position: {
      type: String,
      required: false,
    },
    startedAt: {
      type: Date,
      required: false,
    },
  },
  contactDetails: {
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    tel: {
      type: String,
      required: false,
    },
  },
  address: {
    street: { type: String, required: false },
    city: { type: String, required: false },
    province: { type: String, required: false },
    zipCode: { type: String, required: false },
    country: { type: String, required: false },
  },
  personalDetails: {
    qualifications: { type: String, required: false },
    specialization: { type: String },
    licence: { type: String },
    dateOfBirth: { type: Date, required: false },
    gender: { type: String, required: false },
    workschedule: { type: String, enum: ["Part-time", "Full-time"] },
    hobbies: { type: String },
    photo: {
      data: Buffer, // Store binary data
      type: String // Store MIME type of the image
    }
  },
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
