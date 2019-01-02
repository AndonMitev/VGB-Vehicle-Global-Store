const minFieldLength = minLength => minLength;
const maxFieldLength = maxLength => maxLength;
const minNumberValue = minValue => minValue;
const maxNumberValue = maxValue => maxValue
const requiredErrorMsg = field => `${field} is required`;
const uniqueErrorMsg = field => `${field} is already used`;
const patternErrorMsg = field => `Please provide valid ${field}`;
const lengthErrorMsg = (field, symbols) => ({
  minLengthErrorMsg: `${field} must be at least ${symbols} symbols long`,
  maxLengthErrorMsg: `${field} cannot be more than ${symbols} symbols long`
});
const numberErrorMsg = (field, value) => ({
  minAllowedNumber: `${field} cannot be less than ${value}`,
  maxAllowedNumber: `${field} cannot be more than ${value}`,
});
const lengthMustBeBetweenErrorMsg = (field, minLength, maxLength) =>
  `${field} must be between ${minLength} and ${maxLength} symbols long`;
const existingUsernameAndEmail = (username, email) =>
  `Username: "${username}" and  email "${email}" already exists.`;
const existingUsername = username =>
  `Username: "${username}" is already taken`;
const existingEmail = email =>
  `Email: "${email}" is already taken`;
const validUsernameRequirement = 
  `Username needs to be between 3 and 15 symbols, and need to start with uppercase char, need to include 1 lower case and 1 digit`;
const validPasswordRequirment = `Password need to have: Minimum eight characters, at least one uppercase letter, one lowercase letter and one numbe`


module.exports = {
  minFieldLength,
  maxFieldLength,
  minNumberValue,
  maxNumberValue,
  requiredErrorMsg,
  uniqueErrorMsg,
  patternErrorMsg,
  lengthErrorMsg,
  numberErrorMsg,
  lengthMustBeBetweenErrorMsg,
  existingUsernameAndEmail,
  existingUsername,
  existingEmail,
  validUsernameRequirement,
  validPasswordRequirment
}