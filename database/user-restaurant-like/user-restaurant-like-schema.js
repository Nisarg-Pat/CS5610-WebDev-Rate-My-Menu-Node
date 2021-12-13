const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        user: {},
        restaurant: {},
        time: Date
    }, {collection: "restaurantLikes"});

module.exports = schema;