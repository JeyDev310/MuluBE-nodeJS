const uuid = require('uuid')
const User = require('../../../models/user')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createItemInDb = ({
  email = '',
  password = '',
  firstName = '',
  lastName = '',
  age = '',
  gender = '',
  zipCode = '',
  profession = '' | null
}) => {
  return new Promise((resolve, reject) => {
    const user = new User({
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
      zipCode,
      profession?: string,
      role,
      verification: uuid.v4(),
    })
    user.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }

      item = JSON.parse(JSON.stringify(item))

      delete item.password
      delete item.blockExpires
      delete item.loginAttempts

      resolve(item)
    })
  })
}

module.exports = { createItemInDb }
