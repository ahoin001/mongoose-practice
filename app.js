const mongoose = require('mongoose');

// Same instance of mongoose is shared across the application, after first using require mongoose, any require mongoose 
// in other files will be talking to the database determined here

// the database called here doesn't exsist yet but is created for us before connecting to server
mongoose
    .connect('mongodb://localhost/CatDatabase', { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

// TODO: Understand Schemas better 
// We are creating a model called Cat in first parameter, That creates documents with the blueprint passed in the second parameter is a (schema)
const Cat = mongoose.model('Cat', { name: String });

// function that will recive a name and create then add new cat instance too DB
const addNewCat = (catName) => {

    // create a new instance of cat that we will later add to database
    const kitten = new Cat({ name: catName });

    // since kitty is based off of Mongoose Model "Cat", it has acccess to mongoose model methods
    // Save() sends object to our mongoDB using insertOne command behind the scenes
    kitten
        .save()
        .then(newCat => console.log(`New cat ${catName} saved.`))
        .catch(err => console.log(`Error while trying to save new Cat ${err}`))

}

const listTheCats = () => {

    Cat
        .find()
        .then(catsFromDb => {
            // with returned array of cats, we can loop through to print them
            catsFromDb.forEach(currentCat => {
                console.log(`--> Cat: ${currentCat.name}`);
            });
        })
        .catch(err => {
            console.log(`Error returning Cat.find : ${err}`)
        }
        )

}

const addTenCats = () => {

    for (let i = 0; i < 10; i++) {
        addNewCat(`Super Kitty Number ${i}`);
    }

}

const deleteAllCatsNamedAlex = () => {
    Cat.deleteMany({ name: "Alex" });
}

const deleteCatWithThisName = (targetCatName) => {
    Cat.deleteMany({ name: "targetCatName" });
}

// listTheCats();
//deleteAllCatsNamedAlex();
// addTenCats();

