const mongoose = require('mongoose');
const validator = require('validator');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  dateOfService: {
    type: Date,
    required: [true, 'Date of service is required'],
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: {
      values: [
        "Crown and Bridge",
        "Teeth Whitening",
        "Root Canal Therapy",
        "Hygiene Services",
        "Direct Filling",
        "Invisalign",
        "Porcelain Veneers",
        "Implants",
        "Mouth Wear",
        "On-site Digital Lab",
        "Digital X-rays",
        "Oral Surgery"
      ],
      message: '{VALUE} is not a supported service',
    },
  },
  message: {
    type: String,
    trim: true,
  },
  timeSlot: {
    type: String,
    required: [true, 'Time slot is required'],
    enum: {
      values: [
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "12:00 PM - 1:00 PM",
        "1:00 PM - 2:00 PM",
        "2:00 PM - 3:00 PM",
        "3:00 PM - 4:00 PM",
        "4:00 PM - 5:00 PM",
        "5:00 PM - 6:00 PM",
        "6:00 PM - 7:00 PM",
      ],
      message: '{VALUE} is not a supported time slot',
    },
  },
}, {
  timestamps: true, // Automatically creates createdAt and updatedAt fields
});

// If you still want to prevent duplicate bookings for the same service on the same day, you might consider:
// Note: This will only prevent bookings with the exact same name, phone number, service type, and date.
// Adjust according to your unique constraints.
bookingSchema.index({ name: 1, email: 1, phoneNumber:1,timeSlot: 1 }, { unique: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
