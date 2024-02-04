const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email } = request.body;

    if (!email) {
      throw new AppError("Deu ruim", 400);
    }

    return response.json("dale");
  }
}

module.exports = UsersController;
