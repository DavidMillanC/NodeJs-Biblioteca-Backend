const mongoose = require("mongoose");
const schema = mongoose.Schema;

const autorSchema = schema({
  nombres: String,
  apellidos: String,
  edad: Number,
  ciudad: String,
  telefono: String,
});

module.exports = mongoose.model("author", autorSchema);
