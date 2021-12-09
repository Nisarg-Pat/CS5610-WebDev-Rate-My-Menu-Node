const mongoose = require("mongoose");
const schema = require("./menu-schema");
const model = mongoose.model("MenuModel", schema);

module.exports = model;