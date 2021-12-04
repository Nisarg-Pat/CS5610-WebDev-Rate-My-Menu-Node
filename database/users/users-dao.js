const model = require("./users-model");

const findUser = ({username, password}) => model.findOne({username, password});

const findUserByUserName = ({username}) => model.findOne({username});

const createUser = (user) => model.create(user);

module.exports = {
    findUser, findUserByUserName, createUser
}