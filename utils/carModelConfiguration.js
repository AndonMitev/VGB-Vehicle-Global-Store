module.exports = {
  brand: {
    requiredErrorMsg: 'Brand is required',
    minLength: 1,
    minLengthErrorMsg: 'Min length must be at least 1 symbol long',
    maxLength: 52,
    maxLengthErrorMsg: 'Max length is 52 symbols long'
  },
  model: {
    requiredErrorMsg: 'Model is required',
    minLength: 1,
    minLengthErrorMsg: 'Min length must be at least 1 symbol long',
    maxLength: 52,
    maxLengthErrorMsg: 'Max length is 52 symbols long'
  },
  modification: {
    minLength: 12,
    minLengthErrorMsg: 'Min length must be at least 12 symbol long',
    maxLength: 256,
    maxLengthErrorMsg: 'Max length is 256 symbols long'
  },
  engine: {
    requiredErrorMsg: 'Engine is required',
    validEngines: ['Gasoline', 'Diesel', 'Electric', 'Hybrid']
  },
  condition: {
    validConditions: ['New', 'Used', 'For parts']
  },
  horsePower: {
    minHorsePower: 2,
    minHorsePowerErrorMsg: 'Vehicle need to have at least 2 horse powers',
    maxHorsePower: 2000,
    maxHorsePowerErrorMsg: 'Vehicle allowed horse powers are up to 2000'
  },
  euroStrandarts: {
    validEuroStrandarts: ['Euro 1', 'Euro 2', 'Euro 3', 'Euro 4', 'Euro 5', 'Euro 6']
  },
  transmission: {
    requiredErrorMsg: 'Transmission is required',
    validTransmissions: ['Manual', 'Automatic', 'Semi-automatic']
  },
  category: {
    requiredErrorMsg: 'Category is required',
    validCategories: ['Van', 'Jeep', 'Combi', 'Coupe', 'Minivan', 'Pickup', 'Sedan', 'Stretch-limousine', 'Hatchback']
  },
  price: {
    requiredErrorMsg: 'Price is required',
    pattern: /[1-9]{1}[0-9]+/,
    minPrice: 10,
    minPriceErrorMsg: 'Price cannot be less than 10 USD',
    failPatternErrorMsg: 'Enter valid price'
  },
  currency: {
    requiredErrormsg: 'Currency is required',
    default: 'USD'
  },
  monthOfManufacture: {
    requiredErrorMsg: 'Month of manufacture is required',
    validMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  yearOfManufacture: {
    requiredErrorMsg: 'Year of manufacture is required',
    minYear: 1930,
    minAllowedYearErrorMsg: 'Min allowed year is 1930',
    maxYear: 2019,
    maxAllowedYearErrorMsg: 'Max allowed year is 2019'
  },
  mileage: {
    required: 'Milleage is required'
  },
  color: {
    validColors: ['dark-blue', 'banana', 'beata', 'beige', 'burgundy', 'bronze', 'white', 'wine', 'violet', 'cherry', 'graphite', 'yellow', 'green', 'golden', 'brown', 'ceramid', 'creamy', 'purple', 'metallic', 'orange', 'ocher', 'ash', 'pearl', 'sandstone', 'pink', 'sahara', 'light gray', 'light blue', 'gray', 'blue', 'ivory', 'silver', 'dark green', 'dark gray', 'dark red', 'tobacco', 'chameleon', 'red', 'black']
  },
  region: {
    requiredErrorMsg: 'Region is required',
    minLength: 2,
    minLengthErrorMsg: 'Enter at least 2 symbols for valid region',
    maxLength: 20,
    maxLengthErrorMsg: 'Enter less than 20 symbol for valid region'
  },
  populatedPlace: {
    requiredErrorMsg: 'Populated place is required',
    minLength: 2,
    minLengthErrorMsg: 'Enter at least 2 symbols for valid populated place',
    maxLength: 20,
    maxLengthErrorMsg: 'Enter less than 20 symbol for valid populated place'
  },
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