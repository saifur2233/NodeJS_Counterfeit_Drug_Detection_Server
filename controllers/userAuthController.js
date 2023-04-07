const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

exports.registerUser = catchAsync(async (req, res, next) => {
  const { name, address, userType, userId, email, password } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    address,
    userType,
    userId,
    email,
    password,
  });

  return user
    .save()
    .then((user) => res.status(201).json({ user }))
    .catch((error) => res.status(500).json({ error }));
});

// exports.userLogin = catchAsync(async (req, res, next) => {
//   const { address, userType, password } = req.body;

//   try {
//     const user = await User.findOne({ address: address })
//       .select("+userType +password")
//       .exec();

//     if (!user) {
//       throw createHttpError(401, "Invalid credentials");
//     }

//     if (user.userType !== userType) {
//       throw createHttpError(401, "Invalid credentials");
//     }
//     // console.log("Pass 1: ", password);
//     // console.log("Pass 2: ", user.password);
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     // if (!passwordMatch) {
//     //   throw createHttpError(401, "Password Not match!");
//     // }

//     const token = jwt.sign(
//       {
//         data: address,
//       },
//       "secret",
//       { expiresIn: "12h" }
//     );

//     res.status(200).json({ user, token });
//   } catch (error) {
//     next(error);
//   }
// });

exports.getUser = catchAsync(async (req, res, next) => {
  const address = req.params.address;

  return User.find({ address })
    .then((user) => res.status(200).json({ user }))
    .catch((error) => res.status(500).json({ error }));
});
