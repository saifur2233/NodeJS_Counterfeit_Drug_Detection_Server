const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DrugSupplyRequestModelSchema = new Schema({
  receiverName: String,
  receiverAddress: String,
  receiverType: String,
  senderAddress: String,
  senderType: String,
  drugName: String,
  message: String,
});

const DrugSupplyRequestModel = mongoose.model(
  "DrugSupplyRequest",
  DrugSupplyRequestModelSchema
);

module.exports = DrugSupplyRequestModel;
