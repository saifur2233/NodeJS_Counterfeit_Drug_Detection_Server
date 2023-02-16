const { default: mongoose } = require("mongoose");
const DrugSupplyRequest = require("../models/DrugSupplyRequest");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.DrugSupplyReq = catchAsync(async (req, res, next) => {
  const {
    receiverName,
    receiverAddress,
    receiverType,
    senderAddress,
    senderType,
    drugName,
    message,
  } = req.body;

  const drugSupplyRequest = new DrugSupplyRequest({
    _id: new mongoose.Types.ObjectId(),
    receiverName,
    receiverAddress,
    receiverType,
    senderAddress,
    senderType,
    drugName,
    message,
  });

  return drugSupplyRequest
    .save()
    .then((drugSupplyRequest) => res.status(201).json({ drugSupplyRequest }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllSendReqInfo = catchAsync(async (req, res, next) => {
  return DrugSupplyRequest.find()
    .then((allReqs) => res.status(200).json({ allReqs }))
    .catch((error) => res.status(500).json({ error }));
});
