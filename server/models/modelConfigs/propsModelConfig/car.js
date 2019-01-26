const commonFieldsModel = require('../commonPropsBetweenModels/commonPropsFields');
const fieldsConfigs = require('../fieldsValidations/fieldsConfigurations');
const carProps = require('./carProps');



module.exports = {
  brand: {
    fieldName: 'Brand',
    minLength: fieldsConfigs.minFieldLength(1),
    maxLength: fieldsConfigs.maxFieldLength(52)
  },
  model: {
    fieldName: 'Model',
    minLength: fieldsConfigs.minFieldLength(1),
    maxLength: fieldsConfigs.maxFieldLength(52)
  },
  modification: {
    fieldName: 'Modification',
    minLength: fieldsConfigs.minFieldLength(12),
    maxLength: fieldsConfigs.maxFieldLength(256)
  },
  engine: {
    fieldName: 'Engine',
    engineValidTypes: [...carProps.engineTypes]
  },
  condition: {
    fieldName: 'Condition',
    conditionValidTypes: [...carProps.conditionTypes]
  },
  horsePower: {
    fieldName: 'Horse Powers',
    minValue: fieldsConfigs.minNumberValue(2),
    maxValue: fieldsConfigs.maxNumberValue(200),
  },
  euroStandarts: {
    fieldName: 'Euro Standart',
    euroStandartsValidTypes: [...carProps.euroStandartsTypes]
  },
  transmission: {
    fieldName: 'Transmission',
    transmissionValidTypes: [...carProps.transmissionTypes]
  },
  category: {
    fieldName: 'Category',
    categoryValidTypes: [...carProps.categoryTypes]
  },
  price: {
    fieldName: 'Price',
    pattern: /[1-9]{1}[0-9]+/,
    minPrice: fieldsConfigs.minNumberValue(10)
  },
  currency: {
    fieldName: 'Currency',
    default: 'USD',
    validCurrencyTypes: ['USD']
  },
  monthOfManufacture: {
    fieldName: 'Month',
    monthOfManufactureValidTypes: [...carProps.monthTypes]
  },
  yearOfManufacture: {
    fieldName: 'Year',
    minAllowedYear: fieldsConfigs.minNumberValue(1930),
    maxAllowedYear: fieldsConfigs.maxNumberValue(2019)
  },
  mileage: {
    fieldName: 'Mileage',
    minMileage: fieldsConfigs.minNumberValue(0)
  },
  color: {
    fieldName: 'Color',
    validColorTypes: [...carProps.colorTypes]
  },
  ...commonFieldsModel,
  safety: {
    fieldName: 'Safety',
    validSafetyTypes: [...carProps.safetyTypes]
  },
  comfort: {
    fieldName: 'Comfort',
    validComfortTypes: [...carProps.comfortTypes]
  },
  others: {
    fieldName: 'Others',
    validOtherTypes: [...carProps.otherTypes]
  },
  exterior: {
    fieldName: 'Exterior',
    validExteriorTypes: [...carProps.exteriorTypes]
  },
  protection: {
    fieldName: 'Protection',
    validProtectionTypes: [...carProps.protectionTypes]
  },
  interior: {
    fieldName: 'Interior',
    validInteriorTypes: [...carProps.interiorTypes]
  },
  specialized: {
    fieldName: 'Specialized',
    validSpecializedTypes: [...carProps.specializedTypes]
  }
}