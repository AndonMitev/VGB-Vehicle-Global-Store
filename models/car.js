const mongoose = require('mongoose');
const carConfig = require('./modelConfigs/propsSchemaConfig/carModelConfiguration');
const schema = mongoose.Schema;

const CarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, carConfig.brand.requiredErrorMsg],
    minlength: [carConfig.brand.minLength, carConfig.brand.minLengthErrorMsg],
    maxlength: [carConfig.brand.maxLength, carConfig.brand.maxLengthErrorMsg],
  },
  model: {
    type: String,
    required: [true, carConfig.model.requiredErrorMsg],
    minlength: [carConfig.model.minLength, carConfig.model.minLengthErrorMsg],
    maxlength: [carConfig.model.maxLength, carConfig.model.maxLengthErrorMsg],
  },
  modification: {
    type: String,
    minlength: [
      carConfig.modification.minLength,
      carConfig.modification.minLengthErrorMsg
    ],
    maxlength: [
      carConfig.modification.maxLength,
      carConfig.modification.maxLengthErrorMsg
    ],
  },
  engine: {
    type: String,
    required: [true, carConfig.engine.requiredErrorMsg],
    enum: [...carConfig.engine.validEngines]
  },
  condition: {
    type: String,
    enum: [...carConfig.condition.validConditions]
  },
  horsePower: {
    type: Number,
    min: [
      carConfig.horsePower.minHorsePower,
      carConfig.horsePower.minHorsePowerErrorMsg
    ],
    max: [
      carConfig.horsePower.maxHorsePower,
      carConfig.horsePower.maxHorsePowerErrorMsg
    ],
  },
  euroStandart: {
    type: String,
    enum: [...carConfig.euroStrandarts.validEuroStrandarts]
  },
  transmission: {
    type: String,
    required: [true, carConfig.transmission.requiredErrorMsg],
    enum: [...carConfig.transmission.validTransmissions]
  },
  category: {
    type: String,
    required: [true, carConfig.category.requiredErrorMsg],
    enum: [...carConfig.category.validCategories]
  },
  price: {
    type: Number,
    required: [true, carConfig.price.requiredErrorMsg],
    min: [carConfig.price.minPrice, carConfig.price.minPriceErrorMsg],
    validate: [carConfig.price.pattern, carConfig.price.failPatternErrorMsg]
  },
  currency: {
    type: String,
    required: [true, carConfig.currency.requiredErrormsg],
    default: carConfig.currency.default
  },
  monthOfManufacture: {
    type: String,
    required: [true, carConfig.monthOfManufacture.requiredErrorMsg],
    enum: [...carConfig.monthOfManufacture.validMonths]
  },
  yearOfManufacture: {
    type: Number,
    required: [true, carConfig.yearOfManufacture.requiredErrorMsg],
    min: [
      carConfig.yearOfManufacture.minYear,
      carConfig.yearOfManufacture.minAllowedYearErrorMsg
    ],
    max: [
      carConfig.yearOfManufacture.maxYear,
      carConfig.yearOfManufacture.maxAllowedYearErrorMsg
    ]
  },
  mileage: {
    type: Number,
    required: [true, carConfig.mileage.required],
  },
  color: {
    type: String,
    enum: [...carConfig.color.validColors]
  },
  country: {
    type: String,
    required: [true, carConfig.country.requiredErrorMsg],
    minlength: [
      carConfig.country.minLength,
      carConfig.country.minLengthErrorMsg
    ],
    maxlength: [
      carConfig.country.maxlength,
      carConfig.country.maxLengthErrorMsg
    ]
  },
  region: {
    type: String,
    required: [true, carConfig.region.requiredErrorMsg],
    minlength: [
      carConfig.region.minLength,
      carConfig.region.minLengthErrorMsg
    ],
    maxlength: [
      carConfig.region.maxlength,
      carConfig.region.maxLengthErrorMsg
    ]
  },
  city: {
    type: String,
    required: [true, carConfig.city.requiredErrorMsg],
    minlength: [
      carConfig.city.minLength,
      carConfig.city.minLengthErrorMsg
    ],
    maxlength: [
      carConfig.city.maxlength,
      carConfig.city.maxLengthErrorMsg
    ]
  },
  safety: {
    type: [String],
    enum: [...carConfig.safety.validSafetyTypes]
  },
  comfort: {
    type: [String],
    enum: [...carConfig.comfort.validComfortTypes]
  },
  others: {
    type: [String],
    enum: [...carConfig.others.validOtherTypes]
  },
  exterior: {
    type: [String],
    enum: [...carConfig.exterior.validExteriorTypes]
  },
  protection: {
    type: [String],
    enum: [...carConfig.protection.validProtectionTypes]
  },
  interior: {
    type: [String],
    enum: [...carConfig.interior.validInteriorTypes]
  },
  specialized: {
    type: [String],
    enum: [...carConfig.specialized.validSpecializedTypes]
  },
  createdBy: {
    type: schema.Types.ObjectId,
    ref: 'User',
    required: [true]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;