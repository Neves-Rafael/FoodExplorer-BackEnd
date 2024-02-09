const { Router } = require("express");
const userRoutes = require("./user.routes");
const platesRoutes = require("./plate.routes");
const ingredientsRoutes = require("./ingredients.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/plates", platesRoutes);
routes.use("/ingredients", ingredientsRoutes);

module.exports = routes;
