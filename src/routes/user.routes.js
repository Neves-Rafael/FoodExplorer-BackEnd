const { Router } = require("express");
const usersRouter = Router();

usersRouter.post("/", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

module.exports = usersRouter;
