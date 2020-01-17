const express = require("express");

const DeveloperController = require("./controllers/DeveloperController");
const SearchController = require("./controllers/SearchController");

const routes = express.Router();

routes.get("/devs", DeveloperController.index);
routes.post("/devs", DeveloperController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
