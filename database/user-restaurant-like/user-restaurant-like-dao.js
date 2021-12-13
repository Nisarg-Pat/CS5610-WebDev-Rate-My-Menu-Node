const model = require("./user-restaurant-like-model");

const addLike = (userRestaurantLike) => model.create(userRestaurantLike);

const findLikesOfUser = ({user}) => model.find({"user._id": user._id}).sort({"time": -1});

const findLikesOfRestaurant = ({restaurant}) => model.find({"restaurant._id": restaurant._id}).sort({"time": -1});

const findLike = ({user, restaurant}) => model.findOne({"user._id": user._id, "restaurant._id": restaurant._id});

const deleteLike = ({user, restaurant}) => model.deleteOne({"user._id": user._id, "restaurant._id": restaurant._id});

module.exports = {
    addLike, findLikesOfUser, findLikesOfRestaurant, findLike, deleteLike
}