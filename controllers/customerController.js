const { default: mongoose } = require("mongoose");
const Drug = require("../models/Drug");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.searchDrugByDrugCode = catchAsync(async (req, res, next) => {
  const drugCode = req.params.drugCode;

  return Drug.find({ drugCode })
    .then((drug) => res.status(200).json({ drug }))
    .catch((error) => res.status(500).json({ error }));
});
