const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        restaurant: {},
        foodItem: {}
    }, {collection: "menus"});

module.exports = schema;