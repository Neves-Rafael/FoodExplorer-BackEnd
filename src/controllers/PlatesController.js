const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class PlatesController {
  async create(request, response) {
    const { name, description, category, value, ingredients } = request.body;

    if (value.length < 1) {
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
    return response.json({
      name,
      description,
      category,
      value,
      ingredients,
      plateId,
    });
  }

  async index(request, response) {
    const { name, ingredient } = request.query;

    const allIngredients = await knex("ingredients");
    const allPlates = await knex("plates");

    if (name) {
      const platesWithName = await knex("plates").whereLike(
        "name",
        `%${name}%`
      );

      const platesWithIngredients = platesWithName.map((plate) => {
        const result = allIngredients.filter((tag) => {
          return tag.plate_id === plate.id;
        });
        return {
          ...plate,
          ingredients: result,
        };
      });
      return response.json(platesWithIngredients);
    }

    if (ingredient) {
      const separateIngredient = ingredient.split(",");

      const filterPlate = separateIngredient.map((ingredient) => {
        const filterIngredient = allIngredients.filter((tag) => {
          return tag.name === ingredient;
        });
        return [...filterIngredient];
      });

      let verifyPlate;

      if (filterPlate[1]) {
        verifyPlate = [...filterPlate[0], ...filterPlate[1]];
      } else {
        verifyPlate = [...filterPlate[0]];
      }

      const fullResult = verifyPlate.map((plate) => {
        const allPlatesResult = allPlates.filter((tag) => {
          return tag.id === plate.plate_id;
        });
        return {
          ...allPlatesResult,
          ingredient_id: plate.id,
          ingredient: plate.name,
        };
      });

      return response.json(fullResult);
    }

    const allPlatesWithIngredients = allPlates.map((plate) => {
      const result = allIngredients.filter((tag) => {
        return tag.plate_id === plate.id;
      });
      return {
        ...plate,
        ingredients: result,
      };
    });

    return response.json(allPlatesWithIngredients);
  }

  async show(request, response) {
    const { id } = request.params;

    const plate = await knex("plates").where({ id }).first();
    const ingredients = await knex("ingredients")
      .select(["id", "name"])
      .where({ plate_id: id })
      .orderBy("name");

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
      if (value.length < 1) {
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
