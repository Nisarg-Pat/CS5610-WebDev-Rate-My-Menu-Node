const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        user: {},
        foodItem: {},
        comment: String,
        rating: Number,
        time: Date
    }, {collection: "foodRatings"});

module.exports = schema;