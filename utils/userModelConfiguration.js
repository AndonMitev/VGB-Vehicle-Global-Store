const fieldsConfig = require('./fieldsConfigurations');

const fields = {
  username: {
    fieldName: 'Username',
    minLength: fieldsConfig.minFieldLength(3),
    maxLength: fieldsConfig.maxFieldLength(15),
    pattern: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){3,15}$/i
  },
  email: {
    fieldName: 'Email',
    pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  },
  password: {
    fieldName: 'Password',
    minLength: fieldsConfig.minFieldLength(3),
    maxLength: fieldsConfig.maxFieldLength(15),
    pattern: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){3,15}$/i
  },
  roles: {
    validRoleTypes: ['Client', 'Manager', 'Admin'],
    default: 'Client'
  },
  country: {
    fieldName: 'Country',
    minLength: fieldsConfig.minFieldLength(2),
    maxLength: fieldsConfig.maxFieldLength(15)
  },
  region: {
    fieldName: 'Region',
    minLength: fieldsConfig.minFieldLength(2),
    maxLength: fieldsConfig.maxFieldLength(15)
  },
  city: {
    fieldName: 'City',
    minLength: fieldsConfig.minFieldLength(2),
    maxLength: fieldsConfig.maxFieldLength(15)
  }
}

// User data validation

module.exports = {
  username: {
    pattern: fields.username.pattern,

    // Set error message if username is missing (will be handled by regex validation too)
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.username.fieldName),

    // Set error message if username is already used by another user
    uniqueErrorMsg: fieldsConfig.uniqueErrorMsg(fields.username.fieldName),

    // Set user min username length (will be handled by regex validation too)
    minLength: fieldsConfig.minFieldLength(fields.username.minLength),

    // Set error message if username length is less than min length
    minLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.username.fieldName,
        fieldsConfig.minFieldLength(fields.username.minLength))
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

    // Set error message if password is missing (will be handled by regex validation too)
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.password.fieldName),

    // Set password min length (will be handled by regex validation too)
    minLength: fieldsConfig.minFieldLength(fields.password.minLength),

    // Set error message if password length is less than min length
    minLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.password.fieldName,
        fieldsConfig.minFieldLength(fields.password.minLength))
        .minLengthErrorMsg,

    // Set password max length (will be handled by regex validation too)
    maxLength: fieldsConfig.maxFieldLength(fields.password.maxLength),

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
  country: {
    requiredErrorMsg: fieldsConfig.requiredErrorMsg(fields.country.fieldName),

    // Set country min length TODO: Add regex validation
    minLength: fieldsConfig.minFieldLength(fields.country.minLength),

    // Set error message if country length is less than min length
    minLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.country.fieldName,
        fieldsConfig.minFieldLength(fields.country.minLength))
        .minLengthErrorMsg,

    // Set password max length TODO: Add regex validation
    maxLength: fieldsConfig.maxFieldLength(25),

    // Set error message if country length is more than max length
    maxLengthErrorMsg:
      fieldsConfig.lengthErrorMsg(
        fields.country.fieldName,
        fieldsConfig.minFieldLength(fields.country.maxLength))
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