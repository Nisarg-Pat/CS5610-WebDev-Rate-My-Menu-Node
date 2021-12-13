const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        user: {},
        foodItem: {},
        time: Date
    }, {collection: "foodLikes"});

module.exports = schema;