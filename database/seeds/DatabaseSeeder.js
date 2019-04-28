'use strict'

const UserSeeder = use('./seeders/UserSeeder')
const CategorySeeder  = use('./seeders/CategorySeeder')

class DatabaseSeeder {
  async run () {
    await (new CategorySeeder()).run()
    await (new UserSeeder()).run()
  }
}

module.exports = DatabaseSeeder
