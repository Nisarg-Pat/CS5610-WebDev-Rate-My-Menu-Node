const dao = require("./users-dao");
const {addEmptyMenu} = require("../restaurant-menu/menu-dao");

module.exports = (app) => {
    const login = (req, res) => {
        dao.findUser(req.body).then((user) => {
            if (user) {
                req.session["profile"] = user;
                res.sendStatus(200);
            } else {
                res.sendStatus(403);
            }
        });
    }

    const signup = (req, res) => {
        dao.findUserByUserName(req.body).then((user) => {
            if (user) {
                res.sendStatus(403);
            } else {
                dao.createUser(req.body).then((user) => {
                    req.session["profile"] = user;
                    res.sendStatus(200);
                });
            }
        })
    }

    const profile = (req, res) => {
        if (req.session["profile"]) {
            res.json(req.session["profile"]);
        } else {
            res.json({});
        }
    }

    const logout = (req, res) => {
        res.send(req.session.destroy());
    }

    const findProfileById = (req, res) => {
        if (req.body._id.length !== 24) {
            res.json({})
        } else {
            dao.findUserById(req.body).then((user) => {
                res.json(user);
            });
        }

    }

    const updateProfile = (req, res) => {
        dao.updateUser(req.body).then(() => {
            dao.findUser(req.body).then((user) => {
                req.session["profile"] = user;
                res.sendStatus(200);
            })
        });
    }

    app.post("/api/login", login);
    app.post("/api/signup", signup);
    app.post("/api/profile", profile);
    app.post("/api/logout", logout);
    app.post("/api/findProfile", findProfileById);
    app.put("/api/signup", updateProfile)
}