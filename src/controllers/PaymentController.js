const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class PaymentController{
  async create(request, response){
    const user_id  = request.user.id;
    const { plate, price } = request.body;

    const insertPayment = await knex("payments").insert({
      user_id: user_id,
      status: "pendente",
      plates: plate,
      price: price
    }).returning("id");

    return response.json(insertPayment)
  }

  async show(request, response){
    const id = request.params.id;
    const user_id  = request.user; 
    
    const searchPayment = await knex("payments").where({ id }).first();

    if(user_id.id === searchPayment.user_id){
      return response.json(searchPayment)
    }else{
      return response.json({ Message: "Pedido não encontrado."})
    }
  }

  async index(request, response){

    const searchAllPayments = await knex("payments");
    return response.json(searchAllPayments)
  }

  async execute(request, response){
    const { id } = request.params;

    const [verifyStatus] = await knex("payments").where({id});
    
    if(verifyStatus.status === "pendente"){
      await knex("payments").where({id}).update({
        status: "em andamento",
      });
    }

    setTimeout( async () => {
      await knex("payments").where({id}).update({
        status: "finalizado",
      });
    },1000 * 60) //1 minuto


    return response.json(verifyStatus.status)
  }
}

module.exports = PaymentController;