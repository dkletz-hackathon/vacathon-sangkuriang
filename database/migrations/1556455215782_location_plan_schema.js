'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocationPlanSchema extends Schema {
  up () {
    this.create('location_plans', (table) => {
      table.increments()
      table.integer("location_id").unsigned()
      table.foreign("location_id")
        .references("locations.id")
        .onDelete("cascade")
      table.integer("travel_plan_id").unsigned()
      table.foreign("travel_plan_id")
        .references("travel_plans.id")
        .onDelete("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('location_plans')
  }
}

module.exports = LocationPlanSchema
