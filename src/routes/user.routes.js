const { Router } = require("express");
const UserController = require("../controllers/UsersController");
const ensureAuth = require("../middlewares/ensureAuth");
const ValidateController = require("../../src/controllers/ValidateController");

const usersRoutes = Router();
const userController = new UserController();
const validateController = new ValidateController();

usersRoutes.get("/validated",ensureAuth, validateController.execute)
usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuth, userController.update);

module.exports = usersRoutes;
