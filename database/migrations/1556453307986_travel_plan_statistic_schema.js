'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TravelPlanStatisticSchema extends Schema {
  up () {
    this.create('travel_plan_statistics', (table) => {
      table.increments()
      table.integer("rating_value").notNullable().defaultTo(0)
      table.integer("total_rating").notNullable().defaultTo(0)
      table.integer("total_view").notNullable().defaultTo(0)
      table.integer("total_shared").notNullable().defaultTo(0)
      table.integer("travel_plan_id").unsigned()
      table.foreign("travel_plan_id")
        .references("travel_plans.id")
        .onDelete("cascade")
      table.timestamps()
    })
  }

  down () {
    this.drop('travel_plan_statistics')
  }
}

module.exports = TravelPlanStatisticSchema
