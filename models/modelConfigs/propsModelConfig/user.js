const commonFieldsModel = require('../commonPropsBetweenModels/commonPropsFields');
const fieldsConfig = require('../fieldsValidations/fieldsConfigurations');

module.exports = {
  username: {
    fieldName: 'Username',
    minLength: fieldsConfig.minFieldLength(3),
    maxLength: fieldsConfig.maxFieldLength(15),
    pattern: /^[A-Z]{1}[a-z]{1,}[0-9]{1}$/
  },
  email: {
    fieldName: 'Email',
    pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  },
  password: {
    fieldName: 'Password',
    minLength: fieldsConfig.minFieldLength(7),
    maxLength: fieldsConfig.maxFieldLength(16),
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/
  },
  roles: {
    validRoleTypes: ['Client', 'Manager', 'Admin'],
    default: 'Client'
  },
  ...commonFieldsModel
}