const searchBurger = require("./temp_search.json");
const details1 = require("./temp_details_1.json");
const details2 = require("./temp_details_2.json");

module.exports = (app) => {
    const searchItems = (req, res) => {
        res.json(searchBurger);
    }

    const detailItem = (req, res) => {
        const id = parseInt(req.params.id);
        if (id === 642539) {
            res.json(details1);
        } else if (id === 631814) {
            res.json(details2);
        } else {
            res.json(details1);
        }
    }

    app.get("/api/search", searchItems);

    app.get("/api/details/:id", detailItem);
}