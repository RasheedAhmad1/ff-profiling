import express from 'express';
// import ejs from 'ejs';
import dotenv from 'dotenv';
dotenv.config();
import staticRoutes from './routes/staticRoutes.js';
// import connectDB from './config/db.js';
// import mongoose from 'mongoose';
// const Book = require('./models/books');
// connectDB();

// ==== 1. App Config - Initiate the express ====
const app = express();

// ==== 2. Middlewares ====
// Register view engine
app.set('view engine', 'ejs');

// Static files - Middleware
// app.use(express.static('public'));

// ==== 3. DB connection - MongoDB ====
// 3.1 DB connection - MongoDB Compass
// mongoose.connect(process.env.MONGODB_COMPASS_URI, 
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

// ==== 4. API Endpoints ====
// ----- Set static routes -----
// Home
app.use('/', staticRoutes);

// Home
// app.get('/', (req, res) => {
//     res.status(200).render('./pages/index', { title: 'Home' });
// });

// // About
// app.get('/about', (req, res) => {
//     res.status(200).render('./pages/about', { title: 'About' });
// });

// // Redirection
// app.get('/about-us', (req, res) => {
//     res.status(301).redirect('/about');
// });

// 404's 
app.use((req, res) => {
    res.status(404).render('./pages/404', { title: '404' });
});

// ==== 5. Listening for requests ====
app.listen(process.env.DEV_PORT || 3000, () => {
    console.log('Listening on port: ', process.env.DEV_PORT);
});