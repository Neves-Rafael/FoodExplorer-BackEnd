const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class FavoritesController{
  async execute(request, response){
    const user_id = request.user.id;
    const { plate_id } = request.body;

    const verifyFavoritePlate = await knex("favorite").where({
      user_id: user_id, plate_id: plate_id
    }).first();

    console.log(verifyFavoritePlate, plate_id)

    if(verifyFavoritePlate[0]){
      await knex("favorite").where({
        user_id: user_id, plate_id: plate_id
      }).delete();
      return response.json({message: "Prato atualizado."})
    }

    await knex("favorite").insert({
      state: true,
      user_id: user_id,
      plate_id: plate_id, 
    })

    return response.json({message: "Prato adicionado aos favoritos."})
  }

  async delete(){
    const user_id = request.user.id;
    const { plate_id } = request.body;

    const verifyFavoritePlate = await knex("favorite").where({
      user_id: user_id, plate_id: plate_id
    }).select("*");

    console.log(verifyFavoritePlate, plate_id)

    if(verifyFavoritePlate[0]){
      await knex("favorite").where({
        user_id: user_id, plate_id: plate_id
      }).delete();
      return
    }

    return response.json({message: "Prato adicionado aos favoritos."})
  }

  async index(request, response){
    const user_id = request.user.id;    
    const allFavorites = await knex("favorite").where({user_id: user_id});

    return response.json(allFavorites)
  }
}

module.exports = FavoritesController;