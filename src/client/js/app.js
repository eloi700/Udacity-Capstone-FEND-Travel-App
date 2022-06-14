// WeatherBit
const weatherBitUrl = 'https://api.weatherbit.io/v2.0/forecast/energy?'
// const weatherBitKey = '8f907b99fd0542e9b7d2de184884e009'
// geoNames
// const geoNamesUrl = 'http://api.geonames.org/';
// const geoNamesKey = 'eloi';
// const geonamesQuery = 'searchJSON?formatted=true&q=';
// Pixabay
// const pixabayURL = 'https://pixabay.com/api/?key=';
// const pixabayKey = '28046478-04bf275bfeb17b6c3253b4852';

// Validation for the place of destination
const destinationLoc = document.getElementById("to-location");
destinationLoc.addEventListener("change", useDestination);
destinationLoc.addEventListener("click", useDestination);

function useDestination() {
  destinationLoc.classList.add('used');
}

// Validation for the date of travel
const startDateTrip = document.getElementById("start-date");
const endDateTrip = document.getElementById("end-date");

const today = new Date();
const month = `${today.getMonth()+1}`.padStart(2, '0');
const minDate = `${today.getFullYear()}-${month}-${today.getDate()}`;
startDateTrip.min = minDate;
endDateTrip.min = minDate;


startDateTrip.addEventListener("change", function () {
  endDateTrip.min = startDateTrip.value;
});

endDateTrip.addEventListener("change", function () {
  endDateTrip.classList.add('used');
});

//Activation of search button
const tripInfo = document.querySelector(".travel-info");
const searchBtn = document.getElementById("search");
const searchForm = document.getElementById("search-form");

searchBtn.addEventListener("click", function (event){
  event.preventDefault();

  if (searchForm.checkValidity()){
    tripInfo.classList.add('show');
    searchForm.classList.add('hide');
  } else{
    destinationLoc.classList.add('used');
    startDateTrip.classList.add('used');
    endDateTrip.classList.add('used');
  }
})