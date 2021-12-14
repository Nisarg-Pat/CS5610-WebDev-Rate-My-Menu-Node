const model = require("./users-model");

const findUser = ({username, password}) => model.findOne({username, password});

const findUserByUserName = ({username}) => model.findOne({username});

const findUserById = ({_id}) => model.findOne({_id}, {password:0});

const createUser = (user) => model.create(user);

const updateUser = (user) => model.updateOne({_id: user._id}, {$set: user})

const deleteUser = (user) => model.deleteOne({_id: user._id})

const findEmployeeList = ({_id}) => model.find({waiterRestaurantId: _id})

const getUsersList = () => model.find().sort({_id: 1})

module.exports = {
    findUser, findUserByUserName, createUser, findUserById, updateUser, deleteUser, findEmployeeList, getUsersList
}