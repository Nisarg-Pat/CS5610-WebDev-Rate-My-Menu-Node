const express = require("express");
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://funny-taffy-bc49aa.netlify.app");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
               "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const session = require('express-session')
app.use(session({
                    secret: 'This is my randomly generated string!',
                    resave: false,
                    saveUninitialized: true,
                    cookie: {}
                }));

const mongoose = require('mongoose');
const url = "mongodb+srv://Nisarg_Pat:4xPzYOxkiGdWqutR@cluster0.eenem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const localurl = "mongodb://127.0.0.1:27017/project";
mongoose.connect(url);

require("./database/users/users-service")(app);
require("./database/restaurant-menu/menu-service")(app);
require("./database/user-food-rating/user-food-rating-service")(app);
require("./database/user-restaurant-rating/user-restaurant-service")(app);
require("./database/user-food-like/user-food-like-service")(app);
require("./database/user-restaurant-like/user-restaurant-like-service")(app);

require("./data/item-service")(app);

app.listen(process.env.PORT || 4000);
