require("express-async-errors");

const cors = require("cors");
const express = require("express");
app.use(cors());
app.use(express.json());

const PORT = 3333;
app.listen(PORT, () => {
  console.log("porta 3333");
});
