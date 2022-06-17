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

function setInfo() {
  if (!dataObject) {
    return;
  }

  const locImage = document.querySelector(".loc-img");
  const location = document.getElementById("city-place");
  const deptDate = document.getElementById("departure-date");
  const arrDate = document.getElementById("arrival-date");
  const daysAway = document.querySelector(".trip-countdown-loc");
  location.textContent = `${dataObject.location}, ${dataObject.countryName}`;
  deptDate.textContent = `${dataObject.startDate}`;
  arrDate.textContent = `${dataObject.endDate}`;
  daysAway.textContent = `${dataObject.location}, ${dataObject.countryName}`;
  locImage.src = `${dataObject.imageUrl}`;
}

// delete trip
const delButton = document.querySelector(".delete");
delButton.addEventListener("click", function () {
  tripInfo.classList.remove("show");
  localStorage.removeItem('travelInfo');
  searchForm.classList.remove("hide");
  searchForm.reset();
});

// save trip in local storage
const saveButton = document.querySelector(".save");
saveButton.addEventListener("click", function () {
  if (dataObject)
    localStorage.setItem("travelInfo", JSON.stringify(dataObject));
});

// retrieve save data from local storage
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
