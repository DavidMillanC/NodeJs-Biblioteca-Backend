var express = require("express");
const { model } = require("mongoose");
var app = express();

//cargar rutas

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var libro_routes = require("./routes/book");
var autor_routes = require("./routes/author");
//ruta base
app.use("/api", libro_routes);
app.use("/api", autor_routes);

//RUTAS
app.get("/", (req, res) => {
  res.status(200).send({
    mensaje: "ruta de prueba de mi api con node",
  });
});

module.exports = app;
