const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        user: {},
        restaurant: {},
        comment: String,
        rating: Number,
        time: Date
    }, {collection: "restaurantRatings"});

module.exports = schema;