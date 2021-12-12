const mongoose = require("mongoose");
const schema = require("./user-restaurant-schema");
const model = mongoose.model("RestaurantRatingModel", schema);

module.exports = model;