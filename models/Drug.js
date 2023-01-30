const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DrugModelSchema = new Schema({
  menufacturerName: String,
  drugName: String,
  drugCode: String,
  drugDosage: String,
  drugQuantity: String,
  mfgDate: String,
  expDate: String,
});

const DrugModel = mongoose.model("Drug", DrugModelSchema);

module.exports = DrugModel;
