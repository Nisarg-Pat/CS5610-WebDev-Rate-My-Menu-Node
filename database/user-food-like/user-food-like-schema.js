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
        time: Date
    }, {collection: "foodLikes"});

module.exports = schema;