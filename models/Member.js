const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Member", memberSchema);

module.exports = memberSchema;