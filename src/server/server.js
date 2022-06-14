// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require express etc. to run server and routes
const express = require("express"),
  dotenv = require("dotenv"),
  fetch = require("node-fetch");

// Start up an instance of app
const app = express();
dotenv.config();

// Initialize the project folder
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

/* Middleware*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { electron } = require("webpack");
app.use(cors());

// Setup Server
const port = 3000;
app.listen(port, () => {
  console.log(`We are running on localhost: ${port}`);
});

// Callback function to complete GET '/all'
app.get("/all", (req, res) => {
  res.send(projectData);
});

// Post Route
app.post("/all", (req, res) => {
  console.log(req.body);

  projectData = {
    temperature: req.body.temperature,
    depCity: req.body.depCity,
    depDate: req.body.depdate,
    arrDate: req.body.arrdate,
    weather: req.body.weather,
    daysLeft: req.body.daysLeft,
  };
  //   res.send("done");
  res.end();
});

// designates what port the app will listen for the incoming requests
app.listen(process.env.PORT || 8081, function () {
  console.log("Running on localhost 8081!");
});


