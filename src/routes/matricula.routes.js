const express = require("express");
const matricula_model = require("../models/matricula.model.js");
const matricula_routes_http = express.Router();

/*Crear*/
matricula_routes_http.post("/", (req, res) => {
  const new_matricula = matricula_model(req.body);
  new_matricula,
    save()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
});

/*Buscar*/
matricula_routes_http.get("/", (req, res) => {
  matricula_model
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

/*Búsqueda específica*/
matricula_routes_http.get("/:matriculaId", (req, res) => {
  const { matriculaId } = req.params;
  matricula_model
    .findById({ _id: matriculaId })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});
