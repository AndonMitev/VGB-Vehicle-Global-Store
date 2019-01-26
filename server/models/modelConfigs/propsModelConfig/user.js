const commonFieldsModel = require('../commonPropsBetweenModels/commonPropsFields');
const fieldsConfig = require('../fieldsValidations/fieldsConfigurations');

module.exports = {
  username: {
    fieldName: 'Username',
    minLength: fieldsConfig.minFieldLength(3),
    maxLength: fieldsConfig.maxFieldLength(15),
    pattern: /[\w]+/
  },
  email: {
    fieldName: 'Email',
    pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  },
  password: {
    fieldName: 'Password',
    minLength: fieldsConfig.minFieldLength(3),
    maxLength: fieldsConfig.maxFieldLength(15),
    pattern: /[\w]+/
  },
  roles: {
    validRoleTypes: ['Client', 'Manager', 'Admin'],
    default: 'Client'
  },
  ...commonFieldsModel
}