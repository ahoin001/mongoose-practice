// It knows which mongoose to connnect to since we defined a connection in another file
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

// Create new instance of Schema to be used in collection
const catSchema = new Schema({
    name: String,
    color: String,
    age: Number
});

// Create new collection(model) that uses our schema
const Cat = mongoose.model('Cat', catSchema);

// Allows Cat model to be used in other files that require it
module.exports = Cat;