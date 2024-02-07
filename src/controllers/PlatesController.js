const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class PlatesController {
  async create(request, response) {
    const { name, description, category, value, ingredients } = request.body;

    if (Number(value) <= 0 || !Number(value)) {
      throw new AppError("Insira um valor válido maior que 0!");
    }

    if (!name || !description || !category || !value || !ingredients) {
      throw new AppError("Todos os campos devem ser informados!");
    }

    const [plateId] = await knex("plates").insert({
      name,
      description,
      category,
      value,
    });

    const ingredientsInsert = ingredients.map((ingredient) => {
      return {
        name: ingredient,
        plate_id: plateId,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);
    return response.json({ name, description, category, value, ingredients });
  }

  async index(request, response) {
    const [plates] = await knex("plates").select();

    return response.json({ plates });
  }

  async show(request, response) {
    const { id } = request.params;

    const showPLate = await knex("plates").where({ id }).first();

    if (!showPLate) {
      throw new AppError("Prato não encontrado");
    }

    return response.json({ showPLate });
  }
}

module.exports = PlatesController;
