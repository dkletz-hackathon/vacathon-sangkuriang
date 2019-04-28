'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', async (facker) => {
  const email = facker.email({ domain: "indite.com" })
  return {
    username: facker.username(),
    password: '12345678',
    email: email,
    full_name: facker.name(),
    information: facker.sentence(),
    contact: email
  }
})

class UserSeeder {

  async run () {
    const users = await Factory
      .model('App/Models/User')
      .createMany(5)
  }

}

module.exports = UserSeeder
