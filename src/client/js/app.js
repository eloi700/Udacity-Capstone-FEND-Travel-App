// /* Global Variables */
// const generate = document.getElementById("generate"),
//   feelings = document.getElementById("feelings");

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// // Configure URL - Personal API Key for Geonames API
// const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=",
//   apiKey = "",
//   zipCode = document.getElementById("zip");
// let entryZip = null;
// let lang = "en";
// let units = "metric";

// //Get zipCode and feelings
// zipCode.onkeyup = () => {
//   entryZip = zipCode.value;
// };

// feelings.onkeyup = () => {
//   entryFeeling = feelings.value;
// };

// //Add eventListener click to generate button
// generate.addEventListener("click", () => {
//   if (zipCode.value !== "") {
//     getWeatherData(baseURL, entryZip, apiKey);
//   } else {
//     alert("Please Enter a City.");
//   }
// });

// // Build URL
// const getWeatherData = async (baseURL, city, apiKey) => {
//   await fetch(
//     `${baseURL}${city}&units=${units}&lang=${lang}&appid=${apiKey}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       return postData("/all", {
//         temperature: data.main.temp,
//         date: newDate,
//         userFeelings: entryFeeling,
//       });
//     })
//     // Fetch Data to HTML
//     .then(() => {
//         retrieveData()
//     });
// };

// // Function - GET Request
// const getData = async (url) => {
//   const res = await fetch(url);
//   try {
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("Error", error);
//   }
// };

// //Function - POST Request
// const postData = async (url, data) => {
//   const res = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   try {
//     const newData = await res.json();
//     return newData;
//   } catch (error) {
//     console.log("Error", error);
//   }
// };

// //Function to Retrieve or Get Project Data
// const retrieveData = async () => {
//   const request = await fetch("/all");
//   try {
//     //Transform into JSON
//     const allData = await request.json();
//     console.log(allData);
//     //Write updated data to DOM elements
//     document.getElementById("date").innerHTML =
//       "Today's Date:  " + allData.date;
//     document.getElementById("temp").innerHTML =
//       "Temperature:  " + Math.round(allData.temperature) + "&#x2103;";
//     document.getElementById("content").innerHTML =
//       "I feel " + allData.userFeelings;
//   } catch (error) {
//     console.log("Error", error);
//     // appropriately handle the error
//   }
// };

// const today = new Date().toISOString().split("T")[0];
// document.getElementById('start-date').min = today;

const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1; //January is 0 need to add 1.
const yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("start-date").setAttribute("max", today);

// Destination Location
const destinationLoc = document.getElementById("to-location");
destinationLoc.addEventListener("change", function () {
  if (Client.cityLocation(destinationLoc.value)) {
  } else {
    alert("Please enter valid location.");
  }
});
