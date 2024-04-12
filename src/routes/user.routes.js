const { Router } = require("express");
const ensureAuth = require("../middlewares/ensureAuth");
const UserController = require("../controllers/UsersController");
const ValidateController = require("../../src/controllers/ValidateController");

const usersRoutes = Router();
const userController = new UserController();
const validateController = new ValidateController();

usersRoutes.get("/validated", ensureAuth, validateController.execute);
usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuth, userController.update);

module.exports = usersRoutes;
