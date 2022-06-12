//This is to validate the input entry for valid location and date not to be in the past.
// const cityLoc = () =>{
//     let city = document.getElementById(to-location)
// }
// const startDate = document.getElementById(start-date),
// endDate = document.getElementById(end-date);

// function validateInputEntry(destination, departDate, currentDay) {
//     const exp = /^[-a-zA-Z\s]{1,30}$/,
//     regex = new RegExp(exp);
//     sameDate = Math.floor(
//       (Date.UTC(
//         departDate.getYear(),
//         departDate.getMonth(),
//         departDate.getDate()
//       ) -
//         Date.UTC(currentDay.getYear(), currentDay.getMonth(), currentDay.getDate())) /
//         (1000 * 60 * 60 * 24)
//     );
//     return destination.match(regex) && (departDate > currentDay || sameDate === 0)
//       ? true
//       : false;
//   }

//   export { validateInputEntry };

// Validation for the location entry
function cityLocation(destination) {
  const exp = /^[-a-zA-Z\s]{1,30}$/,
    regex = new RegExp(exp);
  return destination.match(regex) ? true : false;
}

export { cityLocation };

//Validation if the leaving date is less than current date and departure date is less than the leaving date.
function checkDate() {
  // let selectedTextLeaving = document.getElementById("start-date").value;
  // let selectedTextDepart = document.getElementById("end-date").value;
  // let selectedDateLeaving = new Date(selectedTextLeaving);
  // let selectedDateDepart = new Date(selectedTextDepart);
  let currentDateL = new Date(mdy[0] - 1, mdy[2], mdy[1]);
  let selectedDateD = new Date(mdy[0] - 1, mdy[2], mdy[1]);
  if (selectedDateLeaving < selectedDateL) {
    alert("Please enter today or future date.");
  } else {
    if (selectedDateDepart < selectedDateD) {
      alert("Please enter date beyond the starting date.");
    }
  }
}
