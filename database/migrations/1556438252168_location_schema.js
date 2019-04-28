'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocationSchema extends Schema {
  up () {
    this.create('locations', (table) => {
      table.increments()
      table.string("name").notNullable()
      table.string("description").notNullable()
      table.string("address").notNullable()
      table.string("thumbnail").notNullable()
      table.float("latitude").notNullable()
      table.float("longitude").notNullable()
      table.integer("price_min").notNullable()
      table.integer("price_max").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('locations')
  }
}

module.exports = LocationSchema
