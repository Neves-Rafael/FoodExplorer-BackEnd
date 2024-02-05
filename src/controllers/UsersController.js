const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!email) {
      throw new AppError("Deu ruim", 400);
    }

    return response.json("dale");
  }
}

module.exports = UsersController;
