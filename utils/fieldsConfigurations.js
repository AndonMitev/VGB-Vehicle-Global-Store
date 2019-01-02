const minFieldLength = minLength => minLength;
const maxFieldLength = maxLength => maxLength;
const requiredErrorMsg = field => ({ requiredErrorMsg: `${field} is required` });
const uniqueErrorMsg = field => ({ uniqueErrorMsg: `${field} is already used` });
const patternErrorMsg = field => ({ patternErrorMsg: `Please provide valid ${field}` });
const lengthErrorMsg = (field, symbols) => ({
  minLengthErrorMsg: `${field} must be at least ${symbols} symbols long`,
  maxLengthErrorMsg: `${field} cannot be more than ${symbols} symbols long`
});

module.exports = {
  minFieldLength,
  maxFieldLength,
  requiredErrorMsg,
  uniqueErrorMsg,
  patternErrorMsg,
  lengthErrorMsg
}