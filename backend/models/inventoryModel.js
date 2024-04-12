const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: { type: String, required: false },
  city: { type: String, required: false },
  province: { type: String, required: false },
  zipCode: { type: String, required: false },
  country: { type: String, required: false },
});

const supplierDetailsSchema = new mongoose.Schema({
  suppliers: { type: String, trim: true },
  contactPerson: { type: String, required: false },
  phone: { type: String, required: false },
  email: { type: String, required: false },
  address: addressSchema,
});

const inventorySchema = new mongoose.Schema({
  product: { type: String, required: true, trim: true },
  productFeatures: { type: String },
  keyFeatures: { type: String },
  description: { type: String },
  price: { type: Number },
  availability: { type: Boolean },
  purchaseDate: { type: Date, required: false },
  image: {
    data: Buffer, // Store binary data
    type: String // Store MIME type of the image
  },
  supplierDetails: supplierDetailsSchema,
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
