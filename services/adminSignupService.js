const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const mongoose = require("mongoose");

const adminRegistration = async (data) => {
  const { email, password } = data;

  const hashedPassword = bcrypt.hash(password, 10);

  const admin = new Admin({
    _id: new mongoose.Types.ObjectId(),
    email,
    password,
  });

  const registerAdmin = await admin.save();
  const token = jwt.sign(
    {
      email: registerAdmin.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_TIME,
    }
  );

  const adminEmail = registerAdmin.email;

  return { adminEmail, token };
};

module.exports = { adminRegistration };
