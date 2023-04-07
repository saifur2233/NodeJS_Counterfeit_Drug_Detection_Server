const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminModelSchema = new Schema({
  name: String,
  email: String,
  password: String,
  userType: String,
  phone: String,
});

const AdminModel = mongoose.model("Admin", AdminModelSchema);

module.exports = AdminModel;
