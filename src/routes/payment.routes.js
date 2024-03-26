const { Router } = require("express");
const PaymentController = require("../controllers/PaymentController");
const ensureAuth = require("../middlewares/ensureAuth");

const paymentRoutes = Router();
const paymentController =  new PaymentController();

paymentRoutes.get("/:id", ensureAuth,paymentController.show);
paymentRoutes.put("/qrcode/:id", paymentController.execute);
paymentRoutes.get("/", paymentController.index);
paymentRoutes.post("/", ensureAuth, paymentController.create);

module.exports = paymentRoutes;