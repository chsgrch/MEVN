// Import express
let express = require("express");
// Import Body parser
let bodyParser = require("body-parser");
// Import Mongoose
let mongoose = require("mongoose");
//for upload file (express-fileupload)
const fileUpload = require("express-fileupload");
const config = require("./config/config");
const cors = require("cors");

let app = express();
app.use(fileUpload());

const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrossDomain);

// app.options(cors());

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable

const url = `mongodb://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@${config.MONGO_HOSTNAME}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=agro`;
mongoose.connect(url, { useNewUrlParser: true });

var db = mongoose.connection;

// Added check for DB connection

if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// Use Api routes in the App
app.use("/api", apiRoutes);
// Launch app to listen to specified port

app.listen(process.env.PORT || config.port, () => {
  console.log("Running on port " + config.port);
});
