const { Router } = require("express");
const FavoriteController = require("../controllers/FavoriteController");
const ensureAuth = require("../middlewares/ensureAuth");

const favoriteRoutes = Router();
const favoriteController = new FavoriteController();

favoriteRoutes.get("/", ensureAuth, favoriteController.index);
favoriteRoutes.put("/", ensureAuth, favoriteController.update);
favoriteRoutes.post("/", ensureAuth, favoriteController.create);

module.exports = favoriteRoutes;
