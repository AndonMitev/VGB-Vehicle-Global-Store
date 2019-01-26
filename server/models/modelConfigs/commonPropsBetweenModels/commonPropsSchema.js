const fields = require('./commonPropsFields');
const fieldsConfig = require('../fieldsValidations/fieldsConfigurations');

module.exports = {
  country: {
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.country.fieldName),

    // Set country min length TODO: Add regex validation
    minLength: fields.country.minLength,

    // Set error message if country length is less than min length
    minLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.country.fieldName,
        fields.country.minLength)
        .minLengthErrorMsg,

    // Set password max length TODO: Add regex validation
    maxLength:fields.country.minLength,

    // Set error message if country length is more than max length
    maxLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.country.fieldName,
        fields.country.minLength)
        .maxLengthErrorMsg,
  },
  region: {
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.region.fieldName),

    // Set region min length TODO: Add regex validation
    minLength: fieldsConfig.minFieldLength(fields.region.minLength),

    // Set error message if region length is less than min length
    minLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.region.fieldName,
        fieldsConfig.minFieldLength(fields.region.minLength))
        .minLengthErrorMsg,

    // Set password max length TODO: Add regex validation
    maxLength: fieldsConfig.maxFieldLength(fields.region.maxLength),

    // Set error message if region length is more than max length
    maxLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.region.fieldName,
        fieldsConfig.minFieldLength(fields.region.maxLength))
        .maxLengthErrorMsg,
  },
  city: {
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.city.fieldName),

    // Set city min length TODO: Add regex validation
    minLength: fieldsConfig.minFieldLength(fields.city.minLength),

    // Set error message if city length is less than min length
    minLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.city.fieldName,
        fieldsConfig.minFieldLength(fields.city.minLength)).minLengthErrorMsg,

    // Set password max length TODO: Add regex validation
    maxLength: fieldsConfig.maxFieldLength(fields.city.maxLength),

    // Set error message if city length is more than max length
    maxLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.city.fieldName,
        fieldsConfig.maxFieldLength(fields.city.maxLength))
        .minLengthErrorMsg,
  }
}