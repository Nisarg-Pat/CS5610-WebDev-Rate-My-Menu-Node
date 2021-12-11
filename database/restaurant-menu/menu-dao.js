const model = require("./menu-model");

const findMenuOfRestaurant = ({restaurant}) => model.find({"restaurant._id": restaurant._id});
const findRestaurantsFromItem = ({foodItem}) => model.find({"foodItem.id": foodItem.id})

const findRestaurantItem = ({restaurant, foodItem}) => model.findOne({"restaurant._id": restaurant._id, "foodItem.id": foodItem.id});

const addMenuItemToRestaurant = ({restaurant, foodItem}) => model.create({restaurant, foodItem});

module.exports = {
    findMenuOfRestaurant, addMenuItemToRestaurant, findRestaurantsFromItem, findRestaurantItem
}