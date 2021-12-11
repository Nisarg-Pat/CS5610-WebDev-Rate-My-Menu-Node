const dao = require("./user-food-rating-dao");

module.exports = (app) => {

    const addRating = (req, res) => {
        dao.addRating(req.body).then((response) => res.sendStatus(200));
    }

    const findRatingsOfFoodItem = (req, res) => {
      dao.findRatingsOfFoodItem(req.body).then((ratings) => res.json(ratings))
    }

    const findRatingsByUser = (req, res) => {
        dao.findRatingsByUser(req.body).then((ratings) => res.json(ratings))
    }

    app.post("/api/foodRating", addRating);
    app.post("/api/foodRatingsOfFood", findRatingsOfFoodItem);
    app.post("/api/foodRatingsOfUser", findRatingsByUser)
}