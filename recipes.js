const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');

const bodyParser=require("body-parser");

//schema
const Recetas = require("./models/Recipe");

//config



//database conection
mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

//routes
Recetas.create({ 
  title: 'Asian Glazed Chicken Thighs',
  level: 'Amateur Chef',
  ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey', '1/3 cup soy sauce (such as Silver Swan®)', '1/4 cup Asian (toasted) sesame oil', '3 tablespoons Asian chili garlic sauce', '3 tablespoons minced garlic', 'salt to taste', '8 skinless, boneless chicken thighs'],
  cousine: 'Asian',
  dishType: ['Dish'],
  image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
  duration: 40,
  creator: 'Chef LePapu'
}) .then(r=>{
  console.log(r)
}).catch(e=>{
  console.log(e)
})


Recetas.insertMany(data)
.then(arr=>{
  
  arr.forEach((e) => {
    console.log(e.title)
  });
  
}).catch(e=>{
  console.log(e)
})

Recetas.findByIdAndUpdate("5ae21840e8be2344c138a34e",{ $set:{duration:100}})
.then(r=>{
  console.log("success")
})
.catch(e=>{
  console.log(e)
})

Recetas.findByIdAndRemove("5ae21840e8be2344c138a34d")
.then(r=>{
  console.log("logrado")
}).catch(e=>{
  console.log(e)
})

mongoose.connection.close();