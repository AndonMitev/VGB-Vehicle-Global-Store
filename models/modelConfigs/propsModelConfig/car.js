const commonFieldsModel = require('../commonPropsBetweenModels/commonPropsFields');
const fieldsConfigs = require('../fieldsValidations/fieldsConfigurations');

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
    engineValidTypes: ['Gasoline', 'Diesel', 'Electric', 'Hybrid']
  },
  condition: {
    conditionValidTypes: ['New', 'Used', 'For parts']
  },
  horsePower: {
    fieldName: 'Horse Powers',
    minValue: fieldsConfigs.minNumberValue(2),
    maxValue: fieldsConfigs.maxNumberValue(200),
  },
  euroStandarts: {
    euroStandartsValidTypes: ['Euro 1', 'Euro 2', 'Euro 3', 'Euro 4', 'Euro 5', 'Euro 6']
  },
  transmission: {
    fieldName: 'Transmission',
    transmissionValidTypes: ['Manual', 'Automatic', 'Semi-automatic']
  },
  category: {
    fieldName: 'Category',
    categoryValidTypes: ['Van', 'Jeep', 'Combi', 'Coupe', 'Minivan', 'Pickup', 'Sedan', 'Stretch-limousine', 'Hatchback']
  },
  price: {
    fieldName: 'Price',
    pattern: /[1-9]{1}[0-9]+/,
    minPrice: fieldsConfigs.minNumberValue(10)
  },
  currency: {
    fieldName: 'Currency',
    default: 'USD'
  },
  monthOfManufacture: {
    fieldName: 'Month',
    monthOfManufactureValidTypes: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  yearOfManufacture: {
    fieldName: 'Year',
    minAllowedYear: fieldsConfigs.minNumberValue(1930),
    maxAllowedYear: fieldsConfigs.maxNumberValue(2019)
  },
  milleage: {
    fieldName: 'Milleage'
  },
  color: {
    validColorTypes: ['dark-blue', 'banana', 'beata', 'beige', 'burgundy', 'bronze', 'white', 'wine', 'violet', 'cherry', 'graphite', 'yellow', 'green', 'golden', 'brown', 'ceramid', 'creamy', 'purple', 'metallic', 'orange', 'ocher', 'ash', 'pearl', 'sandstone', 'pink', 'sahara', 'light gray', 'light blue', 'gray', 'blue', 'ivory', 'silver', 'dark green', 'dark gray', 'dark red', 'tobacco', 'chameleon', 'red', 'black']
  },
  ...commonFieldsModel,
  safety: {
    validSafetyTypes: ['GPS', 'Automatic Stability Control', 'Adaptive headlights', 'Anti-blocking system', 'Airbags rear', 'Airbags front', 'Airbags sideways', 'Electric brake force distribution', 'Electronic stabilizaton program', 'Tire pressure control', 'Parrotron', 'ISOFIX system', 'Stability system', 'Anti-burglary protection system', 'Padding system for drying', 'Distance control system', 'Drop control system', 'Brake assist system']
  },
  comfort: {
    validComfortTypes: ['Auto Start Stop function', 'Bluetooth / handsfree', 'DVD, TV', 'Steptronic, Tiptronic', 'USB, audio/video, IN/AUX outputs', 'Airmatic', 'Keyless Ignition', 'Differential lock', 'Bordcomputer', 'Fast / slow shifts', 'Light sensor', 'Electronic mirrors', 'Electronic windows', 'Electronic suspension adjustment', 'Electronic seat adjustment', 'Electronic steering wheel amplifer', 'Air condition', 'Climatronic', 'Multifunctional steering wheel', 'Navigation', 'Heating the steering wheel', 'Warming the windscreen', 'Seat heating', 'Adjusting the steering wheel', 'Rain sensor', 'Servo steering wheel amplifer', 'Headlamp wash system', 'Cruise control', 'Stereo', 'Filter for hard particles', 'Cooling glovebox']
  },
  others: {
    validOtherTypes: ['4x4', '7 seats', 'Buy back', 'Gas system', 'Long base', 'Short base', 'Covered / Sold', 'Crashed', , 'Leasing', 'Methane setup', 'On parts', 'Fully surved', 'New importation', 'With the right to tax', 'With registration', 'Service book', 'Tuning']
  },
  exterior: {
    validExteriorTypes: ['2(3) Doors', '4(5) Doors', 'LED headlights', 'Xenon headlights', 'Alloy wheels', 'Metalic', 'Heated wipers', 'Panoramic sunroof', 'Riding on the roof', 'Rolls', 'Spoilers', 'Drawbar', 'Halogen headlights', 'Shibadah']
  },
  protection: {
    validProtectionTypes: ['OFROAD package', 'Alarm system', 'Armored', 'Immobilizer', 'Winch', 'Reinforced glass', 'Central locking']
  },
  interior: {
    validInteriorTypes: ['Suede salon', 'Right hand drive', 'Leather salon']
  },
  specialized: {
    validSpecializedTypes: ['TAXI', 'For people with disabilities', 'Hearing', 'Ambulance', 'Learning', 'Refrigerated', 'Homologation N1']
  }
}