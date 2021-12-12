const express = require("express");
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
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
mongoose.connect('mongodb://localhost:27017/project');

require("./database/users/users-service")(app);
require("./database/restaurant-menu/menu-service")(app);
require("./database/user-food-rating/user-food-rating-service")(app);
require("./database/user-restaurant-rating/user-restaurant-service")(app);

require("./data/item-service")(app);

app.listen(process.env.PORT || 4000);
