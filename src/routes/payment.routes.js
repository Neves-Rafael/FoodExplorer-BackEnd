const { Router } = require("express");
const ensureAuth = require("../middlewares/ensureAuth");
const PaymentController = require("../controllers/PaymentController");
const verifyRoleAuthorization = require("../middlewares/verifyRoleAuthorization");

const paymentRoutes = Router();
const paymentController = new PaymentController();

paymentRoutes.get("/:id", ensureAuth, paymentController.show);
paymentRoutes.put("/qrcode/:id", paymentController.execute);
paymentRoutes.get("/", ensureAuth, paymentController.index);
paymentRoutes.post("/", ensureAuth, paymentController.create);
paymentRoutes.patch(
  "/:id",
  ensureAuth,
  verifyRoleAuthorization("admin"),
  paymentController.update
);

module.exports = paymentRoutes;
