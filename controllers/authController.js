const adminSigninService = require("../services/adminSigninService");
const adminSignupService = require("../services/adminSignupService");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.adminSignIn = catchAsync(async (req, res, next) => {
  const data = await adminSigninService.adminLogin(req.body);
  console.log("hello 3: ", data);
  const { adminEmail, token } = data;
  if (!token) {
    return next(new AppError("Unauthorized Access", 401));
  }

  //localStorage.setItem("accessToken", token);

  res.status(200).json({
    adminEmail,
  });
});

exports.adminSignup = catchAsync(async (req, res, next) => {
  const data = await adminSignupService.adminRegistration(req.body);
  const { adminEmail, token } = data;
  if (!token) {
    return next(new AppError("Unauthorized Access", 401));
  }

  //localStorage.setItem("accessToken", token);

  res.status(201).json({
    adminEmail,
  });
});
