const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    email: 'admin@admin.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    role: 'admin',
    firstName: 'Super',
    lastName: 'Administrator',
    age: 22,
    gender: 'man',
    zipCode: '123456',
    profession: 'test',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148f',
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    email: 'user@user.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    role: 'user',
    firstName: 'Simple',
    lastName: 'user',
    age: 22,
    gender: 'woman',
    zipCode: '123456',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148d',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]
