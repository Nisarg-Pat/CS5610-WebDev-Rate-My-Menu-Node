const mongoose = require("mongoose");
const schema = require("./user-restaurant-like-schema");
const model = mongoose.model("RestaurantLikesModel", schema);

module.exports = model;