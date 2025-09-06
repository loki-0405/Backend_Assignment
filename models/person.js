const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  mobile: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Person', PersonSchema);
