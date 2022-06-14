//Validation for the date entry
function checkDate(startDateText, endDateText) {
  const dateStart = new Date(startDateText);
  const dateEnd = new Date(endDateText);
  const now = new Date();
  return dateStart < now || dateEnd < dateStart ? false : true;
}

export { checkDate };
