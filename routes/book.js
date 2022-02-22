var express = require("express");
var BookController = require("../controllers/book");

var api = express.Router();

api.get("/pruebas", BookController.pruebas);
api.get("/getLibros", BookController.getLibros);
api.post("/libro", BookController.saveLibro);
api.put("/libro/:id", BookController.updateLibro);
api.delete("/libro/:id", BookController.deleteLibro);

module.exports = api;
