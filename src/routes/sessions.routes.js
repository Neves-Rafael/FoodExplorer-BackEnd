const { Router } = require("express");
const SessionsCOntroller = require("../controllers/SessionsController");

const sessionsCOntroller = new SessionsCOntroller();

const sessionRoutes = Router();
sessionRoutes.post("/", sessionsCOntroller.create);

module.exports = sessionRoutes;
