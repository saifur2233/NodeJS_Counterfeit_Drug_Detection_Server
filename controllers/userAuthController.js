const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");
const { default: mongoose } = require("mongoose");

exports.registerUser = catchAsync(async (req, res, next) => {
  const { name, address, userType, userId } = req.body;
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    address,
    userType,
    userId,
  });

  return user
    .save()
    .then((user) => res.status(201).json({ user }))
    .catch((error) => res.status(500).json({ error }));
});
