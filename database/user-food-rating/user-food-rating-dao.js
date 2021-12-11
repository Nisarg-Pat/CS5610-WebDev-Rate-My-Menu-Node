const model = require("./user-food-rating-model");

const addRating = (userFoodRating) => model.create(userFoodRating);

const findRatingsByUser = ({user}) => model.find({"user._id": user._id});

const findRatingsOfFoodItem = ({foodItem}) => model.find({"foodItem.id": foodItem.id});

module.exports = {
    addRating, findRatingsByUser, findRatingsOfFoodItem
}