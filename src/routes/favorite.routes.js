const { Router } = require("express");
const FavoritesController = require("../controllers/FavoritesController");
const ensureAuth = require("../middlewares/ensureAuth");

const favoriteRoutes = Router();
const favoritesController = new FavoritesController();

favoriteRoutes.get("/", ensureAuth, favoritesController.index);
favoriteRoutes.post("/", ensureAuth, favoritesController.execute);

module.exports = favoriteRoutes;
