const model = require("./users-model");

const findUser = (user) => model.findOne({username: "Nisarg"});

const createUser = (user) => model.create(user);

module.exports = {
    findUser, createUser
}