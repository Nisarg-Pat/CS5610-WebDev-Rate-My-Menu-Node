const dao = require("./users-dao");

module.exports = (app) => {
    const login = (req, res) => {
        dao.findUser(req.body).then((user) => {
            if(user) {
                req.session["profile"] = user;
                res.sendStatus(200);
            } else {
                res.sendStatus(403);
            }
        });
    }

    const signup = (req, res) => {
        dao.findUserByUserName(req.body).then((user) => {
            if(user) {
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
        res.json(req.session["profile"]);
    }

    const logout = (req, res) => {
        res.send(req.session.destroy());
    }

    app.post("/api/login", login);
    app.post("/api/signup", signup);
    app.post("/api/profile", profile);
    app.post("/api/logout", logout);
}