const getJSONResponse = (resp) => {
  return resp.ok
    ? resp.json()
    : resp.text().then((text) => {
      throw new Error(text);
    });
};

const handleGeoData = (data, projectData) => {
  if (data.geonames.length === 0) {
    throw new Error("City unknown!");
  }
  projectData["countryName"] = data.geonames[0].countryName;
  return projectData;
};

const handleWeatherData = (data, startDate, projectData) => {
  for (let weatherObject of data.data) {
    if (weatherObject.datetime === startDate) {
      projectData["weatherForecast"] = {
        temperature: weatherObject.temp,
        datetime: weatherObject.datetime,
        description: weatherObject.weather.description,
        icon: weatherObject.weather.icon,
      };
      break;
    }
  }
  return projectData;
};

const handleImageData = (data, projectData) => {
  if (data.hits.length !== 0){
    projectData["imageUrl"] = data.hits[0].webformatURL;
  }
  return projectData;
};

module.exports = {
  getJSONResponse,
  handleGeoData,
  handleImageData,
  handleWeatherData,
};
