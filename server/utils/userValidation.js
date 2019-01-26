const dataConfiguration = require('../models/modelConfigs/propsModelConfig/user')
const errorMessages =
  require('../models/modelConfigs/fieldsValidations/fieldsConfigurations');

module.exports = (
  { username, password, email },
  existingUsername,
  existingEmail) => {

  if (existingUsername || existingEmail) {
    if (existingUsername && existingEmail) {
      return errorMessages
        .existingUsernameAndEmail(
          existingUsername.username,
          existingUsername.email);
    } else if (existingUsername) {
      return errorMessages
        .existingUsername(existingUsername.username);
    } else if (existingEmail) {
      return errorMessages
        .existingEmail(existingEmail.email);
    }
  }

  if (!username) {
    return errorMessages.requiredErrorMsg(dataConfiguration.username.fieldName);
  }

  if (!dataConfiguration.username.pattern.test(username)) {
    return errorMessages.validUsernameRequirement
  }
  // Finish username

  // Start password
  if (!password) {
    return errorMessages.requiredErrorMsg(dataConfiguration.password.fieldName);
  }

  if (!dataConfiguration.password.pattern.test(password)) {
    return errorMessages.validPasswordRequirment;
  }
  // Finish password

  if (!email) {
    return errorMessages.requiredErrorMsg(dataConfiguration.email.fieldName);
  }

  if (!dataConfiguration.email.pattern.test(email)) {
    return errorMessages.patternErrorMsg(dataConfiguration.email.fieldName);
  }
}