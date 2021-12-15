const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        restaurant: {},
        foodItem: {
            id: String,
            title: String,
            image: String,
            summary: String
        },
        price: Number
    }, {collection: "menus"});

module.exports = schema;