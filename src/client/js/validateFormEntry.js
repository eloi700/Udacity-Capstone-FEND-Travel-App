//This is to validate the input entry for valid location and date not to be in the past.
function validateInputEntry(destination, departDate, currentDay) {
    const exp = /^[-a-zA-Z\s]{1,30}$/,
    regex = new RegExp(exp),
    sameDate = Math.floor(
      (Date.UTC(
        departDate.getFullYear(),
        departDate.getMonth(),
        departDate.getDate()
      ) -
        Date.UTC(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate())) /
        (1000 * 60 * 60 * 24)
    );
    return destination.match(regex) && (departDate > today || sameDate === 0)
      ? true
      : false;
  }

  export { validateInputEntry };