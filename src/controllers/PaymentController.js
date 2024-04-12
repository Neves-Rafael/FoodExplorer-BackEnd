const knex = require("../database/knex");

class PaymentController {
  async create(request, response) {
    const user_id = request.user.id;
    const { plate, price } = request.body;

    const insertPayment = await knex("payments")
      .insert({
        user_id: user_id,
        status: "pendente",
        plates: plate,
        price: price,
      })
      .returning("id");

    setTimeout(async () => {
      const [verifyStatus] = await knex("payments").where({
        id: insertPayment[0].id,
      });

      if (verifyStatus.status === "pendente") {
        await knex("payments").where({ id: insertPayment[0].id }).update({
          status: "cancelado",
        });
      }
    }, 1000 * 60 * 15); // 15 minutos

    return response.json(insertPayment);
  }

  async show(request, response) {
    const id = request.params.id;
    const user_id = request.user;

    const searchPayment = await knex("payments").where({ id }).first();

    if (user_id.id === searchPayment.user_id) {
      return response.json(searchPayment);
    } else {
      return response.json({ Message: "Pedido não encontrado." });
    }
  }

  async index(request, response) {
    const user_id = request.user.id;
    const { role } = request.user;

    if (role === "admin") {
      const searchAllPayments = await knex("payments");
      return response.json(searchAllPayments);
    }

    const searchAllUserPayments = await knex("payments").where({
      user_id: user_id,
    });
    return response.json(searchAllUserPayments);
  }

  async execute(request, response) {
    const { id } = request.params;

    const [verifyStatus] = await knex("payments").where({ id });

    if (verifyStatus.status === "cancelado") {
      await knex("payments").where({ id }).update({
        status: "cancelado",
      });
      return response.json(
        "Tempo para pagamento expirou o pedido foi cancelado."
      );
    }

    if (verifyStatus.status === "pendente") {
      await knex("payments").where({ id }).update({
        status: "processando",
      });
    }

    setTimeout(async () => {
      await knex("payments").where({ id }).update({
        status: "em andamento",
      });
    }, 1000 * 10); //10 segundos

    setTimeout(async () => {
      await knex("payments").where({ id }).update({
        status: "cozinha",
      });
    }, 1000 * 20); //20 segundos

    setTimeout(async () => {
      await knex("payments").where({ id }).update({
        status: "finalizado",
      });
    }, 1000 * 30); //30 segundos

    return response.json(verifyStatus.status);
  }

  async update(request, response) {
    const { id } = request.params;
    const { newStatus } = request.body;

    if (!newStatus) {
      return;
    }

    await knex("payments").where({ id }).update({
      status: newStatus,
    });

    return response.status(200);
  }
}

module.exports = PaymentController;
