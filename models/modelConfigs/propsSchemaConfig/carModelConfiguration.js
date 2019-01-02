const commonSchemaModel = require('../commonPropsBetweenModels/commonPropsSchema')
const fieldsConfigs = require('../fieldsValidations/fieldsConfigurations');
const fields = require('../propsModelConfig/car');

module.exports = {
  brand: {
    requiredErrorMsg: fieldsConfigs.requiredErrorMsg(fields.brand.fieldName),

    minLength: fields.brand.minLength,

    minLengthErrorMsg: fieldsConfigs.lengthErrorMsg(
      fields.brand.fieldName,
      fields.brand.minLength
    ).minLengthErrorMsg,

    maxLength: fields.brand.maxLength,

    maxLengthErrorMsg: fieldsConfigs.lengthErrorMsg(
      fields.brand.fieldName,
      fields.brand.maxLength
    ).maxLengthErrorMsg
  },
  model: {
    requiredErrorMsg: fieldsConfigs.requiredErrorMsg(fields.model.fieldName),

    minLength: fields.model.minLength,

    minLengthErrorMsg: fieldsConfigs.lengthErrorMsg(
      fields.model.fieldName,
      fields.model.minLength
    ).minLengthErrorMsg,

    maxLength: fields.model.maxLength,

    maxLengthErrorMsg: fieldsConfigs.lengthErrorMsg(
      fields.model.fieldName,
      fields.model.maxLength
    ).maxLengthErrorMsg
  },
  modification: {
    minLength: fields.modification.minLength,

    minLengthErrorMsg: fieldsConfigs.lengthErrorMsg(
      fields.modification.fieldName,
      fields.modification.minLength
    ).minLengthErrorMsg,

    maxLength: fields.modification.maxLength,

    maxLengthErrorMsg: fieldsConfigs.lengthErrorMsg(
      fields.modification.fieldName,
      fields.modification.maxLength
    ).maxLengthErrorMsg
  },
  engine: {
    requiredErrorMsg: fields.engine.fieldName,
    validEngines: [...fields.engine.engineValidTypes]
  },
  condition: {
    validConditions: [...fields.condition.conditionValidTypes]
  },
  horsePower: {
    minValue: fields.horsePower.minValue,

    minValueErrorMsg: fieldsConfigs.numberErrorMsg(
      fields.horsePower.fieldName,
      fields.horsePower.minValue
    ).minAllowedNumber,

    maxValue: fields.horsePower.maxValue,

    maxValueErrorMsg: fieldsConfigs.numberErrorMsg(
      fields.horsePower.fieldName,
      fields.horsePower.maxValue
    ).maxAllowedNumber
  },
  euroStrandarts: {
    validEuroStrandarts: [...fields.euroStandarts.euroStandartsValidTypes]
  },
  transmission: {
    requiredErrorMsg: fieldsConfigs.requiredErrorMsg(fields.transmission.fieldName),
    validTransmissions: [...fields.transmission.transmissionValidTypes]
  },
  category: {
    requiredErrorMsg: fieldsConfigs.requiredErrorMsg(fields.category.fieldName),
    validCategories: [...fields.category.categoryValidTypes]
  },
  price: {
    requiredErrorMsg: fieldsConfigs.requiredErrorMsg(fields.price.fieldName),

    pattern: fields.price.pattern,

    minPrice: fields.price.minPrice,

    minPriceErrorMsg: fieldsConfigs.numberErrorMsg(
      fields.price.fieldName,
      fields.price.minPrice
    ) + ' USD',

    failPatternErrorMsg: fieldsConfigs.patternErrorMsg(fields.price.fieldName)
  },
  currency: {
    requiredErrormsg: fieldsConfigs.requiredErrorMsg(fields.currency.fieldName),
    default: fields.currency.default
  },
  monthOfManufacture: {
    requiredErrorMsg: fieldsConfigs
      .requiredErrorMsg(fields.monthOfManufacture.fieldName),

    validMonths: [...fields.monthOfManufacture.monthOfManufactureValidTypes]
  },
  yearOfManufacture: {
    requiredErrorMsg: fieldsConfigs
      .requiredErrorMsg(fields.yearOfManufacture.fieldName),

    minYear: fields.yearOfManufacture.minAllowedYear,

    minAllowedYearErrorMsg: fieldsConfigs.numberErrorMsg(
      fields.yearOfManufacture.fieldName,
      fields.yearOfManufacture.minAllowedYear
    ).minAllowedNumber,

    maxYear: fields.yearOfManufacture.maxAllowedYear,

    maxAllowedYearErrorMsg: fieldsConfigs.numberErrorMsg(
      fields.yearOfManufacture.fieldName,
      fields.yearOfManufacture.maxAllowedYear
    ).maxAllowedYear
  },
  mileage: {
    required: fieldsConfigs.requiredErrorMsg(fields.milleage.fieldName)
  },
  color: {
    validColors: [...fields.color.validColorTypes]
  },
  ...commonSchemaModel,
  safety: {
    validSafetyTypes: [...fields.safety.validSafetyTypes]
  },
  comfort: {
    validComfortTypes: [...fields.comfort.validComfortTypes]
  },
  others: {
    validOtherTypes: [...fields.others.validOtherTypes]
  },
  exterior: {
    validExteriorTypes: [...fields.exterior.validExteriorTypes]
  },
  protection: {
    validProtectionTypes: [...fields.protection.validProtectionTypes]
  },
  interior: {
    validInteriorTypes: [...fields.interior.validInteriorTypes]
  },
  specialized: {
    validSpecializedTypes: [...fields.specialized.validSpecializedTypes]
  }
}