'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocationImageSchema extends Schema {
  up () {
    this.create('location_images', (table) => {
      table.increments()
      table.string("description")
      table.string("url_image")
      table.integer("location_id").unsigned()
      table.foreign("location_id")
        .references("locations.id")
        .onDelete("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('location_images')
  }
}

module.exports = LocationImageSchema
