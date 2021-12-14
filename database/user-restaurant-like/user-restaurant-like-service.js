const dao = require("./user-restaurant-like-dao");

module.exports = (app) => {

    const addLike = (req, res) => {
        dao.findLike(req.body).then((like) => {
            if (like) {
                res.sendStatus(403);
            } else {
                dao.addLike(req.body).then((response) => res.sendStatus(200));
            }
        })
    }

    const findLikesOfRestaurant = (req, res) => {
        dao.findLikesOfRestaurant(req.body).then((likes) => res.json(likes))
    }

    const findLikesByUser = (req, res) => {
        dao.findLikesOfUser(req.body).then((likes) => res.json(likes))
    }

    const deleteLike = (req, res) => {
        dao.deleteLike(req.body).then((status) => res.json(status));
    }

    const findLike = (req, res) => {
        dao.findLike(req.body).then((like) => {
            if(like) {
                res.sendStatus(200);
            } else {
                res.sendStatus(403);
            }
        });
    }

    app.post("/api/restaurantLike", addLike);
    app.post("/api/restaurantLikesOfRestaurant", findLikesOfRestaurant);
    app.post("/api/restaurantLikesOfUser", findLikesByUser);
    app.post("/api/findRestaurantLike", findLike)
    app.delete("/api/restaurantLike", deleteLike);
}