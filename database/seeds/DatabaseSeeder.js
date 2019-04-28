'use strict'

const UserSeeder = use('./seeders/UserSeeder')
const CategorySeeder  = use('./seeders/CategorySeeder')
const TypeLocationSeeder = use('./seeders/TypeLocationSeeder')
const LocationSeeder = use('./seeders/LocationSeeder')

class DatabaseSeeder {
  async run () {
    await (new CategorySeeder()).run()
    await (new UserSeeder()).run()
    await (new TypeLocationSeeder()).run()
    await (new LocationSeeder()).run()
  }
}

module.exports = DatabaseSeeder
