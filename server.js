const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const config = require("./dbconfig/config");
require("dotenv").config();
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const menufacturerRoute = require("./routes/menufacturerRoute");
const customerRoute = require("./routes/customerRoute");
const userAuthRoute = require("./routes/userAuthRoutes");
let { PythonShell } = require("python-shell");

const app = express();

let options = {
  args: ["Hello world"],
};

PythonShell.run(
  "./digitalSignature/eddsa.py",
  options,
  function (err, results) {
    if (results) console.log(results);
    if (err) throw err;
    console.log("finished");
  }
);

// connect to mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// customer route
app.use("/api/v1", customerRoute);
// admin auth route
app.use("/api/v1", authRouter);
// user auth route
app.use("/api/v1", userAuthRoute);
// menufacturer route
app.use("/api/v1", menufacturerRoute);

// Error handling
app.use("*", (req, res, next) => {
  const error = new Error("Url is Not Found on this server.");

  return res.status(404).json({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
