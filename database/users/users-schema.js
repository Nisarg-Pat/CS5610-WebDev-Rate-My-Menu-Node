const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
        username: String,
        password: String
    }, {collection: "users"});

module.exports = schema;