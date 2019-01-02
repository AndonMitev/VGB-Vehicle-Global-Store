
const commonSchemaModel = require('../commonPropsBetweenModels/commonPropsSchema')
const fieldsConfig = require('../fieldsValidations/fieldsConfigurations');
const fields = require('../propsModelConfig/user');


// User data validation
module.exports = {
  username: {
    pattern: fields.username.pattern,

    // Set error message if Username is invalid (do not match the pattern)
    patternErrorMsg: fieldsConfig.validUsernameRequirement,

    // Set error message if username is missing (will be handled by regex validation too)
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.username.fieldName),

    // Set error message if username is already used by another user
    uniqueErrorMsg: fieldsConfig.uniqueErrorMsg(fields.username.fieldName),

    // Set user min username length (will be handled by regex validation too)
    minLength: fields.minFieldLength,

    // Set error message if username length is less than min length
    minLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.username.fieldName,
        fields.username.minLength)
        .minLengthErrorMsg,

    // Set user max username length (will be handled by regex validation too)
    maxLength: fieldsConfig.maxFieldLength(fields.username.maxLength),

    // Set error message if username length is more than max length
    maxLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.username.fieldName,
        fieldsConfig.maxFieldLength(fields.username.maxLength))
        .maxLengthErrorMsg
  },
  email: {
    pattern: fields.email.pattern,

    // Set error message if email is invalid (do not match the pattern)
    patternErrorMsg: fieldsConfig.patternErrorMsg(fields.email.fieldName),

    // Set error message if emails is missing (will be handled by regex validation too)
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.email.fieldName),

    // Set error message if email is already used by anoter user
    uniqueErrorMsg: fieldsConfig.uniqueErrorMsg(fields.email.fieldName),
  },
  password: {
    pattern: fields.password.pattern,

    // Set error message if Password is invalid (do not match the pattern)
    patternErrorMsg: fieldsConfig.validPasswordRequirment,

    // Set error message if password is missing (will be handled by regex validation too)
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.password.fieldName),

    // Set password min length (will be handled by regex validation too)
    minLength: fields.password.minLength,

    // Set error message if password length is less than min length
    minLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.password.fieldName,
        fieldsConfig.minFieldLength(fields.password.minLength))
        .minLengthErrorMsg,

    // Set password max length (will be handled by regex validation too)
    maxLength: fields.password.maxLength,

    // Set error message if password length is more than max length
    maxLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.password.fieldName,
        fieldsConfig.minFieldLength(fields.password.minLength))
        .maxLengthErrorMsg,
  },
  roles: {
    validRoleTypes: [...fields.roles.validRoleTypes],
    default: [fields.roles.default]
  },
  ...commonSchemaModel
}

// OK Guys Thanks for watching i will do break for 1-2 hours and i will be back tonight !!! :)