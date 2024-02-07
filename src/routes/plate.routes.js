const { Router } = require("express");
const PlatesController = require("../controllers/PlatesController");

const platesRoutes = Router();
const platesController = new PlatesController();

platesRoutes.post("/", platesController.create);
platesRoutes.get("/", platesController.index);
platesRoutes.get("/:id", platesController.show);
platesRoutes.put("/:id", platesController.update);
module.exports = platesRoutes;
