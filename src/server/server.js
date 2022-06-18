// Setup empty JS object to act as endpoint for all routes
// projectData = {};

// Require express etc. to run server and routes
const express = require("express"),
  dotenv = require("dotenv"),
  fetch = require("node-fetch"),
  lang = "en"
  geoNamesUrl = "http://api.geonames.org/searchJSON?q",
  weatherBitUrl = "https://api.weatherbit.io/v2.0/forecast/daily?",
  pixaBayUrl = "https://pixabay.com/api/?";

// Start up an instance of app
const app = express();
dotenv.config();

// Initialize the project folder
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

const { text } = require("body-parser");
/* Middleware*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { response } = require("express");
app.use(cors());

// Setup Server
const port = 8081;
app.listen(process.env.PORT || port, () => {
  console.log(`We are running on localhost: ${port}`);
});

// Callback function to complete GET '/all'
app.get("/all", (req, res) => {
  res.send(projectData);
});

// Post Route
app.post("/all", (req, res) => {
  console.log(req.body);
  const projectData = {
    location: req.body.location,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  };

  fetch (`${geoNamesUrl}=${req.body.location}&lang=${lang}&maxRows=1&username=${process.env.GEONAMES_KEY}`)
  .then ((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      return resp.text().then((text) =>{
        throw new Error(text);
      });
    }
  })
  .then((data) => {
    if (data.geonames.length === 0){
      throw new Error("City unknown!")
    }
    projectData['countryName'] = data.geonames[0].countryName;
    return fetch (`${weatherBitUrl}lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}&days=16&key=${process.env.WEATHERBIT_KEY}`);
  })
  .then ((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      return resp.text().then((text) =>{
        throw new Error(text);
      });
    }
  })
  .then((data) =>{
    for (let weatherObject of data.data) {
      if (weatherObject.datetime === req.body.startDate) {
        projectData['weatherForecast'] = {
          temperature: weatherObject.temp,
          datetime: weatherObject.datetime,
          description: weatherObject.weather.description,
          icon: weatherObject.weather.icon
        }
        break;
      }
    }
    console.log(data);
    return fetch (`${pixaBayUrl}key=${process.env.PIXABAY_KEY}&q=${req.body.location}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=3&pretty=true`);
  })
  .then ((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      return resp.text().then((text) =>{
        throw new Error(text);
      });
    }
  })
  .then ((data) => {
    projectData['imageUrl'] = data.hits[0].webformatURL;
    res.send(projectData);
  })
  .catch(error => {
    res.status(400).send(error.message);
  })
});