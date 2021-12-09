const model = require("./menu-model");

const findMenuOfRestaurant = ({restaurant}) => model.find({restaurant});
const findRestaurantsFromItem = ({foodItem}) => model.find({foodItem})

const findRestaurantItem = ({restaurant, foodItem}) => model.findOne({restaurant, foodItem});

const addMenuItemToRestaurant = ({restaurant, foodItem}) => model.create({restaurant, foodItem});




module.exports = {
    findMenuOfRestaurant, addMenuItemToRestaurant, findRestaurantsFromItem, findRestaurantItem
}