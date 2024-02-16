const { Router } = require("express");
const UserController = require("../controllers/UsersController");
const ensureAuth = require("../middlewares/ensureAuth");

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuth, userController.update);

module.exports = usersRoutes;
