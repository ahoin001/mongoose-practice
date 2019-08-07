// const mongoose = require('mongoose');

// mongoose
//     .connect('mongodb://localhost/CatDatabase', { useNewUrlParser: true })
//     .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
//     .catch(err => console.error('Error connecting to mongo', err));

// // simple schema 
// // const Cat = mongoose.model('Cat', { name: String });

// // define a schema
// const Schema = mongoose.Schema;

// // make instance of the schema with rules for our cat
// const catSchema = new Schema({
//     name: String,
//     color: String,
//     age: Number
// });

// const addNewCat = (catName) => {

//     const kitten = new Cat({ name: catName });

//     kitten
//         .save()
//         .then(newCat => console.log(`New cat ${catName} saved.`))
//         .catch(err => console.log(`Error while trying to save new Cat ${err}`))

// }

// const listTheCats = () => {

//     Cat
//         .find()
//         .then(catsFromDb => {

//             catsFromDb.forEach(currentCat => {
//                 console.log(`--> Cat: ${currentCat.name}`);
//             });
//         })
//         .catch(err => {
//             console.log(`Error returning Cat.find : ${err}`)
//         }
//         )

// }

// const addTenCats = () => {

//     for (let i = 0; i < 10; i++) {
//         addNewCat(`Super Kitty Number ${i}`);
//     }

// }

// const deleteAllCatsNamedAlex = () => {
//     Cat.deleteMany({ name: "Alex" });
// }

// const deleteCatWithThisName = (targetCatName) => {
//     Cat.deleteMany({ name: "targetCatName" });
// }

// deleteAllCatsNamedAlex();

