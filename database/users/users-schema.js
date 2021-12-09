const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        username: String,
        password: String,
        role: String
    }, {collection: "users"});

module.exports = schema;