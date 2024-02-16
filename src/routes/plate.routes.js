const { Router } = require("express");
const PlatesController = require("../controllers/PlatesController");
const ensureAuth = require("../middlewares/ensureAuth");

const platesRoutes = Router();
const platesController = new PlatesController();

platesRoutes.use(ensureAuth);

platesRoutes.post("/", platesController.create);
platesRoutes.get("/", platesController.index);
platesRoutes.get("/:id", platesController.show);
platesRoutes.put("/:id", platesController.update);
platesRoutes.delete("/:id", platesController.delete);
module.exports = platesRoutes;
