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
    const { name, ingredient } = request.query;

    let plates;
    let showIngredient;

    if (name) {
      plates = await knex("plates").whereLike("name", `%${name}%`).orderBy("name");
      return response.json({ plates });
    } else if (ingredient) {
      let filterIngredient = ingredient.split(",").map((tag) => tag.trim());

      showIngredient = await knex("ingredients")
        .select(["plates.id", "plates.name", "plates.description", "ingredients.name as ingredient_name"])
        .whereLike("plates.name", `%${name}%`)
        .whereIn("ingredients.name", filterIngredient)
        .innerJoin("plates", "plates.id", "ingredients.plate_id")
        .orderBy("plates.name");

      return response.json({ showIngredient });
    }

    const allPlates = await knex("plates");

    return response.json({ allPlates });
  }

  async show(request, response) {
    const { id } = request.params;

    const plate = await knex("plates").where({ id }).first();
    const ingredients = await knex("ingredients").select(["id", "name"]).where({ plate_id: id }).orderBy("name");

    if (!plate) {
      throw new AppError("Prato não encontrado");
    }

    return response.json({ ...plate, ingredients });
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
      updated_at: new Date(),
    });

    return response.json({ enviou: "dale" });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("plates").where({ id }).delete();

    return response.json({ Message: "Prato excluído! " });
  }
}

module.exports = PlatesController;
