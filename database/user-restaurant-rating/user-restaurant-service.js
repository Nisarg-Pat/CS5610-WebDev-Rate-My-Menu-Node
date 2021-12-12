const dao = require("./user-restaurant-dao");

module.exports = (app) => {

    const addRating = (req, res) => {
        console.log(req.body);
        dao.addRating(req.body).then((response) => res.sendStatus(200));
    }

    const findRatingsOfRestaurant = (req, res) => {
        dao.findRatingsOfRestaurant(req.body).then((ratings) => res.json(ratings))
    }

    const findRatingsByUser = (req, res) => {
        dao.findRatingsByUser(req.body).then((ratings) => res.json(ratings))
    }

    app.post("/api/restaurantRating", addRating);
    app.post("/api/ratingsOfRestaurant", findRatingsOfRestaurant);
    app.post("/api/ratingsOfRestaurantByUser", findRatingsByUser)
}