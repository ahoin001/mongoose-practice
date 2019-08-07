
const mongoose = require('mongoose');

// Define a schema
const Schema   = mongoose.Schema;

// Create new instance of Schema to be used in collection
const catSchema = new Schema({
  name : String,
  color: String,
  age  : Number
});

// Create new collection that uses our schema
const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;