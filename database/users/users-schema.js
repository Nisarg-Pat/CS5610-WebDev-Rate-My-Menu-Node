const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        username: String,
        password: String,
        role: String,
        name: String,
        description: String,
        image: String,
        email: String,
        date: Date,
        address: String,
        waiterRestaurantId: String
    }, {collection: "users"});

module.exports = schema;