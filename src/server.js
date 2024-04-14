require("express-async-errors");
require("dotenv/config");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

const PORT = process.env.SERVER_PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
