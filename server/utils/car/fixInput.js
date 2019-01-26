const setFirstLetterToUpperCase = prop => {
  if (prop) {
    return prop[0].toUpperCase() + prop.slice(1, prop.length);
  }
}

module.exports = clientRequest => {
  const spy = {...clientRequest};
  for (let prop in clientRequest) {
    spy[prop] = setFirstLetterToUpperCase(spy[prop]);
  }
  return spy;
}