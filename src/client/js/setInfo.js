
// set the trip details
function setInfo(dataObject) {
    if (!dataObject) {
      return;
    }
    const locImage = document.querySelector(".loc-img");
    const location = document.getElementById("city-place");
    const deptDate = document.getElementById("departure-date");
    const arrDate = document.getElementById("arrival-date");
    const temperature = document.getElementById("temp");
    const icon = document.getElementById("temp-icon");
    const description = document.getElementById("temp-desc");
    location.textContent = `${dataObject.location}, ${dataObject.countryName}`;
    deptDate.textContent = `${dataObject.startDate}`;
    arrDate.textContent = `${dataObject.endDate}`;
    locImage.src = `${dataObject.imageUrl}`;
    temperature.textContent = `${dataObject.weatherForecast.temperature}℃`;
    description.textContent = `${dataObject.weatherForecast.description}`;
    icon.src = `/assets/icons/${dataObject.weatherForecast.icon}.png`;
  }

  export {setInfo};