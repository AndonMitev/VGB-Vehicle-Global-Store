const dataConfiguration = require('../../models/modelConfigs/propsModelConfig/car');
const errorMessages =
  require('../../models/modelConfigs/fieldsValidations/fieldsConfigurations');
const carValidProps = require('../../models/modelConfigs/propsModelConfig/car');

module.exports = clientRequestBody => {
  const {
    brand,
    model,
    modification,
    engine,
    condition,
    horsePower,
    euroStandart,
    transmission,
    category,
    price,
    currency,
    monthOfManufacture,
    yearOfManufacture,
    mileage,
    color,
    safety,
    comfort,
    others: other,
    exterior,
    protection,
    interior,
    specialized
  } = clientRequestBody;

  // Start Brand
  if (!brand) {
    return errorMessages.requiredErrorMsg(dataConfiguration.brand.fieldName);
  }

  if (brand.length < dataConfiguration.brand.minLength ||
    brand.length > dataConfiguration.brand.maxLength) {
    return errorMessages.lengthMustBeBetweenErrorMsg(
      dataConfiguration.brand.fieldName,
      dataConfiguration.brand.minLength,
      dataConfiguration.brand.maxLength
    )
  }

  // End Brand

  // Start Model

  if (!model) {
    return errorMessages.requiredErrorMsg(dataConfiguration.model.fieldName);
  }

  if (model.length < dataConfiguration.model.minLength ||
    model.length > dataConfiguration.model.maxLength) {
    return errorMessages.lengthMustBeBetweenErrorMsg(
      dataConfiguration.model.fieldName,
      dataConfiguration.model.minLength,
      dataConfiguration.model.maxLength
    )
  }

  // End MOdel

  // Start Engine

  if (!engine) {
    return errorMessages.requiredErrorMsg(dataConfiguration.engine.fieldName);
  }

  if (!carValidProps.engine.engineValidTypes
    .filter(eng =>
      eng.toLowerCase() === engine.toLowerCase()).length) {
    return errorMessages.patternErrorMsg(dataConfiguration.engine.fieldName);
  }

  // End engine

  // Start Transmission

  if (!transmission) {
    return errorMessages.requiredErrorMsg(dataConfiguration.transmission.fieldName);
  }

  if (!carValidProps.transmission.transmissionValidTypes
    .filter(trans =>
      trans.toLowerCase() === transmission.toLowerCase()).length) {
    return errorMessages.patternErrorMsg(dataConfiguration.transmission.fieldName);
  }

  // End Transsmision

  // Start Category

  if (!category) {
    return errorMessages.requiredErrorMsg(dataConfiguration.category.fieldName);
  }

  if (!carValidProps.category.categoryValidTypes
    .filter(cat =>
      cat.toLowerCase() === category.toLowerCase()).length) {
    return errorMessages.patternErrorMsg(dataConfiguration.category.fieldName);
  }

  // End Category

  // Start Price

  if (!price) {
    return errorMessages.requiredErrorMsg(dataConfiguration.price.fieldName);
  }

  // DO it better make sure is a number
  if (isNaN(price)) {
    return errorMessages.patternErrorMsg(dataConfiguration.price.fieldName);
  }

  if (+price < carValidProps.price.minPrice) {
    return errorMessages
      .numberErrorMsg(
        dataConfiguration.price.fieldName,
        dataConfiguration.price.minPrice)
      .minAllowedNumber + ' ' + dataConfiguration.currency.default;
  }

  // End Price

  // Start Currency
  if (!currency) {
    return errorMessages.requiredErrorMsg(dataConfiguration.currency.fieldName);
  }

  if (!dataConfiguration.currency.validCurrencyTypes
    .filter(cur =>
      cur.toLowerCase() === currency.toLowerCase()).length) {
    return errorMessages.patternErrorMsg(
      dataConfiguration.currency.fieldName
    );
  }

  // End Currency

  // Start Month of manufacturer
  if (!monthOfManufacture) {
    return errorMessages
      .requiredErrorMsg(dataConfiguration.monthOfManufacture.fieldName);
  }

  if (!carValidProps.monthOfManufacture.monthOfManufactureValidTypes
    .filter(month =>
      month.toLowerCase() === monthOfManufacture.toLowerCase()).length) {
    return errorMessages
      .patternErrorMsg(dataConfiguration.monthOfManufacture.fieldName);
  }

  // End Month of manufacturer

  // Start Year of manufacturer

  if (!yearOfManufacture) {
    return errorMessages
      .requiredErrorMsg(dataConfiguration.yearOfManufacture.fieldName);
  }
  
  if (isNaN(yearOfManufacture) ||
    Number.isInteger(yearOfManufacture) ||
    +yearOfManufacture < dataConfiguration.yearOfManufacture.minAllowedYear ||
    +yearOfManufacture > dataConfiguration.yearOfManufacture.maxAllowedYear) {
    return errorMessages.numberInterval(
      dataConfiguration.yearOfManufacture.fieldName,
      dataConfiguration.yearOfManufacture.minAllowedYear,
      dataConfiguration.yearOfManufacture.maxAllowedYear
    );
  }

  // End Year of manufacturer

  // Start Mileage

  if (!mileage) {
    return errorMessages.requiredErrorMsg(dataConfiguration.mileage.fieldName);
  }

  if (isNaN(mileage) ||
    !Number.isInteger(+mileage) ||
    +mileage < dataConfiguration.mileage.minMileage) {
    return errorMessages.patternErrorMsg(dataConfiguration.mileage.fieldName);
  }

  // End Mileage

  // Start Modification

  if (modification) {
    if (modification.length < dataConfiguration.modification.minLength ||
      modification.length > dataConfiguration.modification.maxLength) {
      return errorMessages.lengthMustBeBetweenErrorMsg(
        dataConfiguration.modification.fieldName,
        dataConfiguration.modification.minLength,
        dataConfiguration.modification.maxLength,
      )
    }
  }

  // End Modification

  // Start Condition

  if (condition) {
    if (!dataConfiguration.condition.conditionValidTypes
      .filter(condition =>
        condition.toLowerCase() === condition.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.condition.fieldName
      );
    }
  }

  // End Condition

  // Start Horse power

  if (horsePower) {
    if (isNaN(horsePower) ||
      !Number.isInteger(+horsePower) ||
      horsePower < dataConfiguration.horsePower.minValue ||
      horsePower > dataConfiguration.horsePower.maxValue) {
      return errorMessages.numberInterval(
        dataConfiguration.horsePower.fieldName,
        dataConfiguration.horsePower.minValue,
        dataConfiguration.horsePower.maxValue
      );
    }
  }

  // End horsePower

  // Start EuroStandart

  if (euroStandart) {
    if (!dataConfiguration.euroStandarts.euroStandartsValidTypes
      .filter(standart =>
        standart.toLowerCase() === euroStandart.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.euroStandarts.fieldName
      );
    }
  }

  // End EuroStandart <= fix it later

  if (color) {
    if (!dataConfiguration.color.validColorTypes
      .filter(clr => clr.toLowerCase() === color.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.color.fieldName
      );
    }
  }

  // Start SAfety

  if (safety) {
    if (!dataConfiguration.safety.validSafetyTypes
      .filter(safe =>
        safe.toLowerCase() === safety.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.safety.fieldName
      );
    }
  }

  // End safety

  // Start Comfort

  if (comfort) {
    if (!dataConfiguration.comfort.validComfortTypes
      .filter(cfr =>
        cfr.toLowerCase() === comfort.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.comfort.fieldName
      );
    }
  }

  // End Comfort

  // Start other

  if (other) {
    if (!dataConfiguration.others.validOtherTypes
      .filter(oth =>
        oth.toLowerCase() === other.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.others.fieldName
      );
    }
  }

  // End Other

  // Start exterior

  if (exterior) {
    if (!dataConfiguration.exterior.validExteriorTypes
      .filter(ext =>
        ext.toLowerCase() === exterior.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.exterior.fieldName
      );
    }
  }

  // End exterior

  // Start Protection

  if (protection) {
    if (!dataConfiguration.protection.validProtectionTypes
      .filter(prt =>
        prt.toLowerCase() === protection.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.protection.fieldName
      );
    }
  }

  // End protection

  // Start Interior

  if (interior) {
    if (!dataConfiguration.interior.validInteriorTypes
      .filter(itr =>
        itr.toLowerCase() === interior.toLowerCase())) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.interior.fieldName
      );
    }
  }

  // End interior

  // Start specialized

  if (specialized) {
    if (!dataConfiguration.specialized.validSpecializedTypes
      .filter(spec =>
        spec.toLowerCase() === specialized.toLowerCase()).length) {
      return errorMessages.patternErrorMsg(
        dataConfiguration.specialized.fieldName
      );
    }
  }

  // End specialized
}