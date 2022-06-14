// Validation for the location entry
function cityLocation(destination) {
  const exp = /^[-a-zA-Z\s]{1,30}$/,
    regex = new RegExp(exp);
  return destination.match(regex) ? true : false;
}

export { cityLocation };
