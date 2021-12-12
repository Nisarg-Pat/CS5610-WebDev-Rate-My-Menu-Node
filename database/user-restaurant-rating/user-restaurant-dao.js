const model = require("./user-restaurant-model");

const addRating = (restaurantRating) => model.create(restaurantRating);

const findRatingsByUser = ({user}) => model.find({"user._id": user._id}).sort({"time": -1});

const findRatingsOfRestaurant = ({restaurant}) => model.find({"restaurant._id": restaurant._id}).sort({"time": -1});

module.exports = {
    addRating, findRatingsByUser, findRatingsOfRestaurant
}