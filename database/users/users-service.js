const dao = require("./users-dao");

module.exports = (app) => {
    const findUser = (req, res) => {
        dao.findUser(req.body).then((user) => res.json(user));
    }

    const createUser = (req, res) => {
        dao.createUser(req.body).then((user) => res.json(user));
    }

    app.post("/api/login", findUser);
    app.post("/api/signup", createUser);
}