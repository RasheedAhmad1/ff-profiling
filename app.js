const express = require('express');
const ejs = require('ejs');
// const mongoose = require('mongoose');
// const Book = require('./models/books');
require("dotenv").config();

// 1 App Config - Initiate the express
const app = express();

// 2 Middlewares

// 3 DB connection - MongoDB
// 3.1 DB connection - MongoDB Compass
// mongoose.connect(process.env.COMPASS_MONGODB_URI, 
//     { 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true 
//     })
//     .then((result) => {
//         console.log('Database connected');
//     })
//     .catch((err) => console.log(err));

// 3.2 DB connection - MongoDB Atlas
// mongoose.connect(process.env.ATLAS_MONGODB_URI) 
//     .then((result) => {
//         // listen for requests
//         app.listen(process.env.PORT, () => {
//             console.log('Listening on port: ', process.env.PORT)
//         })
//     })
//     .catch((err) => 
//         { console.log(err)
//     });

// Register view engine
app.set('view engine', 'ejs');

// 4 API Endpoints
// Static files - Middleware
app.use(express.static('public'));

// Mongoose and Mongo sandbox routes
// app.get('/add-book', (req, res) => {
//     const book = new Book({
//         title: "One twenty lines",
//         author: "Adam Smith",
//         pages: 400,
//         rating: 10
//     });

//     book.save()
//     .then((result) => { res.send('Record added!'); })
//     .catch((error) => { console.log(error)});
// });

// Home
app.get('/', (req, res) => {
    res.status(200).render('./pages/index', { title: 'Home' });
});

// About
app.get('/about', (req, res) => {
    res.status(201).render('./pages/about', { title: 'About'});
});

// Redirections
app.get('/about-us', (req, res) => {
    res.status(301).redirect('/about');
});

// 404's 
app.use( (req, res) => {
    res.status(404).render('404', { title: '404'});
});

// 5 Listening for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port #: ', process.env.PORT)
});