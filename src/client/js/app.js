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
  const month = `${today.getMonth() + 1}`.padStart(2, "0");
  const minDate = `${today.getFullYear()}-${month}-${today.getDate()}`;
  startDateTrip.min = minDate;
  endDateTrip.min = minDate;

  destinationLoc.addEventListener("change", Client.useDestination);
  destinationLoc.addEventListener("click", Client.useDestination);

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
      setDaysLeft(dayStartText);

      Client.makeRequest(formData, (data) => (dataObject = data));
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
    if (dataObject) {
      localStorage.setItem("travelInfo", JSON.stringify(dataObject));
    }
  });

  // load trip details from storage
  readData();
  Client.setInfo(dataObject);
  setDaysLeft(dataObject?.startDate);

  if (dataObject) {
    tripInfo.classList.add("show");
    searchForm.classList.add("hide");
  }
}

// retrieve save trip from local storage
function readData() {
  const storageData = localStorage.getItem("travelInfo");
  if (storageData) {
    dataObject = JSON.parse(storageData);
  }
}

function setDaysLeft(dayStartText) {
  if (!dayStartText) {
    return;
  }

  const today = new Date();
  const oneDay = 86400000;
  const newStartDate = new Date(dayStartText);
  const daysDiff = Math.ceil(
    (newStartDate.getTime() - today.getTime()) / oneDay
  );
  const daysLeft = document.getElementById("trip-countdown-days");
  daysLeft.textContent = daysDiff;
}
window.addEventListener("load", run);
