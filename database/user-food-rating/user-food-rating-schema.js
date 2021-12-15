const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        user: {},
        foodItem: {
                id: String,
                title: String,
                image: String,
                summary: String
        },
        comment: String,
        rating: Number,
        time: Date
    }, {collection: "foodRatings"});

module.exports = schema;