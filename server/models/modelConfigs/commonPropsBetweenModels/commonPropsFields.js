const fieldsConfig = require('../fieldsValidations/fieldsConfigurations');

module.exports = {
  country: {
    fieldName: 'Country',
    minLength: fieldsConfig.minFieldLength(2),
    maxLength: fieldsConfig.maxFieldLength(20)
  },
  region: {
    fieldName: 'Region',
    minLength: fieldsConfig.minFieldLength(2),
    maxLength: fieldsConfig.maxFieldLength(20)
  },
  city: {
    fieldName: 'City',
    minLength: fieldsConfig.minFieldLength(2),
    maxLength: fieldsConfig.maxFieldLength(20)
  }
}