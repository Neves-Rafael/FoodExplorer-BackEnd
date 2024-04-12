const multer = require("multer");
const { Router } = require("express");
const uploadConfig = require("../configs/upload");
const ensureAuth = require("../middlewares/ensureAuth");
const PlatesController = require("../controllers/PlatesController");
const PlateImageController = require("../controllers/PlateImageController");
const verifyRoleAuthorization = require("../middlewares/verifyRoleAuthorization");

const platesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const platesController = new PlatesController();
const plateImageController = new PlateImageController();

platesRoutes.use(ensureAuth);

platesRoutes.post(
  "/",
  verifyRoleAuthorization("admin"),
  platesController.create
);

platesRoutes.get("/", platesController.index);
platesRoutes.get("/:id", platesController.show);

platesRoutes.put(
  "/:id",
  verifyRoleAuthorization("admin"),
  platesController.update
);
platesRoutes.delete(
  "/:id",
  verifyRoleAuthorization("admin"),
  platesController.delete
);

platesRoutes.patch(
  "/image/:plate_id",
  ensureAuth,
  upload.single("image"),
  verifyRoleAuthorization("admin"),
  plateImageController.update
);

module.exports = platesRoutes;
