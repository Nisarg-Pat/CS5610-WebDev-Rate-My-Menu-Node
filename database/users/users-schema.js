const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        username: String,
        password: String,
        role: String,
        name: String,
        description: String,
        image: String,
        date: Date,
    }, {collection: "users"});

module.exports = schema;