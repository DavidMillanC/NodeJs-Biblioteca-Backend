const Libros = require("../models/book");

function getLibros(req, res) {
  Libros.find((err, libroList) => {
    if (err) {
      res.status(500).send({
        message: "Error!!",
      });
    } else {
      if (libroList) {
        res.status(200).json({
          Libros: libroList,
        });
      }
    }
  });
}
function getLibro(req, res) {
  var idLibro = req.params.id;

  Libros.findById(idLibro).exec((err, libros) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (libros) {
        res.status(200).send({
          libros,
        });
      } else {
        res.status(404).send({
          message: "No hay libros...!",
        });
      }
    }
  });
}

function pruebas(req, res) {
  res.status(200).send({
    mensaje: "Ruta de prueba de la API",
  });
}

function saveLibro(req, res) {
  var libro = new Libros();
  var params = req.body;
  if (params.titulo) {
    libro.titulo = params.titulo;
    libro.autor = params.autor;
    libro.hojas = params.hojas;

    libro.save((err, libroStored) => {
      if (err) {
        res.status(500).send({
          mensaje: "Error del servidor",
        });
      } else {
        if (libroStored) {
          res.status(200).send({
            libro: libroStored,
          });
        } else {
          res.status(200).send({
            mensaje: "No se pudo guardar libro",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      mensaje: "Titulo Obligatorio",
    });
  }
}
function updateLibro(req, res) {
  var idLibro = req.params.id;
  const update = req.body;
  Libros.findByIdAndUpdate(
    idLibro,
    update,
    { new: true },
    (err, libroUpdated) => {
      if (err) {
        res.status(500).send({
          message: "Error del servidor",
        });
      } else {
        if (libroUpdated) {
          res.status(200).send({
            libro: libroUpdated,
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

function deleteLibro(req, res) {
  const idLibro = req.params.id;

  console.log(idLibro);
  Libros.findByIdAndRemove(idLibro, (err, LibroRemoved) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (LibroRemoved) {
        res.status(200).send({
          libro: LibroRemoved,
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
  getLibros,
  getLibro,
  pruebas,
  saveLibro,
  updateLibro,
  deleteLibro,
};
