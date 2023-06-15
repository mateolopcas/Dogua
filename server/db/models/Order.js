const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  "name": { type: String, required: true },
  "quantity": { type: Number, required: true }
})

const orderSchema = new Schema({
  "items": [itemSchema],
  "total": { type: Number, default: 0 },
})

module.exports = mongoose.model('Order', orderSchema)