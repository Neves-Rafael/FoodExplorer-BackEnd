const { Router } = require("express");
const PaymentController = require("../controllers/PaymentController");
const ensureAuth = require("../middlewares/ensureAuth");

const paymentRoutes = Router();
const paymentController = new PaymentController();

paymentRoutes.get("/:id", ensureAuth, paymentController.show);
paymentRoutes.put("/qrcode/:id", paymentController.execute);
paymentRoutes.get("/", ensureAuth, paymentController.index);
paymentRoutes.post("/", ensureAuth, paymentController.create);
paymentRoutes.patch("/:id", ensureAuth, paymentController.update);

module.exports = paymentRoutes;
