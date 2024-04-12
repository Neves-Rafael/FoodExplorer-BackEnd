const knex = require("../database/knex");

class FavoritesController {
  async execute(request, response) {
    const user_id = request.user.id;
    const { plate_id } = request.body;

    const verifyFavoritePlate = await knex("favorite")
      .where({
        user_id: user_id,
        plate_id: plate_id,
      })
      .first();

    if (verifyFavoritePlate) {
      await knex("favorite")
        .where({
          user_id: user_id,
          plate_id: plate_id,
        })
        .delete();
      return response.json({ message: "Prato atualizado." });
    } else {
      await knex("favorite").insert({
        state: true,
        user_id: user_id,
        plate_id: plate_id,
      });
    }

    return response.json({ message: "Prato adicionado aos favoritos." });
  }

  async index(request, response) {
    const user_id = request.user.id;
    const allFavorites = await knex("favorite").where({ user_id: user_id });

    return response.json(allFavorites);
  }
}

module.exports = FavoritesController;
