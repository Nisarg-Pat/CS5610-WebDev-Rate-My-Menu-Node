const mongoose = require("mongoose");
const schema = require("./user-food-rating-schema");
const model = mongoose.model("FoodRatingModel", schema);

module.exports = model;