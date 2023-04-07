const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Admin = require("../models/Admin");
const { default: mongoose } = require("mongoose");

// exports.adminSignIn = catchAsync(async (req, res, next) => {
//   const data = await adminSigninService.adminLogin(req.body);
//   console.log("hello 3: ", data);
//   const { adminEmail, token } = data;
//   if (!token) {
//     return next(new AppError("Unauthorized Access", 401));
//   }

//   //localStorage.setItem("accessToken", token);

//   res.status(200).json({
//     adminEmail,
//   });
// });

exports.adminSignup = catchAsync(async (req, res, next) => {
  const { name, email, password, userType, phone } = req.body;

  const admin = new Admin({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    password,
    userType,
    phone,
  });

  return admin
    .save()
    .then((admin) => res.status(201).json({ admin }))
    .catch((error) => res.status(500).json({ error }));
});
