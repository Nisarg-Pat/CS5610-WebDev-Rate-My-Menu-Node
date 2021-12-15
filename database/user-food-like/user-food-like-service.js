const dao = require("./user-food-like-dao");

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

    const findLikesOfFoodItem = (req, res) => {
        dao.findLikesOfFood(req.body).then((likes) => res.json(likes))
    }

    const findLikesByUser = (req, res) => {
        dao.findLikesOfUser(req.body).then((likes) => res.json(likes))
    }

    const findLike = (req, res) => {
        dao.findLike(req.body).then((like) => {
            if(like) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        });
    }

    const deleteLike = (req, res) => {
        dao.deleteLike(req.body).then((status) => res.json(status));
    }

    app.post("/api/foodLike", addLike);
    app.post("/api/foodLikesOfFood", findLikesOfFoodItem);
    app.post("/api/foodLikesOfUser", findLikesByUser);
    app.post("/api/findFoodLike", findLike);
    app.delete("/api/foodLike", deleteLike);
}