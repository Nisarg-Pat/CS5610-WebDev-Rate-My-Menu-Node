const mongoose = require("mongoose");
const schema = require("./user-food-like-schema");
const model = mongoose.model("FoodLikesModel", schema);

module.exports = model;