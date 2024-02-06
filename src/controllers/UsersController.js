const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const { hash, compare } = require("bcryptjs");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const checkEmailExist = await knex("users").where({ email }).first();

    if (checkEmailExist) {
      throw new AppError("Este email já está em uso!", 400);
    }

    const hashPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashPassword,
    });

    return response.json({ message: "Usuário criado com sucesso!" });
  }

  async update(request, response) {
    const { name, email, newPassword, oldPassword } = request.body;
    // const user_id = request.user.id;
    const { id } = request.params;

    const user = await knex("users").where({ id }).first();

    if (!user) {
      throw new AppError("Usuário não encontrado!");
    }

    const userWithUpdatedEmail = await knex("users").where({ email }).first();

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este email já está em uso, tente novamente!");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (newPassword && oldPassword === newPassword) {
      throw new AppError("A nova senha deve ser diferente da antiga!");
    }

    if (newPassword && !oldPassword) {
      throw new AppError(
        "Você deve informar a senha antiga para definir a nova senha!"
      );
    }

    const checkPassword = await compare(oldPassword, user.password);

    if (!checkPassword) {
      throw new AppError("Senha antiga inválida!");
    }

    user.password = await hash(newPassword, 8);

    await knex("users").where({ id }).update({
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: knex.fn.now(),
    });

    return response.status(200).json({
      message: "Usuário atualizado com sucesso!",
    });
  }
}

module.exports = UsersController;
