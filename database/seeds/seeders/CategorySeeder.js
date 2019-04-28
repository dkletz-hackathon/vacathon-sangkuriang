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
const Category = use('App/Models/Category')

class CategorySeeder {

  async run () {
    const datas = [
      "foto", "jalan-jalan", "lari", "hiking", "kuliner", "belajar"
      "vlog", "histori", "belanja", "berenang", "co-working"
    ]
    for (const data of datas) {
      const category = new Category()
      category.name = data
      await category.save()
    }
  }

}

module.exports = CategorySeeder
