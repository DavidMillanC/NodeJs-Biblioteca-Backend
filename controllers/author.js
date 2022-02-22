const Autor = require("../models/author");

function getAutor(req, res) {
  Autor.find((err, autorList) => {
    if (err) {
      res.status(500).send({
        message: "Error!!",
      });
    } else {
      if (autorList) {
        res.status(200).json({
          Autor: autorList,
        });
      }
    }
  });
}

function prueba(req, res) {
  res.status(200).send({
    mensaje: "Ruta de prueba de la API",
  });
}

function saveAuthor(req, res) {
  var autor = new Autor();
  var params = req.body;
  if (params.nombres) {
    autor.nombres = params.nombres;
    autor.apellidos = params.apellidos;
    autor.edad = params.edad;
    autor.ciudad = params.ciudad;
    autor.telefono = params.telefono;

    autor.save((err, autorStored) => {
      if (err) {
        res.status(500).send({
          mensaje: "Error del servidor",
        });
      } else {
        if (autorStored) {
          res.status(200).send({
            autor: autorStored,
          });
        } else {
          res.status(200).send({
            mensaje: "No se pudo guardar autor",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      mensaje: "Nombres Obligatorio",
    });
  }
}

function updateAutor(req, res) {
  var idAutor = req.params.id;
  const update = req.body;
  Autor.findByIdAndUpdate(
    idAutor,
    update,
    { new: true },
    (err, autorUpdated) => {
      if (err) {
        res.status(500).send({
          message: "Error del servidor",
        });
      } else {
        if (autorUpdated) {
          res.status(200).send({
            autor: autorUpdated,
          });
        } else {
          res.status(404).send({
            message: "No existe el libro...!",
          });
        }
      }
    }
  );
}

function deleteAutor(req, res) {
  const idAutor = req.params.id;

  Autor.findByIdAndRemove(idAutor, (err, autorRemoved) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (autorRemoved) {
        res.status(200).send({
          autor: autorRemoved,
        });
      } else {
        res.status(404).send({
          message: "No existe el libro...!",
        });
      }
    }
  });
}

module.exports = {
  prueba,
  getAutor,
  saveAuthor,
  updateAutor,
  deleteAutor,
};
