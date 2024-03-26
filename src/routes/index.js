const { Router } = require("express");
const userRoutes = require("./user.routes");
const platesRoutes = require("./plate.routes");
const sessionRoutes = require("./sessions.routes");
const ingredientsRoutes = require("./ingredients.routes");
const paymentRoutes = require("./payment.routes")

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/plates", platesRoutes);
routes.use("/ingredients", ingredientsRoutes);
routes.use("/sessions", sessionRoutes);
routes.use("/payment", paymentRoutes);

module.exports = routes;
