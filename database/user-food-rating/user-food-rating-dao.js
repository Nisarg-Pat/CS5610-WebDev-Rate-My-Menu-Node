const model = require("./user-food-rating-model");

const addRating = (userFoodRating) => model.create(userFoodRating);

const findRatingsByUser = ({user}) => model.find({"user._id": user._id}).sort({"time": -1});

const findRatingsOfFoodItem = ({foodItem}) => model.find({"foodItem.id": foodItem.id}).sort({"time": -1});

module.exports = {
    addRating, findRatingsByUser, findRatingsOfFoodItem
}