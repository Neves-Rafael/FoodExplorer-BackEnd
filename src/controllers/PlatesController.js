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

  async update(request, response) {
    const { name, description, category, value, ingredients } = request.body;
    const { id } = request.params;

    const user = await knex("plates").where({ id }).first();

    if (!user) {
      throw new AppError("Prato não encontrado");
    }

    if (value) {
      if (Number(value) <= 0 || !Number(value)) {
        throw new AppError("Insira um valor válido maior que 0!");
      }
    }

    if (ingredients) {
      await knex("ingredients").where({ plate_id: id }).delete();
      const ingredientsInsert = ingredients.map((ingredient) => {
        return {
          name: ingredient,
          plate_id: id,
        };
      });
      await knex("ingredients").insert(ingredientsInsert);
    }

    user.name = name ?? user.name;
    user.description = description ?? user.description;
    user.category = category ?? user.category;
    user.value = value ?? user.value;

    await knex("plates").where({ id }).update({
      name: user.name,
      description: user.description,
      category: user.category,
      value: user.value,
    });

    return response.json({ enviou: "dale" });
  }
}

module.exports = PlatesController;
