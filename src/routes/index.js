const express = require("express");
const matricula_routes_access = require("../models/matricula.model.js");
const routes = express.Router();

const app_routes_system = (app) => {
  app.use("/api/v1", routes);
  routes.use("/matriculas", matricula_routes_access);
};

module.exports = app_routes_system;
