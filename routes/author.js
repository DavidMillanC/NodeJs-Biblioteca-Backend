var express = require("express");
var AuthorController = require("../controllers/author");

var api = express.Router();

api.get("/prueba", AuthorController.prueba);
api.get("/getAutor", AuthorController.getAutor);
api.post("/autor", AuthorController.saveAuthor);
api.put("/autor/:id", AuthorController.updateAutor);
api.delete("/autor/:id", AuthorController.deleteAutor);
module.exports = api;
