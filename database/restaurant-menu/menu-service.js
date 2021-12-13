const dao = require("./menu-dao");
module.exports = (app) => {

    const findMenuOfRestaurant = (req, res) => {
        dao.findMenuOfRestaurant(req.body).then((items) => res.json(items));
    }

    const findRestaurantsFromItem = (req, res) => {
        dao.findRestaurantsFromItem(req.body).then((restaurants) => res.json(restaurants))
    }

    const addMenuItemToRestaurant = (req, res) => {
        dao.findRestaurantItem(req.body).then((item) => {
            if (item) {
                res.sendStatus(403);
            } else {
                dao.addMenuItemToRestaurant(req.body).then((item) => res.sendStatus(200));
            }
        })
    }

    const deleteMenuItem = (req, res) => {
      dao.deleteMenuItem(req.body).then(() => res.sendStatus(200));
    }

    app.post("/api/menu", addMenuItemToRestaurant);
    app.post("/api/restaurant_menu", findMenuOfRestaurant);
    app.post("/api/item_restaurants", findRestaurantsFromItem);
    app.delete("/api/menu", deleteMenuItem)
}