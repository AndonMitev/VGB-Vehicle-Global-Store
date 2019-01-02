const commonPropsValidation =
  require('../models/modelConfigs/commonPropsBetweenModels/commonPropsFields');
const dataConfiguration =
  require('../models/modelConfigs/fieldsValidations/fieldsConfigurations');

module.exports = ({ country, region, city }) => {
  if (!country) {
    return dataConfiguration
      .requiredErrorMsg(commonPropsValidation.country.fieldName);
  }

  if (country.length < commonPropsValidation.country.minLength ||
    country.length > commonPropsValidation.country.maxLength) {
    return dataConfiguration
      .lengthMustBeBetweenErrorMsg(
        commonPropsValidation.country.fieldName,
        commonPropsValidation.country.minLength,
        commonPropsValidation.country.maxLength
      );
  }

  if (!region) {
    return dataConfiguration
      .requiredErrorMsg(commonPropsValidation.region.fieldName);
  }

  if (region.length < commonPropsValidation.region.minLength ||
    region.length > commonPropsValidation.region.maxLength) {
    return dataConfiguration
      .lengthMustBeBetweenErrorMsg(
        commonPropsValidation.region.fieldName,
        commonPropsValidation.region.minLength,
        commonPropsValidation.region.maxLength
      );
  }

  if (!city) {
    return dataConfiguration
      .requiredErrorMsg(commonPropsValidation.city.fieldName);
  }

  if (city.length < commonPropsValidation.city.minLength ||
    city.length > commonPropsValidation.city.maxLength) {
    return dataConfiguration
      .lengthMustBeBetweenErrorMsg(
        commonPropsValidation.city.fieldName,
        commonPropsValidation.city.minLength,
        commonPropsValidation.city.maxLength
      );
  }
}