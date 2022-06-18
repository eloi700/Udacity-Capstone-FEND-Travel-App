const destinationLoc = document.getElementById("to-location");
destinationLoc.addEventListener("change", useDestination);
destinationLoc.addEventListener("click", useDestination);
function useDestination() {
  destinationLoc.classList.add("used");
}

// Validation for the date of travel
const startDateTrip = document.getElementById("start-date");
const endDateTrip = document.getElementById("end-date");

const today = new Date();
const oneDay = 86400000;
const month = `${today.getMonth() + 1}`.padStart(2, "0");
const minDate = `${today.getFullYear()}-${month}-${today.getDate()}`;
startDateTrip.min = minDate;
endDateTrip.min = minDate;

startDateTrip.addEventListener("change", function () {
  endDateTrip.min = startDateTrip.value;
});

endDateTrip.addEventListener("change", function () {
  endDateTrip.classList.add("used");
});

//Activation of search button
const tripInfo = document.querySelector(".travel-info");
const searchBtn = document.getElementById("search");
const searchForm = document.getElementById("search-form");
searchForm.reset();

let dataObject;

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (searchForm.checkValidity()) {
    tripInfo.classList.add("show");
    searchForm.classList.add("hide");
    const formData = new FormData(searchForm);

  // days countdown
  let dayStartText = formData.get("start-date");
  const newStartDate = new Date(dayStartText);
  const daysDiff = Math.ceil((newStartDate.getTime() - today.getTime()) / oneDay);
  const daysLeft = document.getElementById('trip-countdown-days');
  daysLeft.textContent = daysDiff;

    fetch("/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: formData.get("toLocation"),
        startDate: formData.get("start-date"),
        endDate: formData.get("end-date"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dataObject = data;
        setInfo();
      });
  } else {
    destinationLoc.classList.add("used");
    startDateTrip.classList.add("used");
    endDateTrip.classList.add("used");
  }
});

// set the trip details
function setInfo() {
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

// delete trip
const delButton = document.querySelector(".delete");
delButton.addEventListener("click", function () {
  tripInfo.classList.remove("show");
  localStorage.removeItem("travelInfo");
  searchForm.classList.remove("hide");
  searchForm.reset();
});

// save trip in local storage
const saveButton = document.querySelector(".save");
saveButton.addEventListener("click", function () {
  if (dataObject)
    localStorage.setItem("travelInfo", JSON.stringify(dataObject));
});

// retrieve save trip from local storage
function readData() {
  const storageData = localStorage.getItem("travelInfo");
  if (storageData) {
    dataObject = JSON.parse(storageData);
  }
}

readData();
setInfo();

if (dataObject) {
  tripInfo.classList.add("show");
  searchForm.classList.add("hide");
}
