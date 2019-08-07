const mongoose = require('mongoose');

// Allows us too use model created in other file
const theCatModel = require('./models/Cat.js')

// Same instance of mongoose is shared across the application, after first using require mongoose, any require mongoose 
// in other files will be talking to the database determined here

// the database called here doesn't exsist yet but is created for us before connecting to server
mongoose
    .connect('mongodb://localhost/CatDatabase', { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

// function that will recive a name and create then add new cat instance too DB
const addNewCat = (catName) => {

    // Add new document using schema we created in model
    theCatModel.create({ name: catName, color: "black", age: 5 })
        .then(cat => console.log(`Added ${cat.name} to the database`))
        .catch(err => { console.log(`Error when adding cat`) });

}

const listTheCats = () => {
console.log(`About to list cats`)
    // Promise version
    theCatModel.find({})
        .then((cats) => {
            console.log(`Cat List Returned`, cats);
        })
        .catch((err) => {
            console.log(`Error returning list`);
        }
        );

}

const addTenCats = () => {

    for (let i = 0; i < 10; i++) {
        addNewCat(`Super Kitty Number ${i}`);
    }

}

const deleteSuperKittys = () => {

    // loop through to delete super kittys 0-9
    for (let i = 1; i < 2; i++) {
        // delete first super kitty in collection found with numbers 0-9 
        //console.log(theCatModel.find({ name: `Super Kitty Number ${i.name}`  }))
        theCatModel.deleteOne({ name: `Super Kitty Number ${i}` });

    }

}

const deleteAllCatsNamedAlex = () => {
    // Delete all the users that have "@ironhack.com" in their email
    theCatModel.deleteMany({ name: "Alex" })
        .then(cats => console.log(`All cats named Alex deleted`, cats))
        .catch(err => console.log(`Error deleting the Alex cats`, err));

}

const deleteCatWithThisName = (targetCatName) => {
    Cat.deleteMany({ name: "targetCatName" });
}

// listTheCats();
// addTenCats();
deleteSuperKittys();
//listTheCats();
//addNewCat("Alex");
//deleteAllCatsNamedAlex();
