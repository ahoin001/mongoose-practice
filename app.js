const mongoose = require('mongoose');

// Same instance of mongoose is shared across the application, after first using require mongoose, any require mongoose 
// in other files will be talking to the database determined here

// the database called here doesn't exsist yet but is created for us before connecting to server
mongoose.connect('mongoose://localhost/practiceDatabase', {useNewUrlParser:true})
.then(x => console.log(`Connected to Mongo! Databse name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err));

// TODO: Understand Schemas better 
// We are creating a model called Cat in first parameter, That creates objects with the blueprint passed in the second parameter is a (schema)
const Cat = mongoose.model('Cat', {name:String});

// create a new instance of cat that we will later add to database
const kitten = new Cat({ name:Alex});

// since kitty is based off of Mongoose Model "Cat", it has acccess to mongoose model methods
// Save() sends object to our mongoDB using insertOne command behind the scenes
kitten.save()
// TODO Is this a promise? Or is then just another built in method?
.then(newCat => console.log(`We saved a new cat to the database named: ${newCat}!`))
.catch(err => console.log(`Error while creating new cat ${err}`))