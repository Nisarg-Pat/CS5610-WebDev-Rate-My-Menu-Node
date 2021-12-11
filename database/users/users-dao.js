const model = require("./users-model");

const findUser = ({username, password}) => model.findOne({username, password});

const findUserByUserName = ({username}) => model.findOne({username});

const findUserById = ({_id}) => model.findOne({_id});

const createUser = (user) => model.create(user);

module.exports = {
    findUser, findUserByUserName, createUser, findUserById
}