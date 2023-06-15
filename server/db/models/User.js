const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema({
  "username": { type: String, required: true },
  "password": { type: String, required: true },
  "orders": [{ type: Schema.Types.ObjectId, ref: 'Order' }]
})

module.exports = mongoose.model('User', userSchema)