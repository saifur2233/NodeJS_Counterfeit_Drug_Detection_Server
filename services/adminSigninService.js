const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const adminLogin = async (signinData) => {
  const { email, password } = signinData;
  console.log("hello 1: ", email, password);
  if (!email || !password) {
    return null;
  }

  const admin = await Admin.findOne({ email });
  if (password == admin?.password) {
    const token = jwt.sign(
      {
        email: admin.email,
      },
      "saifur22",
      {
        expiresIn: process.env.JWT_EXPIRES_TIME,
      }
    );
    const adminEmail = admin.email;

    return { adminEmail, token };
  } else {
    return null;
  }
};

module.exports = { adminLogin };
