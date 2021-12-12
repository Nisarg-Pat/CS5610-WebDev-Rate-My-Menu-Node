const model = require("./menu-model");

const findMenuOfRestaurant = ({restaurant}) => model.find({"restaurant._id": restaurant._id}, ).sort({"foodItem.title":-1});
const findRestaurantsFromItem = ({foodItem}) => model.find({"foodItem.id": foodItem.id})

const findRestaurantItem = ({restaurant, foodItem}) => model.findOne({"restaurant._id": restaurant._id, "foodItem.id": foodItem.id});

const addMenuItemToRestaurant = (menu) => model.create(menu);

module.exports = {
    findMenuOfRestaurant, addMenuItemToRestaurant, findRestaurantsFromItem, findRestaurantItem
}