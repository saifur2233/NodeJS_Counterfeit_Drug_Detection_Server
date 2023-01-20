const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminModelSchema = new Schema({
  email: String,
  password: String,
});

const AdminModel = mongoose.model("Admin", AdminModelSchema);

module.exports = AdminModel;
