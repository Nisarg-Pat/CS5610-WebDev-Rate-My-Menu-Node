const model = require("./user-food-like-model");

const addLike = (userFoodLike) => model.create(userFoodLike);

const findLikesOfUser = ({user}) => model.find({"user._id": user._id}).sort({"time": -1});

const findLikesOfFood = ({foodItem}) => model.find({"foodItem.id": foodItem.id}).sort({"time": -1});

const findLike = ({user, foodItem}) => model.findOne({"user._id": user._id, "foodItem.id": foodItem.id});

const deleteLike = ({user, foodItem}) => model.deleteOne({"user._id": user._id, "foodItem.id": foodItem.id});

module.exports = {
    addLike, findLikesOfUser, findLikesOfFood, findLike, deleteLike
}