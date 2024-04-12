const { Router } = require("express");
const userRoutes = require("./user.routes");
const platesRoutes = require("./plate.routes");
const paymentRoutes = require("./payment.routes");
const sessionRoutes = require("./sessions.routes");
const favoriteRoutes = require("./favorite.routes");
const ingredientsRoutes = require("./ingredients.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/plates", platesRoutes);
routes.use("/ingredients", ingredientsRoutes);
routes.use("/sessions", sessionRoutes);
routes.use("/payment", paymentRoutes);
routes.use("/favorites", favoriteRoutes);

module.exports = routes;
