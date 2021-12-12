const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        restaurant: {},
        foodItem: {},
        price: Number
    }, {collection: "menus"});

module.exports = schema;