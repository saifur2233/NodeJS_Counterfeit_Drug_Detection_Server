const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  name: String,
  address: String,
  userType: String,
  userId: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("User", UserModelSchema);

module.exports = UserModel;
