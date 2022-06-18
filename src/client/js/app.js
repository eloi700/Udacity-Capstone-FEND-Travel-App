// primary data object
let dataObject;

const destinationLoc = document.getElementById("to-location");
const startDateTrip = document.getElementById("start-date");
const endDateTrip = document.getElementById("end-date");

const tripInfo = document.querySelector(".travel-info");
const searchBtn = document.getElementById("search");
const searchForm = document.getElementById("search-form");

const delButton = document.querySelector(".delete");
const saveButton = document.querySelector(".save");

function run() {
  const today = new Date();
  const oneDay = 86400000;
  const month = `${today.getMonth() + 1}`.padStart(2, "0");
  const minDate = `${today.getFullYear()}-${month}-${today.getDate()}`;
  startDateTrip.min = minDate;
  endDateTrip.min = minDate;

  destinationLoc.addEventListener("change", useDestination);
  destinationLoc.addEventListener("click", useDestination);

  startDateTrip.addEventListener("change", function () {
    endDateTrip.min = startDateTrip.value;
  });

  endDateTrip.addEventListener("change", function () {
    endDateTrip.classList.add("used");
  });

  searchForm.reset();

  searchBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (searchForm.checkValidity()) {
      const formData = new FormData(searchForm);

      // days countdown
      let dayStartText = formData.get("start-date");
      const newStartDate = new Date(dayStartText);
      const daysDiff = Math.ceil(
        (newStartDate.getTime() - today.getTime()) / oneDay
      );
      const daysLeft = document.getElementById("trip-countdown-days");
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
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.text().then((text) => {
              throw new Error(text);
            });
          }
        })
        .then((data) => {
          dataObject = data;
          setInfo();
          tripInfo.classList.add("show");
          searchForm.classList.add("hide");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      destinationLoc.classList.add("used");
      startDateTrip.classList.add("used");
      endDateTrip.classList.add("used");
    }
  });

  // delete trip
  delButton.addEventListener("click", function () {
    tripInfo.classList.remove("show");
    localStorage.removeItem("travelInfo");
    searchForm.classList.remove("hide");
    searchForm.reset();
  });

  // save trip in local storage
  saveButton.addEventListener("click", function () {
    if (dataObject)
      localStorage.setItem("travelInfo", JSON.stringify(dataObject));
  });

  // load trip from storage
  readData();
  setInfo();

  if (dataObject) {
    tripInfo.classList.add("show");
    searchForm.classList.add("hide");
  }
}

function useDestination() {
  destinationLoc.classList.add("used");
}

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

// retrieve save trip from local storage
function readData() {
  const storageData = localStorage.getItem("travelInfo");
  if (storageData) {
    dataObject = JSON.parse(storageData);
  }
}

export { run };
