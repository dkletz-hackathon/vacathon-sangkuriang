'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocationCategorySchema extends Schema {
  up () {
    this.create('location_categories', (table) => {
      table.increments()
      table.integer("location_id").unsigned()
      table.string("category_name").notNullable()
      table.string("url_image")
      table.integer("value").unsigned()
      table.integer("category_id").unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('location_categories')
  }
}

module.exports = LocationCategorySchema
