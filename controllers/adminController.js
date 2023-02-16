const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");

exports.getAllMenufacturer = catchAsync(async (req, res, next) => {
  const userType = "Menufacturer";
  return User.find({ userType })
    .then((user) => res.status(200).json({ user }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllDistributor = catchAsync(async (req, res, next) => {
  const userType = "Distributor";
  return User.find({ userType })
    .then((user) => res.status(200).json({ user }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllRetailer = catchAsync(async (req, res, next) => {
  const userType = "Retailer";
  return User.find({ userType })
    .then((user) => res.status(200).json({ user }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllTransportAgency = catchAsync(async (req, res, next) => {
  const userType = "TransportAgency";
  return User.find({ userType })
    .then((user) => res.status(200).json({ user }))
    .catch((error) => res.status(500).json({ error }));
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const userid = req.params.userid;
  return User.findByIdAndDelete(userid)
    .then((user) =>
      user
        ? res.status(204).json({ user, message: "Deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
});
