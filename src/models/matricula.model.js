const mongoose = require("mongoose");
const pago_matricula_schema = mongoose.Schema({
  cod_estudiante: { type: String, require: true, unique: true },
  nombre_estudiante: { type: String, require: true },
  num_matricula: { type: String, require: true, unique: true },
  materia: {
    type: Object,
    require: true,
    nombre_materia: { type: String, require: true },
    creditos: {
      type: Object,
      require: true,
      cantidad_c: { type: Number, require: true },
      valor_c: { type: Number, require: true },
    },
  },
});
module.exports = mongoose.model("matriculaCollection", pago_matricula_schema);
